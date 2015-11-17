import Point from './common/Point';
import Mouse from './common/Mouse';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 300;
canvas.style.outline = '1px solid #ccc';

var mouse = new Mouse(canvas);
var p = new Point(canvas, 100, 25);

var prevDragging = mouse.dragging;
var draw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!prevDragging && mouse.dragging) {
    p.velocity = 0;
  } else if (prevDragging && !mouse.dragging) {
    p.velocity = mouse.velocity;
  } else if (mouse.dragging) {
    p.x = mouse.x;
  }
  prevDragging = mouse.dragging;

  p.draw();
  requestAnimationFrame(draw);
};
requestAnimationFrame(draw);
