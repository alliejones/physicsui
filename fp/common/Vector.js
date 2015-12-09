import Immutable from 'immutable';

export const Record = Immutable.Record({
  x: 0,
  y: 0
});
const Vector = Record;

export const add = function(a, b) {
  return new Vector({
    x: a.x + b.x,
    y: a.y + b.y
  });
};

export const multiply = function(v, m) {
  return new Vector({
    x: v.x * m,
    y: v.y * m
  });
};
