let Point = require('../Point');

class Weapon extends Point {
    constructor(dmg, acc, fRate) {
        super();
        this.damage = dmg;
        this.accuracy = acc;
        this.spriteName = "null";
        this.triggered = 0;
        this.lastShot = new Date();
        this.fireRate = fRate; // in miliseconds
    };

    setBulletStats(bullet) {
        bullet.damage = this.damage;
    }
}

module.exports = Weapon;