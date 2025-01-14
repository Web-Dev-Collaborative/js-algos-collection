import {SegmentTree} from "../../src/data-structures/segment-tree.js";

const defaultAggregate = (a, b) => {
  "use strict";
  return Math.min(a, b);
};

describe("Segment Tree", () => {
  "use strict";

  describe("indexing", () => {
    it("should be a constructor function", () => {
      expect(typeof SegmentTree).toBe("function");
    });

    it("should start with null original array", () => {
      expect(new SegmentTree()._original).toBe(null);
    });

    it("should start with empty array as data", () => {
      expect(new SegmentTree()._data).not.toBe(null);
      expect(new SegmentTree()._data.length).toBe(0);
    });

    it("should work with empty arrays", () => {
      const tree = SegmentTree.indexArray([], Infinity, defaultAggregate);
      expect(tree._data).toBeTruthy();
      expect(tree._data.length).toBe(0);
    });

    it("should index arrays with one element", () => {
      const tree = SegmentTree.indexArray([1], Infinity, defaultAggregate);
      expect(tree._data).toBeTruthy();
      expect(tree._data.length).toBe(1);
    });

    it("should index any array", () => {
      let tree = SegmentTree.indexArray([1, 2, 3], Infinity, defaultAggregate);
      expect(tree._data).toEqual([1, 1, 3, 1, 2]);

      tree = SegmentTree.indexArray([1, 2, 3, 6], Infinity, defaultAggregate);
      expect(tree._data).toEqual([1, 1, 3, 1, 2, 3, 6]);
    });
  });

  describe("should find the proper value at given interval", () => {
    it("should properly find the minimum when in range", () => {
      let tree = SegmentTree.indexArray([1], Infinity, defaultAggregate);
      expect(tree.query(0, 0)).toBe(1);

      tree = SegmentTree.indexArray([1, 2], Infinity, defaultAggregate);
      expect(tree.query(0, 0)).toBe(1);
      expect(tree.query(0, 1)).toBe(1);
      expect(tree.query(1, 1)).toBe(2);

      tree = SegmentTree.indexArray([1, -1, 2], Infinity, defaultAggregate);
      expect(tree.query(0, 2)).toBe(-1);
      expect(tree.query(0, 1)).toBe(-1);
      expect(tree.query(1, 1)).toBe(-1);
      expect(tree.query(1, 2)).toBe(-1);
      expect(tree.query(2, 2)).toBe(2);
    });

    it("should properly find the minimum when outside range", () => {
      let tree = SegmentTree.indexArray([1], Infinity, defaultAggregate);
      expect(tree.query(0, 2)).toBe(1);

      tree = SegmentTree.indexArray([1, 2, 3], Infinity, defaultAggregate);
      expect(tree.query(0, 20)).toBe(1);
      expect(tree.query(2, 20)).toBe(3);
      expect(Number.isFinite(tree.query(20, 25))).toBe(false);
    });

    it("should throw when the start index is bigger than end", () => {
      const tree = SegmentTree.indexArray([1], Infinity, defaultAggregate);
      expect(() => {
        tree.query(2, 1);
      }).toThrow();
      expect(() => {
        tree.query(1, 1);
      }).not.toThrow();
    });
  });
});
