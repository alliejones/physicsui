import Vector from 'victor';

export default class Point {
  constructor(canvas, x, y, mass = 1, damping = 1) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.position = new Vector(x, y);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.mass = mass;
    this.radius = 20; // purely decorative
    this.damping = damping;
  }

  applyForce(force) {
    this.acceleration.add(force.divide(new Vector(this.mass, this.mass)));
  }

  update() {
    this.velocity.add(this.acceleration).multiply(new Vector(this.damping, this.damping));
    this.position.add(this.velocity);
    this.acceleration.multiply(new Vector(0, 0));
  }

  display() {
    this.ctx.beginPath();
    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fill();
    this.ctx.closePath();
  }

  keepInWindow() {
    if (this.position.x > this.canvas.width)
      this.position.subtract(new Vector(this.canvas.width, 0));
    if (this.position.x < 0)
      this.position.addX(new Vector(this.canvas.width, 0));
    if (this.position.y > this.canvas.height)
      this.position.subtractY(new Vector(0, this.canvas.height));
    if (this.position.y < 0)
      this.position.addY(new Vector(0, this.canvas.height));
  }
}
