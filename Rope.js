class Rope{
    constructor(body1, pointB){
        var options = {
            bodyA: body1,
            pointB: pointB,
            length: 250,
            stiffness: 1.2

        }

        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke("black");
        strokeWeight(4);
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
    }
}