function Snake2(){
  this.show = function(){
    fill(19,70,221);
    //draw the snake2 tail
    for(var i=0;i<this.tail.length;i++){
      rect(this.tail[i].x, this.tail[i].y, pixel_size, pixel_size);
    }

    //draw the snake2 head
    rect(this.pos.x, this.pos.y, pixel_size, pixel_size)
  }

  this.update = function(){
    //move snake2's position into tail and pop off the end
    if(movement2.length){
      if(snake2.speed.x != movement2[0][0]*-1 && snake2.speed.y != movement2[0][1]*-1){
        snake2.dir(movement2[0][0], movement2[0][1]);
      }
      movement2.splice(0, 1);
    }

    this.tail.unshift(createVector(this.pos.x, this.pos.y));
    this.tail.pop();
    //move the snake2
    this.pos.x += this.speed.x * pixel_size;
    this.pos.y += this.speed.y * pixel_size;

  }

  this.dir = function(x, y){
    this.speed.x = x;
    this.speed.y = y;
  }

  this.checkDeath = function(){
    if(this.pos.x >= width || this.pos.y >= height || this.pos.x < 0 || this.pos.y < 0){
      gameState = 'end2';
    }
    for(var i=0;i<this.tail.length;i++){
      if(this.tail[i].x == this.pos.x && this.tail[i].y == this.pos.y){
        gameState = 'end2';
      }
    }
    for(var j=0;j<snake1.tail.length;j++)
    {
      if(snake1.tail[j].x == this.pos.x && snake1.tail[j].y == this.pos.y)
      {
        gameState = 'end2';
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
