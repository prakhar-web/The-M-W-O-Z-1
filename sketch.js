const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var player;
var choice;


var engine, world;
var w,s,b;

function preload() {
    w = loadImage("Wbackground.jpg");
    s = loadImage("Sbackground.jpg");
    b = loadImage("Bbackground.jpg");
}
 
function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-120);
    engine = Engine.create();
    world = engine.world;
    player = new selectingPlayer();
}

function draw() {
    background("white");
    player.display(); 
    if(choice === 1) {
        background(w);
    }
    else if(choice === 2) {
        background(b);
    }
    else if(choice === 3) {
        background(s);
    }
    
}
    