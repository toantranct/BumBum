class BulletPhysics {
    constructor() {
        this.bullets = [];
    }

    update(map) {
        for (let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].x += this.bullets[i].speed * Math.cos(this.bullets[i].direction);
            this.bullets[i].y += this.bullets[i].speed * Math.sin(this.bullets[i].direction);
            this.bullets[i].distanceTraveled += this.bullets[i].speed;
            if (!map.square[Math.floor((this.bullets[i].y) / 50)][Math.floor((this.bullets[i].x) / 50)].isPassable) {
                this.bullets.splice(i, 1);
                i--;
            }
        }
    }

    checkRange() {
        let length = this.bullets.length;
        for (let i = 0; i < length; i++) {
            if (this.bullets[i].distanceTraveled >= this.bullets[i].range) {
                this.bullets.splice(i, 1);
                length--;
                i--;
            }

        }
    }

    checkHits(players) {
        for (let id in players) {
            let player = players[id];
            for (let i = 0; i < this.bullets.length; i++) {
                if (this.bullets[i].x >= player.x - 20 && this.bullets[i].x <= player.x + 20 && this.bullets[i].y >= player.y - 20 && this.bullets[i].y <= player.y + 20) {
                    player.health -= this.bullets[i].damage;
                    if (player.health <= 0)
                        player.killedBy = this.bullets[i].owner;
                    this.bullets.splice(i, 1);
                    i--;
                }
            }
        }
    }
}

module.exports = BulletPhysics;