import * as helpers from '../helpers';

jest.mock('uuid', () => {
  return () => '123';
});

describe('sum', () => {
  it('returns null if fed no arguments', () => {
    expect(helpers.sum()).toBe(null);
  });
  it('returns null if fed a single argument', () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it('adds positive number correctly', () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it('adds negative number correctly', () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it('throws if fed something which is not a number', () => {
    expect(() => helpers.sum(1, '2')).toThrow('I want numbers');
  });
  it('can add three positive numbers', () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
  });
  it('can add three negative numbers', () => {
    expect(helpers.sum(-1, -2, -3)).toBe(-6);
  });
});

describe('multiply', () => {
  it('throws an error if either or both inputs are not numbers', () => {
    expect(() => helpers.multiply('a', 1)).toThrow();
    expect(() => helpers.multiply(1, 'a')).toThrow();
    expect(() => helpers.multiply('a', 'b')).toThrow();
  });
  it('correctly multiplies positive numbers', () => {
    expect(helpers.multiply(1, 1)).toBe(1);
    expect(helpers.multiply(1, 2)).toBe(2);
    expect(helpers.multiply(2, 3)).toBe(6);
  });
  it('correctly multiplies negative numbers', () => {
    expect(helpers.multiply(1, -1)).toBe(-1);
    expect(helpers.multiply(1, -2)).toBe(-2);
    expect(helpers.multiply(-2, -3)).toBe(6);
  });
});

describe('personMaker', () => {
  it('makes a person with name and age', () => {
    expect(helpers.personMaker('peter', 4))
      .toMatchObject({
        id: '123',
        name: 'peter',
        age: 4,
      });
  });

  // write more tests! <===========================================
});
