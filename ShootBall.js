class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.Shoot = Constraint.create(options);

        World.add(world, this.sling);
    }

    

    attach(body){
        gamestate = "red"
    }

    shoot(){
        this.sling.bodyA = null;
    }

    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            this.pointB.x = launcherx;
            this.pointB.y = launchery;
            var pointB = this.pointB;
        }
    }
}
