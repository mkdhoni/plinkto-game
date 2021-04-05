class Log extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,500,height,angle);
      
      Matter.Body.setAngle(this.body, angle);
    }
  }