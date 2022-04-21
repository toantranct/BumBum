let SemiAutomaticWeapon = require('./SemiAutomaticWeapon');

class Pistol extends SemiAutomaticWeapon {
    constructor() {
        super(300, 95, 400);
        this.spriteName = "pistol.png";
        this.spriteWidth = 30;
        this.spriteHeight = 18;
    }
}

module.exports = Pistol;