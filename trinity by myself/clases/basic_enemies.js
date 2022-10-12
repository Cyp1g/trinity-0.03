class Enemies{
    constructor(salud,x,y,width,height){
        this.salud=salud;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }
    display(){
        rect(this.x,this.y,this.width,this.height);
    }
    follow(playerx,playery){

        var distance=Math.round(dist(playerx,playery,this.x,this.y));
        console.log(distance);

        if(distance<300){
            for(var i=1; i>=distance ; i++){
                 this.x = this.x+2; 
                }
            
        }
        

    }
    
    

}