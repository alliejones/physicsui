import Vector from 'victor';

import Mouse from './common/Mouse';
import Point from './common/Point';
import Spring from './common/Spring';
import createControl from './common/createControl';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 300;
canvas.style.outline = '1px solid #ccc';

var mouse = new Mouse(canvas);
var p = new Point(canvas, canvas.width/2 + 15, 50, 5, 0.8);
var s = new Spring(canvas, canvas.width/2, 150, 0, 0.15);

var draw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (mouse.dragging) p.velocity = mouse.velocity;
  else s.connect(p);
  s.display();
  p.update();
  p.display();
  requestAnimationFrame(draw);
};
requestAnimationFrame(draw);

createControl('mass', p.mass, v => p.mass = v);
createControl('damping', p.damping, v => p.damping = v);
createControl('stiffness', s.k, v => s.k = v);

