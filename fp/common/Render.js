const canvasEl = document.getElementById('canvas');
const ctx = canvasEl.getContext('2d');
var prevCanvasState = null;

export const canvas = function (canvasState) {
  var c = canvasState;
  ctx.clearRect(0, 0, c.width, c.height);

  if (c !== prevCanvasState) {
    canvasEl.width = c.get('width');
    canvasEl.height = c.get('height');
    c.get('style').forEach((v, k) => {
      canvasEl.style[k] = v;
    });
    prevCanvasState = c;
  }
};

export const point = function (pointState) {
  const p = pointState;
  ctx.beginPath();
  ctx.arc(p.position.x, p.position.y, p.radius, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.closePath();
};
