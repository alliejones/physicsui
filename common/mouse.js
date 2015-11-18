import Vector from 'victor';

export default function (el) {
  var state = {
    position: new Vector(0, 0),
    dragging: false,
    velocity: new Vector(0, 0)
  };
  var prevPosition = new Vector(0, 0);

  el.addEventListener('mousemove', function(e) {
    state.position = new Vector(e.clientX, e.clientY);
  });

  document.addEventListener('mousedown', function(e) {
    state.dragging = true;
  });

  document.addEventListener('mouseup', function(e) {
    state.dragging = false;
  });

  var calcVelocity = function() {
    state.velocity = state.position.clone().subtract(prevPosition);
    prevPosition = state.position.clone();
    requestAnimationFrame(calcVelocity);
  };
  requestAnimationFrame(calcVelocity);

  return state;
};
