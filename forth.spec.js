const Forth = require('./forth');

describe('Forth business class can', () => {
  test('return an instance of the Forth class', () => {
    const forth = new Forth();
    expect(forth.constructor.name).toEqual('Forth');
  });

  xtest('skip a test marked with "xtest" instead of "test"', () => {
    expect(null).toEqual(null);
  });
});
