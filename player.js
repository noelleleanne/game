class Player{
    constructor(x,y,width,height){
        var options = {
            friction: 1.0,
            isStatic: false
        }
        this.player = Bodies.rectangle(x,y,100,100,options);
        World.add(world,this.player);
        this.x = 100;
        this.y = 100;
    }
    display(){
        if(keyDown("RIGHT_ARROW")){
            player.x = player.x + 10;
          }
          if(keyWentDown("RIGHT_ARROW")){
            player.changeAnimation("right_running",right_running);
        }
        if(keyWentUp("RIGHT_ARROW")){
            player.changeAnimation("right",right);
        }
          if(keyDown("DOWN_ARROW")){
            player.y = player.y + 10;
          }
          if(keyWentDown("DOWN_ARROW")){
            player.changeAnimation("front_running",front_running);
        }
        if(keyWentUp("DOWN_ARROW")){
            player.changeAnimation("front",front);
        }
          if(keyDown("LEFT_ARROW")){
            player.x = player.x - 10;
          }
          if(keyWentDown("LEFT_ARROW")){
            player.changeAnimation("left_running",left_running);
        }
        if(keyWentUp("LEFT_ARROW")){
            player.changeAnimation("left",left);
        }
          if(keyDown("UP_ARROW")){
            player.y = player.y - 10;
          }
          if(keyWentDown("UP_ARROW")){
            player.changeAnimation("back_running",back_running);
        }
        if(keyWentUp("UP_ARROW")){
            player.changeAnimation("back",back);
        }
    }
}