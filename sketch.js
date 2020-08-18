var snake;
var rez=20;
var w,h;
var food;

function setup() {
  createCanvas(400, 400);
  w = floor(width/rez);
  h = floor(height/rez);
  snake = new Snake();
  createFood();
}

function createFood(){
  food = createVector(floor(random(w)),floor(random(h)));
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.xdir = 0;
    snake.ydir = -1;
  }
  else if(keyCode === LEFT_ARROW){
    snake.xdir = -1;
    snake.ydir = 0;
  }
  else if(keyCode === RIGHT_ARROW){
    snake.xdir = 1;
    snake.ydir = 0;
  }
  else if(keyCode === DOWN_ARROW){
    snake.xdir = 0;
    snake.ydir = 1;
  }
}

function draw() {
  scale(rez);
  frameRate(5);
  background(220);
  snake.update();
  snake.show();
  if(snake.checkend()){
    noLoop();
    print("End");
  }
  if(snake.eat(food)){
    createFood();
  }
  fill(255,0,0);
  noStroke();
  rect(food.x,food.y,1,1);
}