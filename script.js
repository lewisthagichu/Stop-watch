// Get the start/stop and reset buttons from the DOM
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

// Variables to keep track of the time
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables to store the leading zeros
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for setInterval and timer status
let timerInterval = null;
let timerStatus = "stopped";

/**
 * This function is called every second by setInterval to update the time display.
 * It increments the seconds, minutes, and hours variables, and formats the time with leading zeros.
 */
function stopWatch() {
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    // Update the timer display with the formatted time
    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

/**
 * This function is called when the start/stop button is clicked.
 * It starts or stops the timer, and updates the button text and icon accordingly.
 */
startStopBtn.addEventListener('click', function () {
    if (timerStatus == 'stopped') {
        // Start the timer with a 1 second interval, and update the button text and icon
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    } else {
        // Stop the timer and update the button text and icon
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
});

/**
 * This function is called when the reset button is clicked.
 * It stops the timer, resets the time variables, and updates the timer display and button text and icon.
 */
resetBtn.addEventListener('click', function() {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerText = "00:00:00";
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
});
