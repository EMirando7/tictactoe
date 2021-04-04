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
            boardXs.forEach(element => {
                element.addEventListener('click', () => {
                    element.innerHTML = "X"
                })
            });
        })()
    }),
    players: function (player) {
        //return what what is to be used in the newly created object
        return { player }
    }
}