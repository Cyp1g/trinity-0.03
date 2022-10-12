class Jugador{
    constructor(salud,hambre,x,y,width,height){
        this.salud=salud;
        this.hambre=hambre;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }
    display(){
        Player = createSprite(this.width,this.height,this.y,this.x);
        Player.addImage(normal);
        Player.scale = 0.049;
        

    }
    moves(){
        if(keyIsDown(UP_ARROW)){
            Player.y-=2;
        }

        if(keyIsDown(DOWN_ARROW)){
            Player.y+=2;
        }

        if(keyIsDown(LEFT_ARROW)){
            Player.x-=2;
        }

        if(keyIsDown(RIGHT_ARROW)){
            Player.x+=2;
        }

        Player.setCollider("circle",0,0,50);
        Player.debug = true

        if(comida.isTouching(Player)){
            comida.remove();

        }

        var posx=this.x;
        var posy=this.y;

        drawSprites();
    }
}