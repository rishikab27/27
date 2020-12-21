class Ball{
    constructor(x, y, r){
``
        var Option={
            isStattic:false,
            restitution:0.3, 
            friction:0.5,
            density:1.2,
        }
      this.r=r
       this.ellipse= Bodies.circle(x,y,r,Option)
       
        World.add(world,this.body)
    }

display(){
fill("pink")
//ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,this.r, this.r)
}
}