class Slingshot{
    constructor(objectA,pointB){
        var options={
            bodyA:objectA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        
        
        if (this.sling.bodyA){
            var pointA=this.sling.bodyA.position
            var pointB=this.sling.pointB
            push();
            strokeWeight (7);            
            stroke(48, 22, 8);
            if (this.sling.bodyA.position.x > 220){
                line(pointA.x,pointA.y,pointB.x-10,pointB.y-7)
                line(pointA.x,pointA.y,pointB.x+30,pointB.y)
                
            }
           
            pop();
        }
       
    }

    fly(){
        this.sling.bodyA = null;
    }
}  