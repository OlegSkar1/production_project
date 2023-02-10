import { classNames } from './classNames';

describe('classNames', () => {
  it('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  it('with additional class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
  });
  it('with mods', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(
      expected
    );
  });
  it('with mods false', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])
    ).toBe(expected);
  });
});
