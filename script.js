let timer;
let seconds = 0;
let alertTime = 0;

function formatTime(sec) {
    let hrs = Math.floor(sec / 3600).toString().padStart(2, '0');
    let mins = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
    let secs = (sec % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            document.getElementById('time').innerText = formatTime(seconds);
            checkAlerts(seconds);
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    alertTime = 0;
    document.getElementById('time').innerText = "00:00:00";
    document.getElementById('alert').innerText = "No alerts yet.";
    document.getElementById('alertTime').value = "";
}

function setAlertTime() {
    let inputTime = parseInt(document.getElementById('alertTime').value);
    if (!isNaN(inputTime) && inputTime > 0) {
        alertTime = inputTime * 60; 
        document.getElementById('alert').innerText = `Alert set for ${inputTime} minutes.`;
    } else {
        alert("Please enter a valid number of minutes.");
    }
}

function checkAlerts(sec) {
    if (alertTime > 0 && sec % alertTime === 0) { 
        document.getElementById('alert').innerText = "Time's up! You've reached your set screen time limit.";
        alert("Time's up! You've reached your set screen time limit.");
    }
}


document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
document.getElementById('setAlertBtn').addEventListener('click', setAlertTime);
