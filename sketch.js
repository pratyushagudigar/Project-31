const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var drops=[]
var engine, world;
var maxDrops = 200;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(700,400);
    engine = Engine.create();
    world = engine.world;

    
    for(var i=0 ; i< maxDrops; i++){
        drops.push(new Drops(random(0,400),(random(0,400))));
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    
    for(var i=0 ; i< maxDrops; i++){
        drops[i].display();
    }
}   


