import {sieveOfAtkins} from "../../src/primes/sieve-of-atkins";

describe("Sieve Of Atkins", () => {
  "use strict";

  it("should give the right sequence of primes for limit 12", () => {
    expect(sieveOfAtkins(12).toString()).toEqual([2, 3, 5, 7, 11].toString());
  });

  it("should give the empty list for limit less or equal 1", () => {
    expect(sieveOfAtkins(-12).toString()).toEqual([].toString());
    expect(sieveOfAtkins(0).toString()).toEqual([].toString());
    expect(sieveOfAtkins(1).toString()).toEqual([].toString());
  });

  it("sum of prime numbers up to 2000000 limit should be 142913828922", () => {
    const sieve = sieveOfAtkins(2000000);
    const sumOfPrimes = sieve.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    });

    expect(sumOfPrimes).toEqual(142913828922);
  });
});
