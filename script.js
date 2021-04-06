const game = {
    players: {
        getNamesFromUsers: function () {
            let player1 = prompt("Player 1 name");
            let player2 = prompt("Player 2 name");
            return [player1, player2];
        },
        conLog: function () {
            let [player1, player2] = this.getNamesFromUsers();
            console.log(player1, player2)
        }
    },
    initialize: (function () {
        let boardXs = document.querySelectorAll('#ghost > div');
        //hides the X from board
        const resultX = (function hideX() {
            for (let i = 0; i < boardXs.length; i++) {
                boardXs[i].innerHTML = " ";
            }
        })();
        //hears for clicks, changes to depending on which player clicks
        const toggleSymbol = (function () {
            let turn = 0;
            boardXs.forEach(element => {
                element.addEventListener('click', function changeLetter() {
                    if (turn % 2 == 0) {
                        element.innerHTML = "O";
                    }
                    else {
                        element.innerHTML = "X"
                    }
                    turn++;
                    //After click, remove changeLetter handler for any iteration
                    element.removeEventListener('click', changeLetter);
                })
            });
        })();
    })
}

game.initialize();
game.players.conLog()