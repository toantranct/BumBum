let SemiAutomaticWeapon = require('./SemiAutomaticWeapon');

class Revolver extends SemiAutomaticWeapon {
    constructor() {
        super(600, 100, 500);
        this.spriteName = "revolver.png";
        this.spriteWidth = 30;
        this.spriteHeight = 18;
    }
}

module.exports = Revolver;