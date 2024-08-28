class Particle{
    constructor(radius,angularV,angularA,maxV){
      this.angle = 0;
      this.radius = radius;
      this.angularV = angularV;
      this.angularA = angularA;
      this.maxV = maxV;
      this.vx=0;
      this.vy=0;
      this.shoot = false;
      this.x = this.radius;
      this.y = 0;
     
      this.prevX = this.radius;
      this.prevY = 0;
      this.path = []; //stores the particles path
      this.pathDrawn = false;
    }
   
    update() {
        this.prevX = this.x;
        this.prevY = this.y;
        
        if (!this.shoot && this.angularV != this.maxV) {
            if(this.angularV < this.maxV){
                this.angularV += this.angularA;
            }

            this.angle += this.angularV;
            this.x = this.radius * cos(this.angle);
            this.y = this.radius * sin(this.angle);
        }else{
            if (this.vx === 0 && this.vy === 0) {
                this.vx = -this.radius * this.angularV * sin(this.angle);
                this.vy = this.radius * this.angularV * cos(this.angle);
            }
    
            this.x += this.vx;
            this.y += this.vy;
        }
      }
      
    display(){
        noFill();
        stroke(255);
        beginShape();
        for (let p of this.path) {
            vertex(p.x, p.y);
        }
        endShape();

      if(this.shoot == true){
        stroke(0);
        line(this.prevX,this.prevY,this.x,this.y);
      }
      
      if(!this.pathDrawn){
        stroke(0);
        noFill();
        ellipse(0, 0, this.radius * 2);

        if(this.shoot == true){
            stroke(225);
        }
    }

      fill(0);
      noStroke();
      ellipse(this.x,this.y,10,10);
    }
}
  
  