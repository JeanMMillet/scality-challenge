import { createArraysofFibonacciNumbers } from "./Function/FibonacciNumbers";

test("arrays up to 3", () => {
  expect(createArraysofFibonacciNumbers(3)).toStrictEqual([0, 1, 1, 2, 3]);
});

test("arrays up to 100", () => {
  expect(createArraysofFibonacciNumbers(100)).toStrictEqual([
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,
  ]);
});
test("arrays up to 1000", () => {
  expect(createArraysofFibonacciNumbers(1000)).toStrictEqual([
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
  ]);
});

test("arrays up to 100 000", () => {
  expect(createArraysofFibonacciNumbers(100000)).toStrictEqual([
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025,
  ]);
});

test("arrays up to 1 000 000", () => {
  expect(createArraysofFibonacciNumbers(1000000)).toStrictEqual([
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811,
    514229, 832040,
  ]);
});

test("arrays up to 1", () => {
  expect(createArraysofFibonacciNumbers(1)).toStrictEqual([0, 1]);
});

test("arrays up to 0", () => {
  expect(createArraysofFibonacciNumbers(0)).toStrictEqual([0, 1]);
});

test("negative number case", () => {
  expect(createArraysofFibonacciNumbers(-11)).toStrictEqual([0, 1]);
});
