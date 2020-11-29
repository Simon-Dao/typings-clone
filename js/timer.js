const typingBar = document.querySelector('#typing-bar');

let timeStart = 0;
let timeEnd = 0;
let isStarting = false;
let isEnded = false;

function prepareTimer() {
    
    typingBar.addEventListener('keydown', () => {
        
        if(!isStarting) {
            isStarting = true;
            startTimer();
        } else if(keyCount == textLength-1 && !isEnded) {
            isEnded = true;
            endTimer();
        }
    });
}
function startTimer() {
    
    let date = new Date(); 
    timeStart = date.getTime()/1000;

}

function endTimer() {
    let date = new Date(); 
    timeEnd = date.getTime()/1000;

    const timeBetween = Math.abs(timeEnd - timeStart);

    wpm.innerHTML = calculateWPM(timeBetween) +' /'; 
    acc.innerHTML = calculateACC();   
}

function calculateWPM(time) {

    //convert time(seconds) to minutes
    time = time/60;

    //actual speed the user typed
    const grossWPM = (textLength/5)/time;

    //adjusted speed the user typed with errors
    const netWPM = Math.floor(grossWPM - (errorCount/time));

    return netWPM < 0 ? 0 : netWPM;
}

function calculateACC() {
    
    const accuracy = 1-(errorCount/textLength);

    return accuracy < 0 ? 0 : accuracy.toFixed(2);
}