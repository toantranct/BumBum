let Weapon = require('./Weapon');
let Bullet = require('../Bullet');

class SemiAutomaticWeapon extends Weapon {
    constructor(dmg, acc, fireRate) {
        super(dmg, acc, fireRate);
    };

    shoot(x, y, direction, bulletPhysics, shooter) {
        let time = new Date();
        if (!this.triggered && time - this.lastShot >= this.fireRate) {
            this.lastShot = time;
            let spread = (Math.random() - 0.5) * Math.PI * (100 - this.accuracy) / 100;
            let bullet = new Bullet(x + 30 * Math.cos(direction), y + 30 * Math.sin(direction), direction + spread, this.damage, shooter);
            this.setBulletStats(bullet);
            bulletPhysics.bullets.push(bullet);
            this.triggered = 1;
        }
    }
}

module.exports = SemiAutomaticWeapon;