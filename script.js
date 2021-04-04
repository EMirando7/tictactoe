const game = {
    //invoke initalize
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
        })()
    }),
    players: function (player) {
        //return what what is to be used in the newly created object
        return { player }
    }
}