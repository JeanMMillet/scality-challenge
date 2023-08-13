type FibonnacciArrays = (value: number) => number[];

export const createArraysofFibonacciNumbers: FibonnacciArrays = (value) => {
  const FibonacciArray = [0, 1];
  if (value <= 1) {
    return FibonacciArray;
  }

  let a = FibonacciArray[FibonacciArray.length - 1];
  let b = FibonacciArray[FibonacciArray.length - 2];
  while (a + b <= value) {
    const nextNumber = a + b;
    FibonacciArray.push(nextNumber);
    a = FibonacciArray[FibonacciArray.length - 1];
    b = FibonacciArray[FibonacciArray.length - 2];
  }
  return FibonacciArray;
};
