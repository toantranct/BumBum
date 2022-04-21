let Entry = require('./Entry');

class Leaderboard {
    constructor() {
        this.array = [];
    }

    addEntry(name, socketId, score) {
        this.array.push(new Entry(name, socketId, score));
        this.sort();
    }

    addPoint(socketId) {
        for (let i = 0; i <= this.array.length; i++) {
            if (this.array[i].socketId == socketId) {
                console.log("added");
                this.array[i].score++;
                break;
            }
        }
        this.sort();
    }

    sort() {
        this.array.sort(function (a, b) {
            return a.score < b.score;
        });
    }
}

module.exports = Leaderboard;