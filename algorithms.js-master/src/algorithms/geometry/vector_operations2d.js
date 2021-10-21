/**
 * @param A point a, example: {x : 0,y : 0}
 * @param A point b, example: {x : 0,y : 0}
 * @return A vector ab, example: {x : 0,y : 0}
 */
const newVector = (a, b) => ({x: b.x - a.x, y: b.y - a.y});

/**
 * @param A vector v, example: {x : 0,y : 0}
 * @return The length of v.
 */
const length = v => v.x * v.x + v.y * v.y;

/**
 * Performs the cross product between two vectors.
 * @param A vector object, example: {x : 0,y : 0}
 * @param A vector object, example: {x : 0,y : 0}
 * @return The result of the cross product between u and v.
 */
const crossProduct = (u, v) => u.x * v.y - u.y * v.x;

/**
 * Calculates the area of the parallelogram that can be
 * generated by the vectors ab and ac.
 *
 * @param A point a, example: {x : 0,y : 0}
 * @param A point b, example: {x : 0,y : 0}
 * @param A point c, example: {x : 0,y : 0}
 * @return A vector ab, example: {x : 0,y : 0}
 * Note: Given that the area of the parallelogram is equal
 * to the length of the vector w = (ab)x(ac) times -1, if the
 * z coordinate of w is negative. With the right-hand rule
 * we can deduce that if the area is negative, then
 * the vector ab followed by the vector ac do not performs a
 * left-turn.
 */
const parallelogramArea = (a, b, c) =>
  crossProduct(newVector(a, b), newVector(a, c));

/**
 * @param A point object, example: {x : 0,y : 0}
 * @param A point object, example: {x : 0,y : 0}
 * @param A point object, example: {x : 0,y : 0}
 * @return Returns true if the point c is clockwise with respect
 * to the straight-line which contains the vector ab, otherwise returns false.
 * Note: This rule is given by the Right-hand rule.
 */
const isClockwise = (a, b, c) => parallelogramArea(a, b, c) < 0;

/**
 * @param A point object, example: {x : 0,y : 0}
 * @param A point object, example: {x : 0,y : 0}
 * @param A point object, example: {x : 0,y : 0}
 * @return Returns true if the point c is counter-clockwise with respect
 * to the straight-line which contains the vector ab, otherwise returns false.
 * Note: This rule is given by the Right-hand rule.
 */
const isCounterClockwise = (a, b, c) => parallelogramArea(a, b, c) > 0;

module.exports = {
  newVector: newVector,
  length: length,
  crossProduct: crossProduct,
  parallelogramArea: parallelogramArea,
  isClockwise: isClockwise,
  isCounterClockwise: isCounterClockwise
};
