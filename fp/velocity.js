import { fromJS, Record, Map } from 'immutable';
import * as Vector from './common/Vector';
import * as Point from './common/Point';
import * as Render from './common/Render';

var state = fromJS({
  point: new Point.Record({
    position: new Vector.Record({ x: 50, y: 50 }),
    maxPosition: new Vector.Record({ x: 300, y: 500 })
  }),
  canvas: {
    style: {
      outline: '1px solid #ccc'
    },
    height: 300,
    width: 500
  }
});

const tick = function(state) {
  state = Point.tick(state);
  return state;
};

const render = function (state) {
  Render.canvas(state.get('canvas'));
  Render.point(state.get('point'));
};

const drawLoop = function(state) {
  state = tick(state);
  render(state);
  requestAnimationFrame(() => drawLoop(state));
};
drawLoop(state);
