import Point from './common/Point';
import Mouse from './common/Mouse';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 300;
canvas.style.outline = '1px solid #ccc';

var mouse = new Mouse(canvas);
var p = new Point(canvas, 100, 25);
p.friction = 0;

var draw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (mouse.dragging) p.velocity = mouse.velocity;

  p.draw();
  requestAnimationFrame(draw);
};
requestAnimationFrame(draw);

var frictionInput = document.getElementById('friction');
var frictionDisplay = document.getElementById('friction-display');
frictionInput.value = p.friction;
frictionDisplay.innerText = frictionInput.valueAsNumber;
frictionInput.addEventListener('input', function (e) {
  p.friction = e.target.valueAsNumber;
  frictionDisplay.innerText = e.target.valueAsNumber;
});
