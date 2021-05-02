var a,b,c

function setup() {
  createCanvas(800,400);
  A = createSprite(100, 200, 50, 150);
  B = createSprite(600, 200, 150, 50);
  B.shapeColor = "Pink"
  A.shapeColor = "Pink"
  c = createSprite(700, 200, 50, 50);
  c.shapeColor = "Pink"
}

function draw() {
  background("Blue");  
  drawSprites();
  B.x = mouseX
  B.y = mouseY
 if(touching(c,B)){
  B.shapeColor = "Red"
  c.shapeColor = "cyan"
  }
  else{
    B.shapeColor = "Pink"
    c.shapeColor = "Pink"
  }
 }


