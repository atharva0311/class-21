var fixedrect,movingrect;
var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(800,400);

 gameobject1=createSprite(100,100,50,50);
 gameobject1.shapeColor="green";

 gameobject2=createSprite(100,200,50,50);
 gameobject2.shapeColor="green"

 gameobject3=createSprite(100,300,50,50);
 gameobject3.shapeColor="green";

 gameobject4=createSprite(100,400,50,50);
 gameobject4.shapeColor="green";

  fixedrect=createSprite(200, 200, 100, 20);
  movingrect=createSprite(200,100,20,100);

movingrect.velocityY=5;
fixedrect.velocityY=-5;

  movingrect.debug=true;
  fixedrect.debug=true;

 fixedrect.shapeColor="orange"
 movingrect.shapeColor="orange"

}

function draw() {
  background(255,255,255); 

 // movingrect.x=World.mouseX;
  //movingrect.y=World.mouseY;

  if (isTouching(movingrect,gameobject1))
  {
   
    movingrect.shapeColor="red";
    
    gameobject1.shapeColor="red";

  }

else
{

  gameobject1.shapeColor="green";
  movingrect.shapeColor="orange"

}
if (isTouching(movingrect,gameobject2))
{
 
  movingrect.shapeColor="red";
  
  gameobject2.shapeColor="red";

}

else
{

gameobject2.shapeColor="green";
movingrect.shapeColor="orange"

}

bounceoff(movingrect,gameobject1)

bounceoff(movingrect,fixedrect)


  drawSprites();
}
