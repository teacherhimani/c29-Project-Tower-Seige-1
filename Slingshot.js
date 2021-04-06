class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
    
        //Step 1//
        //3 images are added to sprites directory to use them
        //to create catapult
        //As catapult doesnt interact with any object in the game
        //So we can keep it static 
        //We don't need to create body for this
        //load all images using loadImage and image()
        //function in p5.js 
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        //step2//
        //place image in game using 
        //image() function in p5.js
        //check Teacher Activity 2
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            //step 4//
            //Give color to the lines of rubber band from 2 ends of cata pult
            stroke(48,22,8);

            if(pointA.x < 220) {
                //Thickness of the rubber band
                strokeWeight(7);

                //step5//
                //line 1 drawn from one end of catapult to behind the bird
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);

                //line 2 drawn from other end of catapult to behind the bird
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);

                //position the sling3 image behind the bird as base of the rubberband
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
           else{

                //step 6//
                //The base of rubberband will still be behind the bird
                //even when the bird is pulled forward
                //Hence we have to use different lines at different end points
                //depending on the position of bird
                //with respect to catapult
               strokeWeight(3);
               line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
               line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
               image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}