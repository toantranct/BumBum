'use strict';

class Terrain {
    constructor(speedArg, typeArg, damageArg, isPassableArg) {
        this.speed = speedArg;
        this.type = typeArg;
        this.damage = damageArg;
        this.isPassable = isPassableArg;
    }
}

module.exports = Terrain;