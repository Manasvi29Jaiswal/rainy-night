class Drop {
    constructor(x,y) {
      var options = {
          //isStatic:false,
          friction:0.001
      }
      
      this.body = Bodies.circle(x,y,10,options);
      this.radius=10;
      World.add(world,this.body);
      //this.drops=[]
    }
    
    updatePosition(){

  if(this.body.position.y>height){

    Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})

  }
    }

  showdrop(){

    ellipseMode(CENTER);
    fill("blue")
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

  }


      //var pos =this.body.position;
      //this.body.position.x = random(0,400)
      //this.body.position.y = random(0,400)
      //var position=[this.body.position.x,this.body.position.y]
      //this.drops.push(position)

      

      //for(var i= 0; i < maxdrops ;i++){
      
      
      //}
  
  
  //}
}
  






