class particle{

    constructor(x,y,radius){
    var options={
         
        
        restitution:0.4,
    
    }
    this.radius=radius
    this.body=Bodies.circle(x,y,radius,options)
    this.radius=40

    World.add(world,this.body);
    }

    display(){

var pos=this.body.position
var angle=this.body.angle

push();
translate(pos.x,pos.y)
fill(this.color)
rotate(angle);
ellipseMode(RADIUS)
ellipse(0,0,this.radius,this.radius);
pop();
    }





}