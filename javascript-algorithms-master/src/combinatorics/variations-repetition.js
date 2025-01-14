(exports => {
  "use strict";

  const variationsWithRepetition = (() => {
    let res;

    function variations(arr, k, index, current) {
      if (k === index) {
        return res.push(current.slice());
      }
      for (let i = 0; i < arr.length; i += 1) {
        current[index] = arr[i];
        variations(arr, k, index + 1, current);
      }
    }

    /**
     * Finds all the variations with repetition of given array.<br><br>
     * Variations with repetition is the number of ways to sample k elements
     * from a set of elements (which may be repeated).
     *
     * @example
     * var variations = require('path-to-algorithms/src/combinatorics/' +
     * 'variations-repetition').variationsWithRepetition;
     * var result = variations(['apple', 'orange', 'pear'], 2);
     *
     * // [['apple', 'apple'],
     * //  ['apple', 'orange'],
     * //  ['apple', 'pear'],
     * //  ['orange', 'apple'],
     * //  ['orange', 'orange'],
     * //  ['orange', 'pear'],
     * //  ['pear', 'apple'],
     * //  ['pear', 'orange'],
     * //  ['pear', 'pear']]
     * console.log(result);
     *
     * @module combinatorics/variations-repetition
     * @public
     * @param arr {Array} Set of items.
     * @param k {Number} Size of each combination.
     * @return {Array} Returns all combinations.
     */
    return (arr, k) => {
      res = [];
      variations(arr, k, 0, []);
      const temp = res;
      res = undefined;
      return temp;
    };
  })();

  exports.variationsWithRepetition = variationsWithRepetition;
})(typeof window === "undefined" ? module.exports : window);
