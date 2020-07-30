
var counter = 0;
var timeleft ;
let t;
var myTimer = document.getElementById("timer");

function showStopwatch(){

    var x = document.getElementById("timerDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    timeleft = prompt("Enter timer in seconds");
    myTimer.innerText= convertSeconds(timeleft);
}

function convertSeconds(userSeconds){

  let hour, min, sec;
  if(userSeconds >= 3600){
    hour = Math.floor(userSeconds/3600);
    userSeconds%=3600;
  } else {
    hour = '0';
  }

  if(userSeconds >=60 && userSeconds < 3600){
    min =  Math.floor(userSeconds/60);
  } else {
    min='0';
  }
    
  userSeconds%=60;
  sec = userSeconds%60;

  return addZeroPadding(hour) + 'h:' + addZeroPadding(min) + 'm:' + addZeroPadding(sec) + 's';
}

function addZeroPadding(num){
  return (num > 9 ? num : '0' + num);
}

function counterDown(){
  counter++;
  myTimer.innerHTML = convertSeconds(timeleft-counter);
  startStopwatch();
}

function startStopwatch(){
    t = setTimeout(counterDown,1000);
}
startStopwatch();

function stopStopwatch(){
  clearTimeout(t);
}

function clearStopwatch() {
  stopStopwatch();
  myTimer.innerText = "00h:00m:00s";
}