import { fromJS, Record, Map, List } from 'immutable';
import * as Vector from './common/Vector';
import * as Point from './common/Point';
import render from './common/Render';

var state = fromJS({
  point: new Point.Record({
    position: new Vector.Record({ x: 50, y: 50 }),
    maxPosition: new Vector.Record({ x: 500, y: 300 }),
    // velocity: new Vector.Record({ x: 2, y: 1 })
    velocity: new Vector.Record({ x: 0, y: 0 })
  }),
  canvas: {
    style: {
      outline: '1px solid #ccc'
    },
    height: 300,
    width: 500
  }
});

var updates = new List();
const tick = function(state, updates) {
  updates = updates.push((s) => Point.tick(state));
  return applyUpdates(state, updates);
};

const applyUpdates = function(state, updates) {
  const newState = updates.reduce((state, update) => update(state), state);
  updates = new List();
  return newState;
};

const drawLoop = function(state) {
  state = tick(state, updates);
  render(state);
  requestAnimationFrame(() => drawLoop(state));
};
drawLoop(state);
