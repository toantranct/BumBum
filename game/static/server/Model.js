'use strict';

let Map = require('./Map');
let Items = require('./items/Items');
let Leaderboard = require('./Leaderboard');
let Player = require('./Player');
let Bullet = require('./Bullet');
let BulletPhysics = require('./BulletPhysics');

class Model {
  constructor() {
    this.map = new Map();
    this.items = new Items(this.map.square);
    this.leaderboard = new Leaderboard();
  };

  getLeaderboard() {
    return this.leaderboard;
  }

  getMap() {
    return this.map;
  }

  getItems() {
    return this.items;
  }

  getNewPlayer(xArg, yArg, healthArg, directionArg, nameArg) {
    return new Player(xArg, yArg, healthArg, directionArg, nameArg);
  }

  getBulletPhysics() {
    return new BulletPhysics();
  }

  getBullet(xArg, yArg, directionArg) {
    return new Bullet(xArg, yArg, directionArg);
  }

}

module.exports = Model;
