let SemiAutomaticWeapon = require('./SemiAutomaticWeapon');
let Bullet = require('../Bullet');

class DoublePistol extends SemiAutomaticWeapon {
    constructor() {
        super(300, 95, 400);
        this.spriteName = "doublePistols.png";
        this.spriteWidth = 30;
        this.spriteHeight = 48;
    }

    shoot(x, y, direction, bulletPhysics, shooter) {
        let time = new Date();
        if (!this.triggered && time - this.lastShot >= this.fireRate) {
            this.lastShot = time;
            let spread1 = (Math.random() - 0.5) * Math.PI * (100 - this.accuracy) / 100;
            let bullet1 = new Bullet(x + 20 * Math.cos(direction + Math.PI / 2) + 50 * Math.cos(direction), y + 20 * Math.sin(direction + Math.PI / 2) + 50 * Math.sin(direction), direction + spread1, this.damage, shooter);
            this.setBulletStats(bullet1);
            bulletPhysics.bullets.push(bullet1);
            let spread2 = (Math.random() - 0.5) * Math.PI * (100 - this.accuracy) / 100;
            let bullet2 = new Bullet(x - 20 * Math.cos(direction + Math.PI / 2) + 50 * Math.cos(direction), y - 20 * Math.sin(direction + Math.PI / 2) + 50 * Math.sin(direction), direction + spread2, this.damage, shooter);
            this.setBulletStats(bullet2);
            bulletPhysics.bullets.push(bullet2);
            this.triggered = 1;
        }
    }
}

module.exports = DoublePistol;