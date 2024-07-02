
// var timer = setInterval(myTimer,1000);
 var timer;


var sec = 0;
var min =0;

function myTimer(){
    ++sec;
    if(sec == 60){
        ++min;
        sec=0
    }
    document.querySelector("#t1").innerHTML = formtTime (min , sec);
      
}

function formtTime(minutes, seconds) {
    var formatMinutes = minutes < 10 ? '0' + minutes : minutes;
    var formatSeconds = seconds < 10 ? '0' + seconds : seconds;
    return formatMinutes + ':' + formatSeconds;
}

var start = document.querySelector('#demo');

function startTimer() {
    start.innerHTML= "continue";
    if (!timer) {
        timer = setInterval(myTimer, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}


function reset(){
    clearInterval(timer);
    timer = null;


    sec=0;
    min=0;

    document.querySelector("#t1").innerHTML = formtTime (min , sec);
    timer = setInterval(myTimer,1000);

}
 






