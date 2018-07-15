var snake1;
var snake2;
var pixel_size = 10;

var movement1 = [];
var movement2 = [];
var gameState = 'init';


function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function initGame(){
  background(50, 50, 100);
  var name = "Don't Cross the Line";
  textSize(50);
  fill(255);
  nameWidht = textWidth(name);
  text(name, (width - nameWidht)/2, height/2 - 40);
  startBtn = createButton('Start Game');
  startBtn.position(width/2 - startBtn.width/2, height/2);
  startBtn.mousePressed(startGame);
  noLoop();
}

function startGame(){
  removeElements();
  gameState = 'play';
  snake1 = new Snake1();
  snake2 = new Snake2();
  snake1.pos.x =windowWidth/2;
  snake1.pos.y = windowHeight-20;
  snake2.pos.x =windowWidth/2;
  snake2.pos.y = 20;
  loop();
}

function runGame(){
  background(0,0,0);

  snake1.update();
  snake2.update();
  snake1.show();
  snake2.show();
  snake1.checkDeath();
  snake2.checkDeath();
  snake1.tail.push(createVector(snake1.x, snake1.y));
  snake2.tail.push(createVector(snake2.x, snake2.y));

  fill(0, 255, 0, 100);
}

function endGame(x){
  if(x==1){
    background(70,90,64);}
  else{
    background(68,28,79);
  }
  textSize(32);
  var msg = 'Game Over';
  var won = 'Player '+ x +' Won!';
  msgWidht = textWidth(msg);
  scoreWidht = textWidth(won);
  fill(255);
  text(msg, (width - msgWidht)/2, height/2 - 40);
  text(won, (width - scoreWidht)/2, height/2);
  startBtn = createButton('Restart Game');
  startBtn.position(width/2 - startBtn.width/2, height/2 + 40);
  startBtn.mousePressed(startGame);
  noLoop();
}

function draw(){
  if(gameState == 'init'){
    initGame();
  }
  else if(gameState == 'play'){
    runGame();
  }
  else if(gameState == 'end1'){
    endGame(2);
  }
  else if(gameState == 'end2'){
    endGame(1);
  }
}


function keyPressed(){
  if(keyCode === 83){
    movement1.push([0, 1]);
  }else if(keyCode === 87){
    movement1.push([0, -1]);
  }else if(keyCode === 65){
    movement1.push([-1, 0]);
  }else if(keyCode === 68){
    movement1.push([1, 0]);
  }
  else if(keyCode === 75){
    movement2.push([0, 1]);
  }else if(keyCode === 73){
    movement2.push([0, -1]);
  }else if(keyCode === 74){
    movement2.push([-1, 0]);
  }else if(keyCode === 76){
    movement2.push([1, 0]);
  }
}
