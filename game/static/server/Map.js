let Point = require('./Point');
let Terrain = require('./Terrain.js');

class Map {
    constructor() {
        this.square = [];
        this.heightInSquares = 100;
        this.widthInSquares = 100;
        this.sand = new Terrain(3, 'sand', 0, 1);
        this.edge = new Terrain(3, 'edge', 0, 0);
        this.grass = new Terrain(5, 'grass', 0, 1);
        this.water = new Terrain(2, 'water', 0, 1);
        this.lava = new Terrain(10, 'lava', 5, 1);
        this.brick = new Terrain(3, 'brick', 0, 0);
        this.floor = new Terrain(6, 'floor', 0, 1);
        for (let i = 0; i < this.heightInSquares; i++) {
            this.square[i] = [];
            for (let j = 0; j < this.widthInSquares; j++) {
                if (i == 0 || j == 0 || i == 99 || j == 99)
                    this.square[i][j] = this.edge;
                else
                    this.square[i][j] = this.grass;

            }
        }
        this.createArea(new Point(1, 1), 50, 0.75, this.sand);
        this.createArea(new Point(10, 30), 200, 0.75, this.sand);
        this.createArea(new Point(97, 50), 1000, 0.65, this.sand);
        this.createArea(new Point(50, 20), 500, 0.65, this.sand);
        this.createArea(new Point(10, 50), 500, 0.80, this.sand);
        this.createArea(new Point(97, 97), 1000, 0.90, this.water);
        this.createArea(new Point(20, 30), 200, 0.75, this.water);
        this.createArea(new Point(20, 5), 100, 0.75, this.water);
        this.createArea(new Point(50, 50), 800, 0.60, this.water);
        this.createArea(new Point(50, 90), 800, 0.65, this.lava);
        this.createArea(new Point(2, 2), 30, 0.65, this.lava);
        this.createWall(50, 10, 4, "horizontally");
        this.createWall(80, 30, 4, "vertically");

        this.createBuilding(15, 15, 10, 10, 2);
        this.createBuilding(20, 20, 15, 20, 3);
        this.createBuilding(45, 45, 10, 10, 18);
        this.createBuilding(60, 10, 30, 10, 9);
        this.createBuilding(20, 80, 40, 5, 7);
        this.createBridge(80, 80, 10);
        this.createBuilding(3, 43, 20, 15, 2);

    }


    createArea(center, size, randomness, type) { ///using a DFS algorithm
        let queue = [];
        queue.push(center);
        let currentSize = 0;
        while (queue.length != 0 && currentSize < size) {
            let current = queue.shift();
            if (this.square[current.y][current.x] === type)
                continue;
            this.square[current.y][current.x] = type;
            currentSize++;

            if (Math.random() <= randomness && current.x + 1 >= 1 && current.x + 1 <= 98 && current.y >= 1 && current.y <= 98 && this.square[current.x + 1][current.y] !== type) {
                let currentNew = new Point(current.x + 1, current.y);
                queue.push(currentNew);
            }
            if (Math.random() <= randomness && current.x >= 1 && current.x <= 98 && current.y + 1 >= 1 && current.y + 1 <= 98 && this.square[current.x][current.y + 1].type !== type) {
                let currentNew = new Point(current.x, current.y + 1);
                queue.push(currentNew);
            }
            if (Math.random() <= randomness && current.x - 1 >= 1 && current.x - 1 <= 98 && current.y >= 1 && current.y <= 98 && this.square[current.x - 1][current.y].type !== type) {
                let currentNew = new Point(current.x - 1, current.y);
                queue.push(currentNew);
            }
            if (Math.random() <= randomness && current.x >= 1 && current.x <= 98 && current.y - 1 >= 1 && current.y - 1 <= 98 && this.square[current.x][current.y - 1].type !== type) {
                let currentNew = new Point(current.x, current.y - 1);
                queue.push(currentNew);
            }
        }
    }

    createBuilding(x, y, width, height, numberOfDoors) {

        this.createWall(x, y, width, "horizontally");
        this.createWall(x, y + height - 1, width, "horizontally");
        this.createWall(x, y, height, "vertically");
        this.createWall(x + width - 1, y, height, "vertically");

        while (numberOfDoors--) {
            let doorsX, doorsY;
            switch (Math.floor(Math.random() * 4)) {
                case 0://east
                    doorsX = x + width - 1;
                    doorsY = y + Math.floor(Math.random() * (height - 4)) + 1;
                    this.square[doorsY][doorsX] = this.floor;
                    this.square[doorsY + 1][doorsX] = this.floor;
                    break;

                case 1://north
                    doorsX = x + Math.floor(Math.random() * (width - 4)) + 1;
                    doorsY = y;
                    this.square[doorsY][doorsX] = this.floor;
                    this.square[doorsY][doorsX + 1] = this.floor;

                    break;

                case 2://west
                    doorsX = x;
                    doorsY = y + Math.floor(Math.random() * (height - 4)) + 1;
                    this.square[doorsY][doorsX] = this.floor;
                    this.square[doorsY + 1][doorsX] = this.floor;
                    break;

                case 3://south
                    doorsX = x + Math.floor(Math.random() * (width - 4)) + 1;
                    doorsY = y + height - 1;
                    this.square[doorsY][doorsX] = this.floor;
                    this.square[doorsY][doorsX + 1] = this.floor;
                    break;
            }

        }//numberOfDoors is changed now

        for (let i = 1; i < height - 1; i++) {
            for (let j = 1; j < width - 1; j++) {
                this.square[y + i][x + j] = this.floor;
            }
        }
    }

    createBridge(x, y, size) {
        this.createWall(x, y, size, "vertically");
        this.createWall(x + size - 1, y, size, "vertically");
        for (let i = 1; i < size - 1; i++) {
            for (let j = 1; j < size - 1; j++) {
                this.square[x + i][y + j] = this.floor;
            }
        }
    }

    createWall(x, y, length, direction) {
        for (let i = 0; i < length; i++) {
            if (this.square[y][x + i] != this.floor && direction == 'horizontally') {
                this.square[y][x + i] = this.brick;
                continue;
            }
            if (this.square[y + i][x] != this.floor && direction == 'vertically') {
                this.square[y + i][x] = this.brick;
            }
        }
    }
}

module.exports = Map;