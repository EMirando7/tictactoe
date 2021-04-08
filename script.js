const game = {
    players: {
        getNamesFromUsers: function () {
            let player1 = prompt("Player 1 name");
            let player2 = prompt("Player 2 name");
            return [player1, player2];
        },
        buildPlayerNameRows: function () {
            //vars from parent object scope -----------
            let [player1, player2] = this.getNamesFromUsers();
            let playerInterfaceParent = document.getElementById('playerInterface');
            // add text on each player ----------------------->
            let player1Square = document.getElementById('player1');
            player1Square.innerHTML = `Player 1 <br> ${player1}`
            let player2Square = document.getElementById('player2');
            player2Square.innerHTML = `Player 2 <br> ${player2}`
            // ------------------------------------------------>
            //expand the grid ---------------------------------->
            // playerInterfaceParent.style.gridTemplateRows = '1fr 1fr';


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
game.players.buildPlayerNameRows()