let Weapon = require('./Weapon');
let Bullet = require('../Bullet');

class AutomaticWeapon extends Weapon {
    constructor(dmg, acc, fireRate) {
        super(dmg, acc, fireRate);
    };

    shoot(x, y, direction, bulletPhysics, shooter) {
        let time = new Date();
        if (time - this.lastShot >= this.fireRate) {
            this.lastShot = time;
            let spread = (Math.random() - 0.5) * Math.PI * (100 - this.accuracy) / 100;
            let bullet = new Bullet(x + 30 * Math.cos(direction), y + 30 * Math.sin(direction), direction + spread, this.damage, shooter);
            this.setBulletStats(bullet);
            bulletPhysics.bullets.push(bullet);
        }
    }
}

module.exports = AutomaticWeapon;