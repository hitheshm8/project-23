class Computer {
    
    constructor(x, y, width, height) {
        var options= {
                isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body);
        this.image = loadImage('assets/player.png')
        this.w=width;
        this.h=height;
    }

    display() {
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.w, this.h )
    }
}