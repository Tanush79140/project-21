var bullet,wall;
var speed,weight,thickness

function setup() {
  createCanvas(1600,400);

  thickness= random(22,83)
  
  bullet = createSprite(50,200,50,50);
  wall= createSprite(1000,200,thickness,height/2);

  speed= random(223,321);
  weight= random(30,52);
  

   bullet.velocityX = speed;
}

function draw() {
  background("black");  
   

   // deformation

   if(wall.x-bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX=0;
var deformation=0.5 * weight * speed * speed/22500;
if(deformation>180){
  bullet.shapeColor=color("white");
}

if(deformation<180 && deformation>100){
  bullet.shapeColor=color("white");
}

if(deformation<100){
  bullet.shapeColor=color("white");
}
   }

   if(hasCollided(bullet,wall)){

    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
   
  if(damage>10)
{
  wall.shapeColor=color("red");
}

if(damage<10){
  wall.shapeColor=color("green");
}
  
  }

 
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}