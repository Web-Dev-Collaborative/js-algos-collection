import {quicksort} from "../../src/sorting/3-way-string-quicksort.js";

describe("Most-Significant Digit", () => {
  "use strict";

  it("should work with empty arrays", () => {
    expect(quicksort([]).length).toBe(0);
  });

  it("should work with arrays with a single element", () => {
    const arr = ["a"];
    quicksort(arr);
    expect(arr.length).toBe(1);
    expect(arr[0]).toBe("a");
  });

  it("should work with arrays with equally length strings", () => {
    const arr = ["bb", "aa", "cc"];
    quicksort(arr);
    expect(arr.length).toBe(3);
    expect(arr[0]).toBe("aa");
    expect(arr[1]).toBe("bb");
    expect(arr[2]).toBe("cc");
  });

  it("should work with arrays with differently length strings", () => {
    const arr = ["bb", "aaa", "a", "aa"];
    quicksort(arr);
    expect(arr.length).toBe(4);
    expect(arr[0]).toBe("a");
    expect(arr[1]).toBe("aa");
    expect(arr[2]).toBe("aaa");
    expect(arr[3]).toBe("bb");
  });
});
