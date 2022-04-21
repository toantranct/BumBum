let AutomaticWeapon = require('./AutomaticWeapon');

class Smg extends AutomaticWeapon {
    constructor() {
        super(100, 80, 50);
        this.spriteName = "smg.png";
        this.spriteWidth = 80;
        this.spriteHeight = 65;
    }
}

module.exports = Smg;