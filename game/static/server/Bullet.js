class Bullet {
    constructor(xArg, yArg, directionArg, damageArg, ownerArg) {
        this.x = xArg;
        this.y = yArg;
        this.direction = directionArg;
        this.speed = 20;
        this.range = 800;
        this.distanceTraveled = 0;
        this.damage = damageArg;
        this.owner = ownerArg;
    };

}


module.exports = Bullet;