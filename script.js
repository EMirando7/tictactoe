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
            // add text on each player ----------------------->
            let player1Square = document.getElementById('player1');
            player1Square.innerHTML = `Player 1 <br> ${player1}`;
            let player2Square = document.getElementById('player2');
            player2Square.innerHTML = `Player 2 <br> ${player2}`;
            // ----------------------------->      
            //color the colorelems and add borders
            const player1Color = document.getElementById('player1Color');
            player1Color.style.borderLeft = 'solid';
            player1Color.style.backgroundColor = ' red';
            player1Color.style.borderBottom = 'solid'
            const player2Color = document.getElementById('player2Color');
            player2Color.style.borderLeft = 'solid';
            player2Color.style.backgroundColor = 'blue';
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
                        element.innerHTML = "X";
                    }
                    turn++;
                    //After click, remove changeLetter handler for any iteration
                    element.removeEventListener('click', changeLetter);
                });
            });
            //! currently here
            boardXs.forEach((element) => {
                element.addEventListener('click', function addToArr() {
                    let boardXsArr = [...boardXs];
                    if (boardXsArr.indexOf(element) === 0 || boardXsArr.indexOf(element) === 1 || boardXsArr.indexOf(element) === 2) {
                        inputArr.topRow.push(element.innerText)
                    }
                    else if (boardXsArr.indexOf(element) === 3 || boardXsArr.indexOf(element) === 4 || boardXsArr.indexOf(element) === 5) {
                        inputArr.middleRow.push(element.innerText)
                    }
                    else {
                        inputArr.bottomRow.push(element.innerText)
                    }
                });
            })
        })();
        let inputArr = {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    }),
    // innerHTML.includes()
    finalize: {
        straightWin: function () {
            //building
        }
    }
}

game.initialize();
game.players.buildPlayerNameRows()