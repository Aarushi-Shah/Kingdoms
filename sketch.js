var knightRImg,knightGImg,knightYImg,knightBImg,kingRImg,kingYImg,kingGImg,kingBImg,nativeImg,native2Img,backgroundImg,brickImg,diceImg,goldLand
var player,red,blue,green,yellow,gameState,dice// gamestate will be choosingPlayer, play,wait,end
var timeStore,minute,second,hr
function preload(){
  knightBImg = loadImage("KingdomImages/blueKnight.png");
  knightRImg = loadImage("KingdomImages/redKnight.png");
  knightGImg = loadImage("KingdomImages/greenKnight.png");
  knightYImg = loadImage("KingdomImages/yellowKnight.png");
  kingRImg = loadImage("KingdomImages/RedKing.png");
  kingBImg = loadImage("KingdomImages/BlueKing.png");
  kingGImg = loadImage("KingdomImages/GreenKing.png");
  kingYImg = loadImage("KingdomImages/YellowKing.png");
  nativeImg = loadImage("KingdomImages/Native.png");
  native2Img = loadImage("KingdomImages/Native2.png");
  backgroundImg = loadImage("KingdomImages/background.png");
  brickImg = loadImage("KingdomImages/brick.png");
  diceImg = loadImage("KingdomImages/dice.png");
  goldLand = loadImage("KingdomImages/goldLand.gif")
}

function setup() {
  createCanvas(displayWidth,displayHeight-115);
   player = createSprite(displayWidth/2+150,displayHeight-160)
   player.visible = false
   player.scale = 0.125
   dice = createSprite(displayWidth/2+300,displayHeight/2)
   dice.addImage(diceImg)
   dice.scale = 0.30
   dice.visible = false
  red = createSprite(130,300,150,200)
  red.addImage(knightRImg)
  red.scale = 0.5
  //red.shapeColor = red
  blue = createSprite(500,300,150,200)
  blue.addImage(knightBImg)
  blue.scale = 0.5 
  yellow = createSprite(870,300,150,200)
  yellow.addImage(knightYImg)
  yellow.scale = 0.5
  green = createSprite(1240,300,150,200)
  green.addImage(knightGImg)
  green.scale = 0.5
  gameState = "choosingPlayer"
}

function draw() {
  if(gameState == "choosingPlayer"){
    background(brickImg);
   if(mousePressedOver(red)){
     player.addImage(knightRImg)
     player.visible = true
     gameState = "PLAY"
     hour = hour() 
     second = second();
     minute = minute();
   }
   if(mousePressedOver(blue)){
    player.addImage(knightBImg)
     player.visible = true
     gameState = "PLAY"
     hour = hour() 
     second = second()
     minute = minute()
  }
  if(mousePressedOver(green)){
    player.addImage(knightGImg)
     player.visible = true
     gameState = "PLAY"
     hour = hour() 
     second = second()
     minute = minute()
  }
  if(mousePressedOver(yellow)){
    player.addImage(knightYImg)
     player.visible = true
     gameState = "PLAY"
     hr = hour() 
     second = second()
     minute = minute()
  }
  drawSprites();
  }
  else if(gameState == "PLAY") {
    background(backgroundImg);
    
    blue.destroy()
    red.destroy()
    console.log(player)
    green.destroy()
    yellow.destroy()
    dice.visible = true
    //console.log(player.y+" "+displayHeight)
      console.log(player.x+" "+displayWidth)
    if(mousePressedOver(dice)){
    var num = Math.round(random(1,3))*2
    alert(num)
    var x = player.x
    var y = player.y
    for(var i=0; i<num; i++)  {
     // this is the game behacior for an even number
     if(num%2 == 0){
      if(player.y>=100 && player.x>displayWidth/2+100){
      player.y-= 100;}
      else if(player.y<100 && player.x>displayWidth/2-100){
        player.x-=100;
      }
      else if(player.y<displayHeight-160){
       player.y+= 100 

       if (player.y >= displayHeight-160){
         
        alert("you have won the game")
         gameState = "END"
       }
      }
    }
    // this is the check for the game behavior for an odd number
     else{
      if(player.y<displayHeight-160 && player.x>displayWidth/2+100){
      player.y+=100;}
      else if(player.y<100 && player.x>displayWidth/2-100){
        player.x+=100
      }
      else if(player.x<displayWidth/2-100){
        player.y-=100
      }
    }
    }
    }
    drawSprites();
  }
  if(gameState == "END"){
   clear();
    background(goldLand);
    
  }
  //drawSprites();
}

  