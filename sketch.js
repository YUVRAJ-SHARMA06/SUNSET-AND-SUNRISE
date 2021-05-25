const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
   sunrise1Img = loadImage ("sprites/sunrise1.png");
    sunrise2Img = loadImage ("sprites/sunrise2.png");
    sunrise3Img = loadImage ("sprites/sunrise3.png");
    sunrise4Img = loadImage ("sprties/sunrise4.png");
    sunrise5Img = loadImage ("sprites/sunrise5.png");
    sunrise6Img = loadImage ("sprites/sunrise6.png");
    sunset7Img = loadImage ("sprites/sunset7.png");
    sunset8Img = loadImage ("sprites/sunset8.png");
    sunset9Img = loadImage ("sprites/sunset9.png");
    sunset10Img = loadImage ("sprites/sunset10.png");
    sunset11Img = loadImage ("sprites/sunset11.png");
    sunset12Img = loadImage ("sprites/sunset12.png");
    getTime();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    
    



}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
    sunrise1Img.display();
    sunrise2Img.display();
    sunrise3Img.display();
    sunrise4Img.display();
    sunrise5Img.display();
    sunrise6Img.display();
    sunset7Img.display();
    sunset8Img.display();
    sunset9Img.display();
    sunset10Img.display();
    sunset11Img.display();
    sunset12Img.display();

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();
    console.log(responseJSON.datetime);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);


    // add conditions to change the background images from sunrise to sunset
    if(hour >= 4 && hour <= 6){
        bg = "sprites/sunrise1.png";
    }
    if(hour >= 6 && hour <= 8){
        bg = "sprites/sunrise2.png";
    }
    if(hour >= 8 && hour <= 10){
        bg = "sprites/sunrise3.png";
    }
    if(hour >= 10 && hour <= 11){
        bg = "sprites/sunrise4.png";
    }
    if(hour >= 11 && hour <= 1){
        bg = "sprites/sunrise5.png";
    }
    if(hour >= 1 && hour <= 3){
        bg = "sprites/sunrise6.png";
    }
    if(hour >= 3 && hour <= 4){
        bg = "sprites/sunset7.png";
    }
    if(hour >= 4 && hour <= 5){
        bg = "sprites/sunset8.png";
    }
    if(hour >= 5 && hour <= 6){
        bg = "sprites/sunset9.png";
    }
    if(hour >= 6 && hour <= 8){
        bg = "sprites/sunset10.png";
    }
    if(hour >= 8 && hour <= 12){
        bg = "sprites/sunset12.png";
    }
    else{
        bg = "sprties/sunset11.png";
    }


}

