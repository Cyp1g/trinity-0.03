var player;
var testEnemy;
var y;
var x;
var comida;
var Player;
var procedural, resourcesimage , leftwalk,rightwalk,idleanimation;
var normal;

function preload(){
  resourcesimage= loadImage("/Assets/resourcesproyotype.png");
  leftwalk = loadAnimation("/Assets/left_walk.png","/Assets/left_walk1.png","/Assets/left_walk2.png","/Assets/left_walk3.png");
  rightwalk = loadAnimation("/Assets/right_walk.png","/Assets/right_walk1.png","/Assets/right_walk2.png","/Assets/right_walk3.png");
  idleanimation = loadAnimation("/Assets/right_idle.png","/Assets/right_idle1.png","/Assets/right_idle2.png");
  normal = loadImage("/Assets/right_idle.png");
}

function setup() {
  comida=new Group();
  createCanvas(800,800);
  player = new Jugador(100,100,400,400,20,20);
  procedural = new Resources();
  procedural.randomizacion(comida,4,0.09);
  testEnemy = new Enemies(25,600,600,20,20);
  player.display();
  
}

function draw() {
  drawSprites();

  background(113,248,400);  
  
  player.moves();
  y=player.y;
  x=player.x;

  console.log(x);
  console.log(y);
  testEnemy.display();
  testEnemy.follow(x,y);
  
}