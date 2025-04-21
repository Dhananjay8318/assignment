class vehicle{
    constructor (color,currentSpeed,maxSpeed){
        this.color=color;
        this.currentSpeed=currentSpeed;
        this.maxSpeed=maxSpeed;

    }
    move(){
        console.log("moving at", this.currentSpeed);
    }
    accrlerate(amount){
        this.currentSpeed += amount;

    }
}
class Motorcycle extends vehicle{
    constructor(color,currentSpeed,maxSpeed,fuel){
        super(color,currentSpeed,maxSpeed);
        this.fuel=fuel;
    }
    doWheelie(){
        console.log("drive on one wheel");
    }
}
let motor=new Motorcycle("Black",0,250,"gasoline");
console.log(motor.color);
motor.accrlerate(50);
motor.move();