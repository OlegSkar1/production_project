import { Node, Project, SyntaxKind, JsxAttribute } from 'ts-morph';

const removedFeatureName = process.argv[2];
const featureState = process.argv[3];

const toggleFunctionName = 'toggleFeature';
const toggleComponentName = 'ToggleFeature';

if (!removedFeatureName) {
  throw new Error('Укажите название фича-флага');
}

if (!featureState) {
  throw new Error('Укажите состояние фичи (on или off)');
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Некорректное значение состояния фичи (on или off)');
}

const project = new Project();

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx']);

const files = project.getSourceFiles();

const isToggleFunction = (node: Node) => {
  let isToggleFeature = false;

  node.forEachChild((child) => {
    if (child.asKind(SyntaxKind.Identifier) && child.getText() === toggleFunctionName) {
      isToggleFeature = true;
    }
  });
  return isToggleFeature;
};

const isToggleComponent = (node: Node) => {
  const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

  return identifier?.getText() === toggleComponentName;
};

const replaceToggleFunction = (node: Node) => {
  const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

  if (!objectOptions) return;

  const nameProperty = objectOptions.getProperty('name');

  const onFuncProperty = objectOptions.getProperty('on');
  const offFuncProperty = objectOptions.getProperty('off');

  const featureName = nameProperty?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getLiteralValue();

  const onFunction = onFuncProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
  const offFunction = offFuncProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);

  if (featureName !== removedFeatureName) return;

  if (featureState === 'on') {
    node.replaceWithText(onFunction?.getBody().getText() ?? '');
  }

  if (featureState === 'off') {
    node.replaceWithText(offFunction?.getBody().getText() ?? '');
  }
};

const getAttributeByName = (jsxAttributes: JsxAttribute[], name: string) => {
  return jsxAttributes.find((attribute) => attribute.getName() === name);
};

const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute?.getFirstDescendantByKind(SyntaxKind.JsxExpression)?.getExpression()?.getText();

  if (value?.startsWith('(')) {
    return value.slice(1, -1);
  }

  return value
};

const replaceToggleComponent = (node: Node) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

  const nameAttribute = getAttributeByName(attributes, 'name');

  const onComponentAttribute = getAttributeByName(attributes, 'on');
  const offComponentAttribute = getAttributeByName(attributes, 'off');

  const featureName = nameAttribute?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getLiteralValue();

  const onComponent = getReplacedComponent(onComponentAttribute)
  const offComponent = getReplacedComponent(offComponentAttribute)

  if (featureName !== removedFeatureName) return;

  if (featureState === 'on' && onComponent) {
    node.replaceWithText(onComponent);
  }

  if (featureState === 'off' && offComponent) {
    node.replaceWithText(offComponent);
  }
};

files.forEach((SourceFile) => {
  SourceFile.forEachDescendant((node) => {
    if (node.asKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
       return replaceToggleFunction(node);
    }

    if (node.asKind(SyntaxKind.JsxSelfClosingElement) && isToggleComponent(node)) {
       return replaceToggleComponent(node);
    }
  });
});

project.save();
