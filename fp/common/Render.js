const canvasEl = document.getElementById('canvas');
const ctx = canvasEl.getContext('2d');
var prevCanvasState = null;

const renderCanvas = function (canvasState) {
  var c = canvasState;
  ctx.clearRect(0, 0, c.get('width'), c.get('height'));

  if (c !== prevCanvasState) {
    canvasEl.width = c.get('width');
    canvasEl.height = c.get('height');
    c.get('style').forEach((v, k) => {
      canvasEl.style[k] = v;
    });
    prevCanvasState = c;
  }
};

const renderPoint = function (pointState) {
  const p = pointState;
  ctx.beginPath();
  ctx.arc(p.position.x, p.position.y, p.radius, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.closePath();
};

export default function (state) {
  renderCanvas(state.get('canvas'));
  renderPoint(state.get('point'));
};
