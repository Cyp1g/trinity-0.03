class Resources {
    constructor(){

    }
    generacion(){
        comida = new Group();
        this.randomizacion(comida, 10,0.9)


    }
    randomizacion(spriteGroup, numberOfSprites,scale){
        for(var i=0; i<numberOfSprites; i++){
            x = random(0,800);
            y = random(0,800);

            var sprite = createSprite(x, y, );
            sprite.addImage(resourcesimage);

            sprite.scale=scale;

            spriteGroup.add(sprite);
        }
    }
}