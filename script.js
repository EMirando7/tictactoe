const game = {
    //invoke initalize
    initialize: (function () {
        //hides the X from board
        const hideX = (function () {
            let boardXs = document.querySelectorAll('#ghost > div');
            for (let i = 0; i < boardXs.length; i++) {
                boardXs[i].innerHTML = " ";
            }
            //object shorthand
            return { boardXs };
        })();
        //hears for clicks, changes to depending on which player clicks
        (function toggleSymbol() {
            console.log(hideX)
        })()
    }),
    players: function (player) {
        //return what what is to be used in the newly created object
        return { player }
    }
}