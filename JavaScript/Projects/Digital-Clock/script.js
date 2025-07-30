//get DOM elements
const getClock = document.getElementById('time-display');
const getDate = document.getElementById('date-display');
const getAMPM = document.getElementById('ampm-display');

function updateClock(){
    let timeAndDate = new Date();

    getClock.textContent = timeAndDate.toLocaleTimeString();
    getDate.textContent = timeAndDate.toLocaleDateString();
    
    let amPmHandler = (timeAndDate.getHours());
    console.log(amPmHandler);

    if(amPmHandler >= 0 && amPmHandler < 12){
        getAMPM.innerHTML = "AM";
    }
    else if(amPmHandler >= 12){
        getAMPM.innerHTML = "PM";
    }
}

setInterval(updateClock, 1000);
