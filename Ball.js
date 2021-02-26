class Ball {
    constructor(x,y,r) {
        var options = {
            density:1,
            frictionAir:0.005,
            }
            this.x = x;
            this.y = y;
            this.r = r;
            this.body = Bodies.circle(x, y, r, options);


            World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("black");
        fill("grey");
        ellipse(0,0, this.r, this.r);
        pop();
    }
}