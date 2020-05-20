const Engine = Matter.Engine;
const World = Matter.world;
const Bodies = Matter.World;
const Canstraint = Matter.Canstraint;

var tanker,ground,shootingball,bubble;

var world,engine;

function setup() {
    createCanvas(400,400)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,50,20);
    tanker = new Tanker(400,50,20);

    ball1 = new Ball(400,50,20);
    ball2 = new Ball(500,100,20);
    ball3 = new Ball(600,150,20);
    cannonBall = new CanonBall(20,20);
    shot = new ShootBall(20,20);
}

function draw() {
    background("red")
    Engine.update(engine)

    ground.display();
    tanker.display();

    cannonBall.display();
    shot.display();

    ball1.display();
    ball2.display();
    ball3.display();

    if (keyIsDown(UP_ARROW)){
    
    shot.attach(cannonBall.body)
    
    }
}


function keyReleased() {
    if (keyCode === DOWN_ARROW){

        gamestate = "launch";

        shot.shoot()
        
    }
}