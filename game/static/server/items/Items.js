let Point = require('../Point');
let HealthPack = require('./HealthPack');
let Weapon = require('./Weapon');
let AutomaticWeapon = require('./AutomaticWeapon');
let SemiAutomaticWeapon = require('./SemiAutomaticWeapon');
let Revolver = require('./Revolver');
let Pistol = require('./Pistol');
let DoublePistol = require('./DoublePistol');
let Rifle = require('./Rifle');
let Smg = require('./Smg');
let Gatling = require('./Gatling');

class Items {
    constructor(mapSquares) {
        this.array = [];
        this.generateItems(100, mapSquares);
    };

    checkColissions(players) {
        for (let id in players) {
            let player = players[id];
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i].x >= player.x - this.array[i].spriteWidth && this.array[i].x <= player.x + this.array[i].spriteWidth && this.array[i].y >= player.y - this.array[i].spriteHeight && this.array[i].y <= player.y + this.array[i].spriteHeight) {
                    if (this.array[i] instanceof Weapon)
                        player.pickUpItem(this.array[i], this.array);
                    else
                        this.array[i].heal(player);
                    this.array.splice(i, 1);
                    i--;
                }
            }
        }
    };

    generateItems(amount, mapSquares) {
        let gatling = new Gatling();
        gatling.x = 2500;
        gatling.y = 2500;
        this.array.push(gatling);
        for (let i = 0; i < amount; i++) {
            let item = new Point();
            switch (Math.floor(Math.random() * 6)) {

                case 0:
                    item = new DoublePistol();
                    break;

                case 1:
                    item = new Rifle();
                    break;

                case 2:
                    item = new Revolver();
                    break;

                case 3:
                    item = new Smg();
                    break;

                case 4:
                    item = new HealthPack();
                    break;

                case 5:
                    item = new HealthPack();
                    break;

            }
            let newX, newY;
            do {
                newX = Math.random() * 5000;
                newY = Math.random() * 5000;
            } while (!mapSquares[Math.floor(newX / 50)][Math.floor(newY / 50)].isPassable);

            item.x = newX;
            item.y = newY;

            this.array.push(item);
        }
    }
}

module.exports = Items;