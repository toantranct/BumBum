let Pistol = require('./items/Pistol');

class Player {
    constructor(xArg, yArg, healthArg, directionArg, nameArg) {
        this.x = xArg;
        this.y = yArg;
        this.health = healthArg;
        this.direction = directionArg;
        this.name = nameArg;
        this.weapon = new Pistol();
        this.score = 0;
        this.killedBy = "notAPlayer";
    }

    pickUpItem(item, items) {
        if (!(this.weapon instanceof Pistol))
            this.dropItem(items);
        this.weapon = item;
    }

    dropItem(items) {

        let dirX = -1;
        if (Math.random() > 0.5)
            dirX = 1;
        let dirY = -1;
        if (Math.random() > 0.5)
            dirY = 1;
        this.weapon.x = this.x + 100 * dirX;
        this.weapon.y = this.y + 100 * dirY;
        if (!(this.weapon instanceof Pistol))
            items.push(this.weapon);
    }

}

module.exports = Player;