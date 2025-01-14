import {kmp as indexOf} from "../../src/searching/knuth-morris-pratt";

describe("The string searching algorithm of Knuth-Morris-Pratt", () => {
  "use strict";

  it("should find the empty string in any string", () => {
    expect(indexOf("", "")).toBe(0);
    expect(indexOf("foo", "")).toBe(0);
  });

  it(
    "should return negative value for patterns, which are " +
      "not part of the string",
    () => {
      expect(indexOf("foo", "bar") < 0).toBeTruthy();
      expect(indexOf("f", "foobar") < 0).toBeTruthy();
      expect(indexOf("foobar", "fobar") < 0).toBeTruthy();
    }
  );

  it("should return the first index of the matching pattern", () => {
    expect(indexOf("foo", "f")).toBe(0);
    expect(indexOf("foo", "oo")).toBe(1);
    expect(indexOf("foo", "o")).toBe(1);
    expect(indexOf("foobar", "foo")).toBe(0);
    expect(indexOf("foobar", "bar")).toBe(3);
  });
});
