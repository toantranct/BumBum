'use strict';
class Controller {
    constructor() {
        this.squareWidthInPixels = 50;
        this.squareHeightInPixels = 50;
        this.width = 1000; // default: 800
        this.height = 800;
        this.playerSpriteWidth = 50;
        this.playerSpriteHeight = 50;
        this.mode = 'alive';
        this.padding = 50;
    }

    newPlayer() {
        socket.emit('new player');
    }

    emitInput() {
        setInterval(function() {
            socket.emit('input', input);
        }, 1000 / 60);
    }


    listenToUpdate() {
        socket.on('update', function(newPlayers, newCurrentPlayer, newAbsoluteCurrentPlayer, currentPlayerMap, bulletsArg, itemsArg, leaderboard2) {
                players = newPlayers;
                currentPlayer = newCurrentPlayer;
                leaderboard = leaderboard2;
                currentPlayer.xAbsolute = newAbsoluteCurrentPlayer.x;
                currentPlayer.yAbsolute = newAbsoluteCurrentPlayer.y;
                bullets = bulletsArg;
                items = itemsArg;

                for (var i = 0; i < 17; i++) {
                    for (var j = 0; j < 21; j++) {
                        gameMap.square[i][j].path = 'static/client/sprites/' + currentPlayerMap[i][j] + '.png';
                    }
                }
            }

        );
    }

    listenToDeath() {
        socket.on('death', function() {
                setTimeout(function() { controller.mode = "dead"; }, 1000);
                setTimeout(function() {
                    if (window.confirm("Ooops, you were owned. Are you a noob?")) {
                        window.location.href = 'https://n12cp.tk/';
                    } else {
                        window.location.href = 'https://n12cp.tk/';
                    };
                }, 1500);
                socket.disconnect();
            }

        );
    }
}