
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hunger = 10;
var life = 3;

var gameState = 0;

function preload()
{
	front = loadImage("front.png");
	right = loadImage("right.png");
	left = loadImage("left.png");
	back = loadImage("back.png");
	left_running = loadAnimation("leftwalk1.png","leftwalk2.png");
	right_running = loadAnimation("rightwalk1.png","rightwalk2.png");
	front_running = loadAnimation("frontwalk1.png","frontwalk2.png");
	back_running = loadAnimation("backwalk1.png","backwalk2.png");

	berryImg = loadImage("berry.png");
	grassImg = loadImage("grassImg.jpg");
	tree1Img = loadImage("tree1.png");
	tree2Img = loadImage("tree2.png");
	tree3Img = loadImage("tree3.png");
	tree4Img = loadImage("tree4.png");
	tree5Img = loadImage("tree5.png");	
	vineImg = loadImage("vine.png");

	heart1 = loadImage("heart1.png");
	heart2 = loadImage("heart2.png");
	heart3 = loadImage("heart3.png");
	treee = loadImage("glass.png");
	blue = loadImage("bg.jpg");
	axeImg = loadImage("axe.png");

	b1 = loadImage("b1.png");
	b2 = loadImage("b2.png");
	b3 = loadImage("b3.png");
	b4 = loadImage("b4.png");
	b5 = loadImage("b5.png");


	lightning = loadAnimation("l1.png","l2.png","l3.png","l4.png","l5.png");

	shipImg = loadImage("ship.png");
	shipwreck = loadImage("shipwreck.png");

	choppedImg = loadImage("chopped.png");

	goblin_running = loadAnimation("goblinrunning1.png","goblinrunning2.png","goblinrunning3.png");
	goblin_running2 = loadAnimation("goblinrunning4.png","goblinrunning5.png","goblinrunning6.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	if(gameState === 0){
		ship = createSprite(600,350);
		ship.addAnimation("ship",shipImg);
		ship.addAnimation("shipwreck",shipwreck);
		ship.scale = 0.3;

		ship.lifetime = 300;
	}
	//Create the Bodies Here.
if(gameState === 3){
	grassbkg = createSprite(600,350,20,20);
	grassbkg.addImage(grassImg);
	grassbkg.scale = 2;

	player = createSprite(600,350);
	player.addAnimation("front",front);
	player.addAnimation("right",right);
	player.addAnimation("left",left);
	player.addAnimation("back",back);
	player.addAnimation("left_running",left_running);
	player.addAnimation("back_running",back_running);
	player.addAnimation("front_running",front_running);
	player.addAnimation("right_running",right_running);
	player.scale = 0.3;

	/*/goblin = createSprite(500,300);
	goblin.addAnimation("running",goblin_running);
	goblin.addAnimation("running_left",goblin_running2);
	goblin.scale = 0.7;/*/


	grass = createSprite(600,350,displayWidth, displayHeight);
	grass.scale = 0.8;
	grass.depth = player.depth-1;
	grass.addImage(grassImg);

	berry = createSprite(-400,600,10,10);
	berry.addImage(berryImg);
	berry.scale = 0.1;
	berry.depth = player.depth-1;

	berry1 = createSprite(0,-700,10,10);
	berry1.addImage(berryImg);
	berry1.scale = 0.1;
	berry1.depth = player.depth-1;

	berry2 = createSprite(400,1200,10,10);
	berry2.addImage(berryImg);
	berry2.scale = 0.1;
	berry2.depth = player.depth-1;

	berry3 = createSprite(700,-400,10,10);
	berry3.addImage(berryImg);
	berry3.scale = 0.1;
	berry3.depth = player.depth-1;

	berry4 = createSprite(1150,900,10,10);
	berry4.addImage(berryImg);
	berry4.scale = 0.1;
	berry4.depth = player.depth-1;

	berry5 = createSprite(1600,-200,10,10);
	berry5.addImage(berryImg);
	berry5.scale = 0.1;
	berry5.depth = player.depth-1;

	tree1 = createSprite(100,900,50,100);
	tree1.addImage(tree1Img);
	tree1.addAnimation("tree",choppedImg);
	tree1.scale = 4;
	tree1.depth = player.depth-1;

	tree2 = createSprite(1500,1200,50,100);
	tree2.addImage(tree2Img);
	tree2.addAnimation("tree",choppedImg);
	tree2.scale = 4;
	tree2.depth = player.depth-1;

	tree3 = createSprite(-400,-300,50,100);
	tree3.addImage(tree3Img);
	tree3.addAnimation("tree",choppedImg);
	tree3.scale = 4;
	tree3.depth = player.depth-1;

	tree4 = createSprite(700,-400,50,100);
	tree4.addImage(tree4Img);
	tree4.addAnimation("tree",choppedImg);
	tree4.scale = 4;
	tree4.depth = player.depth-1;

	tree5 = createSprite(400,190,50,100);
	tree5.addImage(tree1Img);
	tree5.addAnimation("tree",choppedImg);
	tree5.scale = 4;
	tree5.depth = player.depth-1;

	tree7 = createSprite(700,700,50,100);
	tree7.addImage(tree5Img);
	tree7.addAnimation("tree",choppedImg);
	tree7.scale = 4;
	tree7.depth = player.depth-1;

	tree6 = createSprite(900,900,50,100);
	tree6.addImage(tree2Img);
	tree6.addAnimation("tree",choppedImg);
	tree6.scale = 4;
	tree6.depth = player.depth-1;

	tree8 = createSprite(-300,1000,50,100);
	tree8.addImage(tree5Img);
	tree8.addAnimation("tree",choppedImg);
	tree8.scale = 4;
	tree8.depth = player.depth-1;

	tree9 = createSprite(1500,-400,50,100);
	tree9.addImage(tree5Img);
	tree9.addAnimation("tree",choppedImg);
	tree9.scale = 4;
	tree9.depth = player.depth-1;

	tree10 = createSprite(1400,300,50,100);
	tree10.addImage(tree5Img);
	tree10.addAnimation("tree",choppedImg);
	tree10.scale = 4;
	tree10.depth = player.depth-1;

	vine = createSprite(200,-300,40,80);
	vine.addImage(vineImg);
	vine.depth = player.depth-1;
	vine.scale = 0.8;

	vine1 = createSprite(1300,800,40,80);
	vine1.addImage(vineImg);
	vine1.depth = player.depth-1;
	vine1.scale = 0.8;

	heart = createSprite(150,50);
	heart.addAnimation("h1",heart1);
	heart.addAnimation("h2",heart2);
	heart.addAnimation("h3",heart3);
	heart.scale = 0.8;

	health = createSprite(150,650);
	health.addAnimation("b1",b1);
	health.addAnimation("b2",b2);
	health.addAnimation("b3",b3);
	health.addAnimation("b4",b4);
	health.addAnimation("b5",b5);
	health.scale = 3

	border1 = createSprite(-700,350,20,2600);
	border2 = createSprite(600,1650,2600,20);
	border3 = createSprite(1900,350,20,2600);
	border4 = createSprite(600,-950,2600,20);
	border1.visible = false;
	border2.visible = false;
	border3.visible = false;
	border4.visible = false;

	player.setCollider("rectangle",0,200,300,100);
}
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("black");

  if(gameState === 0){
	  fill("#579cfb");
	  rect(600,650,1500,200);
  
	  if(frameCount % 300 === 0){
		  lightnin = createSprite(600,200);
		  lightnin.addAnimation(lightning);
		  lightnin.lifetime = 20;
		  ship.changeAnimation("shipwreck",shipwreck);
	  }
  }

  if(gameState === 3){
  player.collide(border1);
  player.collide(border2);
  player.collide(border3);
  player.collide(border4);


  if(keyDown("RIGHT_ARROW")){
	player.x = player.x + 10;
	heart.x = heart.x + 10;
	health.x = health.x + 10;
  }
  if(keyWentDown("RIGHT_ARROW")){
	player.changeAnimation("right_running",right_running);
}
if(keyWentUp("RIGHT_ARROW")){
	player.changeAnimation("right",right);
}
  if(keyDown("DOWN_ARROW")){
	player.y = player.y + 10;
	heart.y = heart.y + 10;
	health.y = health.y + 10;
  }
  if(keyWentDown("DOWN_ARROW")){
	player.changeAnimation("front_running",front_running);
}
if(keyWentUp("DOWN_ARROW")){
	player.changeAnimation("front",front);
}
  if(keyDown("LEFT_ARROW")){
	player.x = player.x - 10;
	heart.x = heart.x - 10;
	health.x = health.x - 10;
  }
  if(keyWentDown("LEFT_ARROW")){
	player.changeAnimation("left_running",left_running);
}
if(keyWentUp("LEFT_ARROW")){
	player.changeAnimation("left",left);
}
  if(keyDown("UP_ARROW")){
	player.y = player.y - 10;
	heart.y = heart.y - 10;
	health.y = health.y - 10;
  }
  if(keyWentDown("UP_ARROW")){
	player.changeAnimation("back_running",back_running);
}
if(keyWentUp("UP_ARROW")){
	player.changeAnimation("back",back);
}
if(player.isTouching(berry)){
	berry.destroy();
	hunger = hunger+2;
}else if(player.isTouching(berry1)){
	berry1.destroy();
	hunger = hunger+2;
}else if(player.isTouching(berry2)){
	berry2.destroy();
	hunger = hunger+2;
}else if(player.isTouching(berry3)){
	berry3.destroy();
	hunger = hunger+2;
}else if(player.isTouching(berry4)){
	berry4.destroy();
	hunger = hunger+2;
}else if(player.isTouching(berry5)){
	berry5.destroy();
	hunger = hunger+2;
}
if(player.isTouching(vine)){
	vine.destroy();
}else if(player.isTouching(vine1)){
	vine1.destroy();
}
if(player.isTouching(tree1)&& keyDown("c")){
swingAxe();
tree1.changeAnimation("tree",choppedImg);
tree1.scale = 0.7;
hunger = hunger -1;
}
if(player.isTouching(tree2)&& keyDown("c")){
	swingAxe();
	tree2.changeAnimation("tree",choppedImg);
	tree2.scale = 0.7;
	hunger = hunger -1;
	}
if(player.isTouching(tree3)&& keyDown("c")){
	swingAxe();
	tree3.changeAnimation("tree",choppedImg);
	tree3.scale = 0.7;
	hunger = hunger -1;
	}
if(player.isTouching(tree4)&& keyDown("c")){
	swingAxe();
	tree4.changeAnimation("tree",choppedImg);
	tree4.scale = 0.7;
	hunger = hunger -1;
	}
	if(player.isTouching(tree5)&& keyDown("c")){
	swingAxe();
	tree5.changeAnimation("tree",choppedImg);
	tree5.scale = 0.7;
	}
if(player.isTouching(tree6)&& keyDown("c")){
	swingAxe();
	tree6.changeAnimation("tree",choppedImg);
	tree6.scale = 0.7;
	}
if(player.isTouching(tree7)&& keyDown("c")){
	swingAxe();
	tree7.changeAnimation("tree",choppedImg);
	tree7.scale = 0.7;
	hunger = hunger-1;
	}
if(player.isTouching(tree8)&& keyDown("c")){
	swingAxe();
	tree8.changeAnimation("tree",choppedImg);
	tree8.scale = 0.7;
	hunger = hunger-1;
	}
if(player.isTouching(tree9)&& keyDown("c")){
	swingAxe();
	tree9.changeAnimation("tree",choppedImg);
	tree9.scale = 0.7;
	hunger = hunger-1;
	}
if(player.isTouching(tree10)&& keyDown("c")){
	swingAxe();
	tree10.changeAnimation("tree",choppedImg);
	tree10.scale = 0.7;
	hunger = hunger-1;
	}
	if(frameCount % 200 === 0){
		goblin1 = createSprite(-300,-600);
		goblin1.addAnimation("running",goblin_running);
		goblin1.velocityX = 5;
		goblin1.lifetime = 100;
		goblin1.scale = 0.7;
		goblin3 = createSprite(300,1000);
		goblin3.addAnimation("running",goblin_running);
		goblin3.velocityX = 5;
		goblin3.lifetime = 100;
		goblin3.scale = 0.7;
		goblin5 = createSprite(-600,400);
		goblin5.addAnimation("running",goblin_running);
		goblin5.velocityX = 5;
		goblin5.lifetime = 100;
		goblin5.scale = 0.7;
		goblin7 = createSprite(-600,700);
		goblin7.addAnimation("running",goblin_running);
		goblin7.velocityX = 5;
		goblin7.lifetime = 100;
		goblin7.scale = 0.7;

		if(player.isTouching(goblin1)){
			life = life -1;
			player.x = 600;
			player.y = 350;
			health.x = 150;
			health.y = 650;
			heart.x = 150;
			heart.y = 50;
		}else if (player.isTouching(goblin3)){
			life = life -1;
			player.x = 600;
			player.y = 350;
			health.x = 150;
			health.y = 650;
			heart.x = 150;
			heart.y = 50;
		}else if (player.isTouching(goblin5)){
			life = life -1;
			player.x = 600;
			player.y = 350;
			health.x = 150;
			health.y = 650;
			heart.x = 150;
			heart.y = 50;
		}else if (player.isTouching(goblin7)){
			life = life -1;
			player.x = 600;
			player.y = 350;
			health.x = 150;
			health.y = 650;
			heart.x = 150;
			heart.y = 50;
		}
	}
	if(frameCount % 300 === 0){
		goblin2 = createSprite(200,-600);
		goblin2.addAnimation("running_left",goblin_running2);
		goblin2.velocityX = -5;
		goblin2.lifetime = 100;
		goblin2.scale = 0.7;
		goblin4 = createSprite(800,1000);
		goblin4.addAnimation("running_left",goblin_running2);
		goblin4.velocityX = -5;
		goblin4.lifetime = 100;
		goblin4.scale = 0.7;
		goblin6 = createSprite(-100,400);
		goblin6.addAnimation("running_left",goblin_running2);
		goblin6.velocityX = -5;
		goblin6.lifetime = 100;
		goblin6.scale = 0.7;
		goblin8 = createSprite(-100,700);
		goblin8.addAnimation("running_left",goblin_running2);
		goblin8.velocityX = -5;
		goblin8.lifetime = 100;
		goblin8.scale = 0.7;

		if(player.isTouching(goblin2)){
			life = life -1;
			player.x = 600;
			player.y = 350;
			health.x = 150;
			health.y = 650;
			heart.x = 150;
			heart.y = 50;
		}else if (player.isTouching(goblin4)){
			life = life -1;
			player.x = 600;
			player.y = 350;
			health.x = 150;
			health.y = 650;
			heart.x = 150;
			heart.y = 50;
		}else if (player.isTouching(goblin6)){
			life = life -1;
			player.x = 600;
			player.y = 350;
			health.x = 150;
			health.y = 650;
			heart.x = 150;
			heart.y = 50;
		}else if (player.isTouching(goblin8)){
			life = life -1;
			player.x = 600;
			player.y = 350;
			health.x = 150;
			health.y = 650;
			heart.x = 150;
			heart.y = 50;
		}
	}
if(hunger === 10){
	health.changeAnimation("b1",b1);
}else if(hunger === 8){
	health.changeAnimation("b2",b2);
}else if(hunger === 6){
	health.changeAnimation("b3",b3);
}else if(hunger === 4){
	health.changeAnimation("b4",b4);
}else if(hunger === 2){
	health.changeAnimation("b5",b5);
}
if(life === 3){
	heart.changeAnimation("h1",heart1);
}else if (life === 2){
	heart.changeAnimation("h2",heart2);
}else if (life === 1){
	heart.changeAnimation("h3",heart3);
}
camera.x = player.x;
camera.y = player.y;
  }
  drawSprites();
}
function swingAxe(){
	axe = createSprite(100,100,50,50);
	axe.x = player.x + 30;
	axe.y = player.y - 20;
	axe.addImage(axeImg);
	axe.scale = 0.1;
	axe.velocityY = 2;
	axe.lifetime = 40;
}