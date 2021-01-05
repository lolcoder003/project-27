class Rope {

    constructor(body1,body2,offsetX,offsetY) {
      this.offsetX = offsetX;
      this.offsetY = offsetY ; 
      
        var options = {
        bodyA:body1,
        bodyB:body2 ,
        pointB:{x:this.offsetX, y:this.offsetY} ,
       }

       this.Rope = Constraint.create(options);
       World.add(world,this.Rope);

    }

    display () {

        var pointA= this.Rope.bodyA.position;
        var pointB= this.Rope.bodyB.position;

        //stroke(0);
        strokeWeight (1)
        var string1X = pointA.x
        var string1Y = pointA.y
        
        var string2X = pointB.x+this.offsetX
        var string2Y = pointB.y+this.offsetY
        line (string1X,string1Y,string2X,string2Y);
        

    }
}

