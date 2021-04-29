//create variables
var canvas;
var music;
var surf1, surf2, surf3, surf4;
var box, edges;

function preload(){
    //load the sound
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    
    surf1 = createSprite(200,500,90,10);
    surf1.shapeColor = "blue";
    surf2 = createSprite(300,500,90,10);
    surf2.shapeColor = "green";
    surf3 = createSprite(400,500,90,10);
    surf3.shapeColor = "pink";
    surf4 = createSprite(500,500,90,10);
    surf4.shapeColor = "violet";

    //create box sprite and give velocity
    box = createSprite(random(20,270),50,25,25);
    box.velocityY = 6;
    box.velocityX = 4;

}

function draw() {
    background("black");
    //create edgeSprite
    edges = createEdgeSprites();
    // box should bounceOff edges
    box.bounceOff(edges);

     

    //add condition to check if box touching surface and make it bounce
    if (isTouching(box,surf3)){
       box.bounceOff(surf3);
       box.shapeColor = "pink";
       music.play(); 
    }

    if(isTouching(box,surf4)){
        box.bounceOff(surf4);
        box.shapeColor = "violet";
    }

    if(isTouching(box,surf1)){
        box.velocityY = 0;
       box.velocityX = 0;
       box.shapeColor = "blue";
       music.stop();
    }

    if(isTouching(box,surf2)){
        box.bounceOff(surf2);
        box.shapeColor = "green";
    }
    
    drawSprites();
}

