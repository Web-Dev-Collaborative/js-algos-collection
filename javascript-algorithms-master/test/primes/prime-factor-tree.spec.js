import {primeFactorTree} from "../../src/primes/prime-factor-tree";

describe("Prime factor tree", () => {
  "use strict";

  it("for number 104743 should return [104743]", () => {
    expect(primeFactorTree(104743).toString()).toEqual([104743].toString());
  });

  it("for number 18 should return [2, 3, 3]", () => {
    expect(primeFactorTree(18).toString()).toEqual([2, 3, 3].toString());
  });

  it("should give the empty list for number less or equal 1", () => {
    expect(primeFactorTree(-12).toString()).toEqual([].toString());
    expect(primeFactorTree(0).toString()).toEqual([].toString());
    expect(primeFactorTree(1).toString()).toEqual([].toString());
  });

  it("sum of primes for given number 600851475143 should be 9238", () => {
    const primes = primeFactorTree(600851475143);
    const sumOfPrimes = primes.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    });

    expect(sumOfPrimes).toEqual(9238);
  });
});
