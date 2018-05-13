if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
} else {
    localStorage.clickcount = 1;
}
document.getElementById("test").innerHTML = "You have clicked the button " +
localStorage.clickcount + " time(s).";
