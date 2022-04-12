function dice() {
    for (var n = 0; n < 5; n++) {
        var pl1 = Math.floor(Math.random() * 6) + 1;
    }
    for (var n = 0; n < 5; n++) {
        var pl2 = Math.floor(Math.random() * 6) + 1;
    }

    if (pl1 > pl2) {
        document.querySelector("h1").textContent = "🚩Player 1 Wins";
    } else if (pl1 < pl2) {
        document.querySelector("h1").textContent = "Player 2 Wins!🚩";
    } else if (pl1 === pl2) {
        document.querySelector("h1").textContent = "Draw!";
    }

    // Dice One
    if (pl1 === 1) {
        document.querySelector("#p1 .centro").style.visibility = "visible";
    }
    if (pl1 === 2) {
        document.querySelector("#p1 .sx_bot").style.visibility = "visible";
        document.querySelector("#p1 .dx_top").style.visibility = "visible";
    }
    if (pl1 === 3) {
        document.querySelector("#p1 .centro").style.visibility = "visible";
        document.querySelector("#p1 .sx_bot").style.visibility = "visible";
        document.querySelector("#p1 .dx_top").style.visibility = "visible";
    }
    if (pl1 === 4) {
        document.querySelector("#p1 .sx_bot").style.visibility = "visible";
        document.querySelector("#p1 .sx_top").style.visibility = "visible";
        document.querySelector("#p1 .dx_top").style.visibility = "visible";
        document.querySelector("#p1 .dx_bot").style.visibility = "visible";
    }
    if (pl1 === 5) {
        document.querySelector("#p1 .centro").style.visibility = "visible";
        document.querySelector("#p1 .sx_bot").style.visibility = "visible";
        document.querySelector("#p1 .sx_top").style.visibility = "visible";
        document.querySelector("#p1 .dx_top").style.visibility = "visible";
        document.querySelector("#p1 .dx_bot").style.visibility = "visible";
    }
    if (pl1 === 6) {
        document.querySelector("#p1 .sx_bot").style.visibility = "visible";
        document.querySelector("#p1 .sx_top").style.visibility = "visible";
        document.querySelector("#p1 .dx_top").style.visibility = "visible";
        document.querySelector("#p1 .dx_bot").style.visibility = "visible";
        document.querySelector("#p1 .sx_md").style.visibility = "visible";
        document.querySelector("#p1 .dx_md").style.visibility = "visible";
    }

    // Dice Two
    if (pl2 === 1) {
        document.querySelector("#p2 .centro").style.visibility = "visible";
    }
    if (pl2 === 2) {
        document.querySelector("#p2 .sx_bot").style.visibility = "visible";
        document.querySelector("#p2 .dx_top").style.visibility = "visible";
    }
    if (pl2 === 3) {
        document.querySelector("#p2 .centro").style.visibility = "visible";
        document.querySelector("#p2 .sx_bot").style.visibility = "visible";
        document.querySelector("#p2 .dx_top").style.visibility = "visible";
    }
    if (pl2 === 4) {
        document.querySelector("#p2 .sx_bot").style.visibility = "visible";
        document.querySelector("#p2 .sx_top").style.visibility = "visible";
        document.querySelector("#p2 .dx_top").style.visibility = "visible";
        document.querySelector("#p2 .dx_bot").style.visibility = "visible";
    }
    if (pl2 === 5) {
        document.querySelector("#p2 .centro").style.visibility = "visible";
        document.querySelector("#p2 .sx_bot").style.visibility = "visible";
        document.querySelector("#p2 .sx_top").style.visibility = "visible";
        document.querySelector("#p2 .dx_top").style.visibility = "visible";
        document.querySelector("#p2 .dx_bot").style.visibility = "visible";
    }
    if (pl2 === 6) {
        document.querySelector("#p2 .sx_bot").style.visibility = "visible";
        document.querySelector("#p2 .sx_top").style.visibility = "visible";
        document.querySelector("#p2 .dx_top").style.visibility = "visible";
        document.querySelector("#p2 .dx_bot").style.visibility = "visible";
        document.querySelector("#p2 .sx_md").style.visibility = "visible";
        document.querySelector("#p2 .dx_md").style.visibility = "visible";
    }
}