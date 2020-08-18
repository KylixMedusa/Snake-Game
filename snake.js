class Snake{
  constructor(){
    this.len = 1;
    this.body = [];
    this.body[0] = createVector(0,0);
    this.xdir =  1;
    this.ydir = 0;
  }
  checkend(){
    let head = this.body[this.len-1].copy();
    if(head.x>w-1 || head.x<0 || head.y<0 || head.y>h-1)
      return true;
    for(var i=0;i<this.len-1;i++){
      if(head.x == this.body[i].x && head.y == this.body[i].y)
        return true;
    }
    return false;
  }
  update(){
    let head = this.body[this.len-1].copy();
    this.body.shift();
    head.x+=this.xdir;
    head.y+=this.ydir;
    this.body.push(head);
  }
  show(){
    for(var i=0;i<this.len;i++){
      fill(0);
      noStroke();
      rect(this.body[i].x,this.body[i].y,1,1);
    }
  }
  grow(){
    let head = this.body[this.len-1].copy();
    this.len++;
    this.body.push(createVector(head.x,head.y));
  }
  eat(food){
    if(this.body[this.len-1].x == food.x && this.body[this.len-1].y == food.y){
      this.grow();
      return true;
    }
    return false;
  }
}