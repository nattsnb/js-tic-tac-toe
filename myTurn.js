function myTurn(turn, firstPlayer, secondPlayer) {
    if (turn === 1) {
        firstPlayer.innerHTML = "your turn!";
        secondPlayer.innerHTML = "";
    } else {
        secondPlayer.innerHTML = "your turn!";
        firstPlayer.innerHTML = "";
    }
}

function winner(outcome, firstPlayer, secondPlayer, drawLine) {
    if (outcome === 1) {
        console.log("one really won");
        firstPlayer.innerHTML = "won!";
        firstPlayer.style = "color: red; font-size: 1.5em";
        setTimeout(function() {
            location.reload();
        }, 3000);
        throw new Error();
    }
    if (outcome === 2) {
        secondPlayer.innerHTML = "won!";
        secondPlayer.style = "color: red; font-size: 1.5em";
        setTimeout(function() {
            location.reload();
        }, 3000);
        throw new Error();
    }
    if (outcome === 3) {
        drawLine.innerHTML = "draw!";
        secondPlayer.innerHTML = "";
        firstPlayer.innerHTML = "";
        drawLine.style = "color: red; font-size: 1.5em";
        setTimeout(function() {
            location.reload();
        }, 3000);
        throw new Error();
    }
}

export {myTurn, winner};
