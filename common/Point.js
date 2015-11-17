export default class Point {
  constructor(canvas, x, radius) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = x;
    this.y = 150;
    this.friction = 0;
    this.radius = radius;
    this.velocity = 0;
  }

  applyVelocity() {
    this.velocity *= 1 - this.friction;
    this.x += this.velocity;
  }

  draw() {
    this.applyVelocity();
    if (this.x > this.canvas.width) this.x = this.x - this.canvas.width;
    if (this.x < 0) this.x = this.canvas.width;

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fill();
    this.ctx.closePath();
  }
}
