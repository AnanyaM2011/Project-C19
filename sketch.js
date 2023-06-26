var spaceImg, space;
var asteroidImg, asteroid, asteroidsGroup;
var rocket, rocketImg;
var gem1, gem2, gem3, gem4;
var gem1Image, gem2Image, gem3Image, gem4Image;
var gem1Group, gem2Group, gem3Group, gem4Group;
var gameState = "play";
var score = 0;
function preload(){
  spaceImg = loadImage("bg.jpeg");
  asteroidImg = loadImage("as.png");
  rocketImg = loadImage("rocket.png");
  gem1Image = loadImage("gem1.png");
  gem2Image = loadImage("gem2.png");
  gem3Image = loadImage("gem3.png");
  gem4Image = loadImage("gem4.png");
  spaceSound = loadSound("062864_ese-24142.mp3");
}

function setup() {
  createCanvas(600, 600);
  space = createSprite(300,300);
  space.addImage("space",spaceImg);
  space.velocityY = 1;
  rocket = createSprite(200, 200, 50, 50);
  rocket.scale = 0.3;
  rocket.addImage("rocket", rocketImg);
  asteroidsGroup = new Group();
  gem1Group = new Group();

  }


function draw() {
  background(spaceImg);
  rocket.velocityY = 0;
  console.log("INFINITE RUNNER GAME"); 
  if (gameState === "play"){
    if (keyDown("LEFT_ARROW")){
      rocket.x = rocket.x - 4;
    }
    if(keyDown("RIGHT_ARROW")){
      rocket.x = rocket.x + 4;
    }
    if (keyDown("space")){
        rocket.velocityY = -12;
    }
    rocket.velocityY = rocket.velocityY + 3;
    if(space.y > 450){
      space.y = 300;
      space.velocityY = 1;  
    }
    spawnAsteroids();
    spawnGem1();
    if (gem1Group.isTouching(rocket)){
      score = score+1;
      gem1.destroy();
    }
    if (asteroidsGroup.isTouching(rocket)){
      score = score-1;
      asteroid.destroy();
    }
    if (score === 15){
      gameState = "win";
    }
    //spawnGem2();
    //spawnGem3();
    //spawnGem4();   
    if (rocket.y >= 580){
        gameState = "end";
    }
    drawSprites();
    text("Score:- " + score,  20, 30);
  if (gameState === "end"){
    fill("magenta");
    stroke("blue");
    textSize(50);
    text("GAME OVER", 300, 300);
    rocket.velocityY = 0;
    space.velocityY = 0;
  }
  if (gameState === "win"){
    fill("magenta");
    stroke("yellow")
    textSize(50);
    text("You Win!!", 100, 300);
    

  }
  
}
}
function spawnAsteroids(){
    if (frameCount %150 === 0){
      asteroid = createSprite(260, 39);
      asteroid.x = Math.round(random(140, 430));
      asteroid.addImage(asteroidImg);
      asteroid.scale = 0.1;
      asteroid.velocityY = 1;
      asteroid.lifeTime = 870;
      asteroidsGroup.add(asteroid);
    }
  }
  function spawnGem1(){
    if (frameCount %80 === 0){
      gem1 = createSprite(260, 39);
      gem1.x = Math.round(random(140, 330));
      gem1.y = Math.round(random(140, 290));
      gem1.addImage(gem1Image)
      gem1.lifeTime = 870;
      gem1Group.add(gem1);
      gem1.scale = 0.1;
    }
  }
  function spawnGem2(){
    if (frameCount %120 === 0){
      gem2 = createSprite(260, 39);
      gem2.x = Math.round(random(140, 900));
      gem2.y = Math.round(random(140, 290));
      gem2.addImage(gem1Image);
      gem2.lifeTime = 870;
      gem2Group.add(gem2);
      gem2.scale = 0.3;
    }
  }
  function spawnGem3(){
    if (frameCount %140 === 0){
      gem3 = createSprite(260, 39);
      gem3.x = Math.round(random(140, 430));
      gem3.addImage(gem1Image);
      gem3.lifeTime = 870;
      gem3Group.add(gem3);
      gem3.scale = 0.3;
    }
  }
  function spawnGem4(){
    if (frameCount %160 === 0){
      gem4 = createSprite(260, 39);
      gem4.x = Math.round(random(140, 430));
      gem4.addImage(gem1Image);
      gem4.lifeTime = 870;
      gem4Group.add(gem4);
      gem4.scale = 0.3;
    }
  }