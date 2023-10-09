function clickFunction() {

    let ourDiv = document.querySelector("#background-changer");

    ourDiv.style.backgroundColor = "tan";
}

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    //If else sats
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = timeString;
} setInterval(updateClock, 1000); updateClock();
// Uppdatera klockan direkt vid sidans laddning


