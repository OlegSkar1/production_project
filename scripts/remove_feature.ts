import { Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2];
const featureState = process.argv[3];

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
    if (child.asKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeature') {
      isToggleFeature = true;
    }
  });
  return isToggleFeature;
};

files.forEach((SourceFile) => {
  SourceFile.forEachDescendant((node) => {
    if (node.asKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

      if (!objectOptions) return;

      const nameProperty = objectOptions.getProperty('name');

      const onFuncProperty = objectOptions.getProperty('on');
      const offFuncProperty = objectOptions.getProperty('off');

      const featureName = nameProperty?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getText().slice(1, -1);

      const onFunction = onFuncProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
      const offFunction = offFuncProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);

      if (featureName !== removedFeatureName) return;

      if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '');
      }

      if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '');
      }
    }
  });
});

project.save();
