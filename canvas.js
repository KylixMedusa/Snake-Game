var canvas,width,height,ctx;


function createCanvas(w,h){
    canvas = document.createElement("CANVAS");
    width = parseInt(w);
    height = parseInt(h);
    canvas.setAttribute('width',w);
    canvas.setAttribute('height',h);
    console.log(canvas);
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
}

function background(){
    ctx.beginPath();
    let r = 0,g = 0,b = 0,a = 255;
    switch(arguments.length){
        case 1: 
            r = arguments[0];
            ctx.fillStyle = "rgb("+r+","+r+","+r+")";
            break;
        case 2: 
            r = arguments[0];
            a = arguments[1];
            ctx.fillStyle = "rgba("+r+","+r+","+r+","+a+")";
            break;
        case 3: 
            r = arguments[0];
            g = arguments[1];
            b = arguments[2];
            ctx.fillStyle = "rgb("+r+","+g+","+b+")";
            break;
        case 4:
            r = arguments[0];
            g = arguments[1];
            b = arguments[2];
            a = arguments[3];
            ctx.fillStyle = "rgba("+r+","+g+","+b+","+a+")";
            break;

    }
    ctx.rect(0, 0, width, height);
    ctx.fill();
}

setup();
var frameRateVal = 5;

var drawloop = setInterval(draw,1000/frameRateVal);
draw();

function floor(r){
    // console.log(r);
    return Math.floor(r);
}

function createVector(x,y){
    return {x:x,y:y};
}

function random(){
    return Math.random()*(arguments[0]+1);
}
function noLoop(){
    clearInterval(drawloop);
}
function scale(r){
    console.log(r);
    ctx.scale(r, r);
}
// function setup(){
//     createCanvas(200,200);
// }

// function draw(){
//     background(255,0,0,100);
// }


var snake;
var rez;
var w,h;
var food;
var fillStyle;
var lineWidth;

function setup() {
    rez=30;
  createCanvas(600, 600);
  w = floor(width/rez);
  h = floor(height/rez);
  snake = new Snake();
  createFood();
  scale(rez);
}
function fill(){
    // console.log(arguments);
    let r = 0,g = 0,b = 0,a = 255;
    switch(arguments.length){
        case 1: 
            r = arguments[0];
            fillStyle = "rgb("+r+","+r+","+r+")";
            break;
        case 2: 
            r = arguments[0];
            a = arguments[1];
            fillStyle = "rgba("+r+","+r+","+r+","+a+")";
            break;
        case 3: 
            r = arguments[0];
            g = arguments[1];
            b = arguments[2];
            fillStyle = "rgb("+r+","+g+","+b+")";
            break;
        case 4:
            r = arguments[0];
            g = arguments[1];
            b = arguments[2];
            a = arguments[3];
            fillStyle = "rgba("+r+","+g+","+b+","+a+")";
            break;
    }
}
function noStroke(){
    lineWidth = 0;
}
function rect(x,y,w,h){
    ctx.beginPath();
    ctx.fillStyle = fillStyle;
    ctx.lineWidth = lineWidth;
    ctx.rect(x, y, w, h);
    ctx.fill();
    if(lineWidth !=0) 
    ctx.stroke();
    ctx.closePath();
}

function createFood(){
  food = createVector(floor(random(w)),floor(random(h)));
}

window.addEventListener('keyup',e=>keyPressed(e.key));

function keyPressed(keyCode){
    if(keyCode === "ArrowUp"){
        snake.xdir = 0;
        snake.ydir = -1;
      }
      else if(keyCode === "ArrowLeft"){
        snake.xdir = -1;
        snake.ydir = 0;
      }
      else if(keyCode === "ArrowRight"){
        snake.xdir = 1;
        snake.ydir = 0;
      }
      else if(keyCode === "ArrowDown"){
        snake.xdir = 0;
        snake.ydir = 1;
      }
    clearInterval(drawloop);
    drawloop = setInterval(draw,1000/frameRateVal);
}

function draw() {
//   frameRate(5);
  background(220);
  snake.show();
  snake.update();
  if(snake.checkend()){
    noLoop();
    console.log("End");
  }
  if(snake.eat(food)){
    createFood();
  }
  fill(255,0,0);
  noStroke();
  rect(food.x,food.y,1,1);
}