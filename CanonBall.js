class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = 25;
    this.height = 25;

    this.image = loadImage("asset/canonBall.png");

    World.add(world, this.body);
  };

  display(){
    if (gamestate === "launch"){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER)
      this.image(this.ballImage,0,0,this.width,this.height);
      pop();
    }
  };
};
