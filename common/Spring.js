import Vector from 'victor';

export default class Spring {
  constructor(canvas, x, y, restingLength, k = 0.2) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.anchor = new Vector(x, y);
    this.restingLength = restingLength;
    this.k = k;
  }

  connect(point) {
    var force = point.position.clone().subtract(this.anchor);
    var stretch = force.length() - this.restingLength;
    // F = k * stretch
    var f = -1 * this.k * stretch;
    force.normalize().multiply(new Vector(f, f));
    point.applyForce(force);
  }

  display() {
    this.ctx.beginPath();
    this.ctx.arc(this.anchor.x, this.anchor.y, 5, 0, 2 * Math.PI, false);
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawLine(point) {
    this.ctx.beginPath();
    this.ctx.moveTo(this.anchor.x, this.anchor.y);
    this.ctx.lineTo(point.position.x, point.position.y);
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
