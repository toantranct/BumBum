let AutomaticWeapon = require('./AutomaticWeapon');

class Gatling extends AutomaticWeapon {
    constructor() {
        super(300, 70, 15);
        this.spriteName = "gatling.png";
        this.spriteWidth = 90;
        this.spriteHeight = 33;
    }
}

module.exports = Gatling;