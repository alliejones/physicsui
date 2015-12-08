# inertial scrolling!



<iframe src="../velocity-friction.html" width="550" height="400"></iframe>



## in words
When the user is clicking or touching, the scrolling surface moves with the pointer.

When the user lets go, keep moving the surface at the same speed the point was going.




<iframe src="../velocity.html" width="550" height="400"></iframe>




When the user is clicking or touching, the scrolling surface moves with the pointer.

When the user lets go, keep moving the surface at the same speed the point was going **and gradually slow it down**.




"speed [and direction] it is going" = velocity
<small>(direction is easy here because we're only worried about one dimension)</small>

"gradually slow it down" = friction



## how fast is the pointer moving?

pointer speed =<br> position in current frame - position in previous frame

`mouse.speed = mouse.x - mouse.prevX;`




## render loop
call a `draw` function once per frame<br>(using `requestAnimationFrame`)

update state and redraw everything




```js
var draw = function() {
  // clear the canvas

  if (mouse.dragging) point.velocity = mouse.velocity;

  point.draw();
  requestAnimationFrame(draw);
};
requestAnimationFrame(draw);
```

```js
class Point {
  draw() {
    this.velocity *= 1 - this.friction;
    this.x += this.velocity;

    // if it's off one edge, loop around to the other side
    // actually draw the circle
  }
}
```



<iframe src="../velocity-friction.html" width="550" height="400"></iframe>
