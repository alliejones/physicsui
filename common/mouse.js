export default function (el) {
  var state = {
    x: 0,
    y: 0,
    dragging: false,
    velocity: 0
  };
  var prevMouseX = 0;

  el.addEventListener('mousemove', function(e) {
    state.x = e.clientX;
    state.y = e.clientY;
  });

  document.addEventListener('mousedown', function(e) {
    state.dragging = true;
  });

  document.addEventListener('mouseup', function(e) {
    state.dragging = false;
  });

  var calcVelocity = function() {
    state.velocity = state.x - prevMouseX;
    prevMouseX = state.x;
    requestAnimationFrame(calcVelocity);
  };
  requestAnimationFrame(calcVelocity);

  return state;
};
