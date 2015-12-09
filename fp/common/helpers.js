export const keepInBounds = function(pos, max) {
  pos = pos.update('x', (x) => x > max.x ? x - max.x : x);
  pos = pos.update('y', (y) => y > max.y ? y - max.y : y);
  return pos;
};
