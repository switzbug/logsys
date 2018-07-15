function Snake1(){
  this.show = function(){
    fill(255,71,235);
    //draw the snake1 tail
    for(var i=0;i<this.tail.length;i++){
      rect(this.tail[i].x, this.tail[i].y, pixel_size, pixel_size);
    }

    //draw the snake1 head
    rect(this.pos.x, this.pos.y, pixel_size, pixel_size)
  }

  this.update = function(){
    //move snake1's position into tail and pop off the end
    if(movement1.length){
      if(snake1.speed.x != movement1[0][0]*-1 && snake1.speed.y != movement1[0][1]*-1){
        snake1.dir(movement1[0][0], movement1[0][1]);
      }
      movement1.splice(0, 1);
    }

    this.tail.unshift(createVector(this.pos.x, this.pos.y));
    this.tail.pop();
    //move the snake1
    this.pos.x += this.speed.x * pixel_size;
    this.pos.y += this.speed.y * pixel_size;

  }

  this.dir = function(x, y){
    this.speed.x = x;
    this.speed.y = y;
  }

  this.checkDeath = function(){
    if(this.pos.x >= width || this.pos.y >= height || this.pos.x < 0 || this.pos.y < 0){
      gameState = 'end1';
    }
    for(var i=0;i<this.tail.length;i++){
      if(this.tail[i].x == this.pos.x && this.tail[i].y == this.pos.y){
        gameState = 'end1';
      }
    }
    for(var j=0;j<snake2.tail.length;j++)
    {
      if(snake2.tail[j].x == this.pos.x && snake2.tail[j].y == this.pos.y)
      {
        gameState = 'end1';
      }
    }
  }

  this.eat = function(pos){
    return this.pos.x == pos.x && this.pos.y == pos.y;
  }

  this.reset = function(){
    shots = [];
    this.tail = [];
    this.pos = createVector(0, 0);
    this.speed = createVector(1, 0);
  }

  this.reset();
}
