const { executeOnce } = require('../src');
const once = executeOnce();

describe('execute-once', () => {
  it('should return value once', () => (
    expect(once(() => "Hello, World!"))
      .toBe("Hello, World!")
  ));

  it('should return undefined on multiple calls', () => (
    expect(once(() => "Hello, World!"))
      .toBe(undefined)
  ));
});