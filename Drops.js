class Drops {

 constructor(x,y){
        
var options={
    
    'restitution':0.8,
    'friction':0.1,
    'density':1.0
}
this.body = Bodies.circle(x, y, 10, options);
this.x = x;
this.y = y;

World.add(world, this.body);

    }
   
    display(){

    push();
    translate(this.body.position.x,this.body.position.y);
    ellipse(0,0,10,10);
    pop();

    }
}