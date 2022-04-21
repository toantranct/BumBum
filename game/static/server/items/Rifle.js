let AutomaticWeapon = require('./AutomaticWeapon');

class Rifle extends AutomaticWeapon {
    constructor() {
        super(400, 98, 150);
        this.spriteName = "rifle.png";
        this.spriteWidth = 90;
        this.spriteHeight = 33;
    }

}

module.exports = Rifle;