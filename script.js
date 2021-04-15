function handler(e) {
    e.stopPropagation();
    e.preventDefault();
}
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
    initialize: function () {
        let boardXs = document.querySelectorAll('#ghost > div');
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
        })();
    },
    finalize: function () {
        let player1 = document.getElementById('player1').textContent;
        let player2 = document.getElementById('player2').textContent;
        let gameBoard = document.getElementById('ghost');
        let finishedGame = false
        let topRow = document.querySelectorAll('#ghost div:nth-child(n+1):nth-child(-n+3)');
        let middleRow = document.querySelectorAll('#ghost div:nth-child(n+4):nth-child(-n+6)');
        let bottomRow = document.querySelectorAll('#ghost div:nth-child(n+7):nth-child(-n+9)');
        let checkO = elem => elem.innerText == 'O';
        let checkX = elem => elem.innerText == 'X';
        let topHorizontalOccurences = function () {
            if ([topRow[0], topRow[1], topRow[2]].every(elem => checkO(elem) == true) && finishedGame == false) {
                console.log('Player 1 wins')
                document.addEventListener("click", handler, true);
            }
            else if ([topRow[0], topRow[1], topRow[2]].every(elem => checkX(elem) == true) && finishedGame == false) {
                console.log('Player 2 won')
                document.addEventListener("click", handler, true);
            }
        };
        let middleHorizontalOccurences = function () {
            if ([middleRow[0], middleRow[1], middleRow[2]].every(elem => checkO(elem) == true) && finishedGame == false) {
                console.log('Player 1 Won, middle')

                document.addEventListener("click", handler, true);
            }
            else if ([middleRow[0], middleRow[1], middleRow[2]].every(elem => checkX(elem) == true) && finishedGame == false) {
                console.log('Player 2 won, middle')
                document.addEventListener("click", handler, true);
            }
        };
        let bottomHorizontalOccurences = function () {
            if ([bottomRow[0], bottomRow[1], bottomRow[2]].every(elem => checkO(elem) == true) && finishedGame == false) {
                console.log('Player 1 Won, bottom')
                document.addEventListener("click", handler, true);
            }
            else if ([bottomRow[0], bottomRow[1], bottomRow[2]].every(elem => checkX(elem) == true) && finishedGame == false) {
                console.log('Player 2 won, bottom')
                document.addEventListener("click", handler, true);
            };
        };
        let leftVerticalOccurences = function () {
            if ([topRow[0], middleRow[0], bottomRow[0]].every(elem => checkO(elem) == true) && finishedGame == false) {
                console.log('Player 1 Won, left vertical')
                document.addEventListener("click", handler, true);
            }
            else if ([topRow[0], middleRow[0], bottomRow[0]].every(elem => checkX(elem) == true) && finishedGame == false) {
                console.log('Player 2 won, left vertical')
                document.addEventListener("click", handler, true);
            }
        };
        let middleVerticalOccurences = function () {
            if ([topRow[1], middleRow[1], bottomRow[1]].every(elem => checkO(elem) == true) && finishedGame == false) {
                console.log('Player 1 Won, middle vertical')
                document.addEventListener("click", handler, true);
            }
            else if ([topRow[1], middleRow[1], bottomRow[1]].every(elem => checkX(elem) == true) && finishedGame == false) {
                console.log('Player 2 won, middle vertical')
                document.addEventListener("click", handler, true);
            }
        };
        let rightVerticalOccurences = function () {
            if ([topRow[2], middleRow[2], bottomRow[2]].every(elem => checkO(elem) == true) && finishedGame == false) {
                console.log('Player 1 Won, right vertical')
                document.addEventListener("click", handler, true);
            }
            else if ([topRow[2], middleRow[2], bottomRow[2]].every(elem => checkX(elem) == true) && finishedGame == false) {
                console.log('Player 2 won, right vertical')
                document.addEventListener("click", handler, true);
            }
        };
        let left2RightDiagonal = function () {
            if ([topRow[0], middleRow[1], bottomRow[2]].every(elem => checkO(elem) == true) && finishedGame == false) {
                console.log('Player 1 wins, diag')
                document.addEventListener("click", handler, true);
            }
            else if ([topRow[0], middleRow[1], bottomRow[2]].every(elem => checkX(elem) == true) && finishedGame == false) {
                console.log('Player 2 wins, diag')
                document.addEventListener("click", handler, true);
            }
        };
        let right2LeftDiagonal = function () {
            if ([topRow[2], middleRow[1], bottomRow[0]].every(elem => checkO(elem) == true) && finishedGame == false) {
                console.log('Player 1 wins, diag 2')
                document.addEventListener("click", handler, true);
            }
            else if ([topRow[2], middleRow[1], bottomRow[0]].every(elem => checkX(elem) == true) && finishedGame == false) {
                console.log('Player 2 wins, diag 2')
                document.addEventListener("click", handler, true);
            }
        };
        let endTheGame = (function () {
            let allSquares = document.querySelectorAll('#ghost div');
            allSquares.forEach(square => {
                square.addEventListener('click', function triggFuncs() {
                    topHorizontalOccurences();
                    middleHorizontalOccurences();
                    bottomHorizontalOccurences();
                    leftVerticalOccurences();
                    middleVerticalOccurences();
                    rightVerticalOccurences()
                    left2RightDiagonal();
                    right2LeftDiagonal();
                    return
                })
            })
        }())
    }
}
game.initialize();
game.finalize()
game.players.buildPlayerNameRows()