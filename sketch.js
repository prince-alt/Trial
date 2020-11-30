const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgIMG;
var door,doorimg1,doorimg2;
var gamestate = "start";
var name,nameb,genderb,greeting;
var witch,witchimg;
var drops;
var player,boy_standing,boy_climbing;
var bgif,bgifgif;
var t;

function preload() {

bgIMG = loadImage("images/bg.jpg");

doorimg1 = loadImage("images/doorclose.png");

doorimg2 = loadImage("images/dooropen.png");   

witchimg = loadImage("images/witch.png");

dropsi = loadImage("images/blood.png");

boy_standing = loadAnimation("images/boyfront.png","images/boyfront2.png");

//boy_climbing = loadAnimation("images/boy1.png","images/boy2.png","images/boy3.png","images/boy4.png","images/boy5.png","images/boy6.png","images/boy7.png","images/boy8.png","images/boy9.png","images/boy10.png","images/boy11.png","images/boy12.png","images/boy13.png","images/boy14.png","images/boy15.png","images/boy16.png","images/boy17.png","images/boy18.png","images/boy19.png","images/boy20.png","images/boy21.png");

bgifgif = loadImage("images/bg.gif");

bgif = createImg("images/bg.gif");
}

function setup(){

    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    witch = createSprite(0,displayHeight/10);
    witch.addImage(witchimg);
    witch.visible = false;

    player = createSprite(0,0,50,50);
    //player.addAnimation("standing",boy_standing);
    
    door = createSprite(displayWidth/2+5,displayHeight/2+130);
    door.addImage(doorimg1);
    door.scale = 0.5;
    door.depth = witch.depth;
    witch.depth+=1;

    t = createSprite(door.x,door.y+100);
    
    

    nameb = createInput("NAME");
    nameb.position(displayWidth/2-60,displayHeight/2+280);
    name = nameb.value();
   
    enter = createButton("ENTER");
    enter.position(displayWidth/2-60,displayHeight/2+310);
    enter.mousePressed(()=>{

    nameb.hide();
    enter.hide();
     witch.visible = true;
     witch.velocityX = 6;
     witch.velocityY = 1;

    })

}

function draw(){

    background(bgIMG);
   
    Engine.update(engine);
 
    imageMode (CENTER);
    image(bgifgif,displayWidth/2,displayHeight/2,displayWidth,displayHeight);
    bgif.position(displayWidth/2+130,500);

    if(frameCount%40==0){


    drops = createSprite(displayWidth/2+200,displayHeight-700);
    drops.addImage(dropsi);
    drops.scale = 0.2;
    drops.velocityY = 2;
    drops.x = Math.round(random (displayWidth/2+200,displayWidth/2+1200));
    drops.lifetime = 100;

    }

    if(player.velocityY <= 0){
    player.x = witch.x;
    player.y = witch.y;
    }

    if(witch.x > displayWidth/2){

        witch.velocityX = 0;
        witch.velocityY = 0;

        player.velocityY = 3;
        player.collide(t);
    }

    drawSprites();

    textSize(50);
    stroke ("red");
    fill("white");
    textFont("Algerian");
    text ("UP THE STAIRCASE",displayWidth/2+200,displayHeight-700);



    
}

