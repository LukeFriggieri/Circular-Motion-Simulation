let particle1;
let button;

function setup() {
    createCanvas(400, 400);
    particle1 = new Particle(100,0,0.02,5);
 
    button = createButton("Shoot Particle");
    button.id('shootButton');
    button.parent('canvas-container');
    button.mousePressed(shootParticle);
}

function shootParticle(){
    particle1.shoot = true;
}

function draw() {
    if(!particle1.shoot){
        background(225);
    }
       
    translate(width/2, height/2);
 
    particle1.update();
    particle1.display();

    fill(0); // White color for the text
    noStroke();
    textSize(16);
    textAlign(CENTER, TOP);
  
    if(!particle1.shoot){
        text("Current Angular Velocity: " + particle1.angularV.toFixed(2), 0, height / 2 - 20);
    }
}
