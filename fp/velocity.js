import { fromJS, Record, Map, List } from 'immutable';
import * as Vector from './common/Vector';
import * as Point from './common/Point';
import * as Mouse from './common/Mouse';
import * as Render from './common/Render';

var initialState = fromJS({
  mouse: new Mouse.Record(),
  point: new Point.Record({
    position: new Vector.Record({ x: 50, y: 50 }),
    maxPosition: new Vector.Record({ x: 500, y: 300 }),
    // velocity: new Vector.Record({ x: 2, y: 1 }),
    velocity: new Vector.Record({ x: 0, y: 0 }),
    damping: 1
  }),
  canvas: {
    style: {
      outline: '1px solid #ccc'
    },
    height: 300,
    width: 500
  }
});

Render.onRender(s => Mouse.tick(s));
Render.onRender(s => Point.tick(s));

Render.startRenderLoop(initialState);
