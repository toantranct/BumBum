let Point = require('../Point');

class HealthPack extends Point {
    constructor() {
        super();
        this.healthGain = 500;
        this.spriteName = "healthPack.png";
        this.spriteWidth = 50;
        this.spriteHeight = 50;
    }

    heal(player) {
        player.health += this.healthGain;
    }

}

module.exports = HealthPack;