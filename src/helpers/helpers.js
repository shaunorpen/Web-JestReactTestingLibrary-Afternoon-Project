import uuid from 'uuid';

export function sum(...numbers) {
  const enoughArgs = numbers.length > 1;
  if (!enoughArgs) return null;

  const somethingNotNumber = numbers.some(number => {
    return typeof number !== 'number';
  });

  if (somethingNotNumber) {
    throw new Error('I want numbers');
  }

  return numbers.reduce((acc, currentNumber) => {
    return acc + currentNumber;
  });
}

export function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('numbers required');
  }
  return a * b;
}

export function personMaker(name, age) {
  return {
    id: uuid(),
    name,
    age,
  };
}

export function objectToArray(obj) {
  if (typeof(obj) !== 'object' || obj === null) 
    throw new Error('Can only accept objects as input');
  
  let result = [];

  Object.keys(obj).map(key => {
    return result.push( [ key, obj[key] ] )
  });
  
  return result;
}