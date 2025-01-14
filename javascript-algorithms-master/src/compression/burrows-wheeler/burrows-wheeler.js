(exports => {
  "use strict";

  /**
   * Burrows Wheeler.
   *
   * This algorithm is commonly used as a step in the process of compressing data,
   * it rearranges a character string into runs of similar characters making algorithms
   * like move-to-front transform and run-length encoding reach higher compression
   * rates. This implementation only supports characters with ascii code greater than $(36) as
   * 36 is used at the process of encode and decode.
   *
   * @example
   * const burrows = require('path-to-algorithms/src/burrows-wheeler/burrows-wheeler').burrowsWheeler;
   * const s = 'ananabanana';
   * const encodedStr = burrows.encode(s);
   * console.log(encodedStr);
   * const decodedStr = burrows.decode(encodedStr);
   * console.log(decodedStr);
   *
   * @module compression/burrows-wheeler/burrows-wheeler
   */
  exports.burrowsWheeler = () => {};

  /**
   * Consumes n^2 space.
   */
  exports.burrowsWheeler.encode = str => {
    str = `$${str}`;
    const combinations = [];
    for (let i = 0; i < str.length; i += 1) {
      combinations.push(str.substring(i) + str.substring(0, i));
    }
    const sorted = combinations.sort();
    const result = [];
    for (let i = 0; i < sorted.length; i += 1) {
      result.push(combinations[i][str.length - 1]);
    }
    return result.join("");
  };

  exports.burrowsWheeler.decode = encodedStr => {
    const sortedCharSequence = encodedStr.split("").sort().join("");
    const leftSide = {};
    const rightSide = {};
    const maxEachCharLeft = {};
    const maxEachCharRight = {};

    for (let i = 0; i < encodedStr.length; i += 1) {
      let idLeft = sortedCharSequence[i];
      if (idLeft in maxEachCharLeft) {
        maxEachCharLeft[idLeft] = maxEachCharLeft[idLeft] + 1;
      } else {
        maxEachCharLeft[idLeft] = 1;
      }
      idLeft += String(maxEachCharLeft[idLeft]);

      let idRight = encodedStr[i];
      if (idRight in maxEachCharRight) {
        maxEachCharRight[idRight] = maxEachCharRight[idRight] + 1;
      } else {
        maxEachCharRight[idRight] = 1;
      }
      idRight += String(maxEachCharRight[idRight]);

      leftSide[idLeft] = { char: sortedCharSequence[i], right: idRight };
      rightSide[idRight] = { char: encodedStr[i], left: idRight };
    }
    let result = "";
    const firstChar = sortedCharSequence[0];
    let searchChar = `${firstChar}1`;
    const endChar = searchChar;
    while (rightSide[leftSide[searchChar].right].left !== endChar) {
      result += leftSide[searchChar].char;
      searchChar = rightSide[leftSide[searchChar].right].left;
    }
    result += leftSide[searchChar].char;
    result = result.substring(1).split("").reverse().join("");
    return result;
  };
})(typeof exports === "undefined" ? window : exports);
