import Immutable from 'immutable';
import * as Vector from './Vector';
import { keepInBounds } from './helpers';

export const Record = Immutable.Record({
  position: new Vector.Record({ x: 0, y: 0 }),
  maxPosition: new Vector.Record({ x: 0, y: 0 }),
  velocity: new Vector.Record({ x: 0, y: 0 }),
  acceleration: new Vector.Record({ x: 0, y: 0 }),
  mass: 1,
  radius: 20,
  damping: 1
});
const Point = Record;

export const tick = function(state) {
  return state.set('point', state.get('point').withMutations(p => {
    p.velocity = Vector.add(p.velocity, p.acceleration);
    p.velocity = Vector.multiply(p.velocity, p.damping);
    p.position = Vector.add(p.position, p.velocity);
    p.acceleration = Vector.multiply(p.acceleration, 0);
    p.position = keepInBounds(p.position, p.maxPosition);
    return p;
  }));
};
