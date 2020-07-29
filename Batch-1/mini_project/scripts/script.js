console.log("inside scripts#");


var myTimer = document.getElementById("timer");
let start = document.getElementById('startBtn'),
    stop = document.getElementById('stopBtn'),
    clear = document.getElementById('clearBtn');

let seconds = 0, minutes = 0, hours = 0,t;


function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    myTimer.innerText = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    startStopwatch();
}
function startStopwatch() {
    t = setTimeout(add, 1000);
}
startStopwatch();

function stopStopwatch(){
    clearTimeout(t);
}

function clearStopwatch() {
    myTimer.innerText = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}