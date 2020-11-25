function setKeyHandlers() {

    //when any key except for backspace is pressed
    textInput.addEventListener('keypress', (e) => {
        
        const inputKey = String.fromCharCode(e.keyCode);
        const currentLetter = document.getElementById('letter-'+keyCount);
        
        handleLetters(inputKey, currentLetter);
        handleSpaces(inputKey, currentLetter);
        
        //makes sure that key count does not go over the amount of characters in the sample text
        keyCount = keyCount < textDisplay.children.length-1 ? keyCount+1 : keyCount; 
    });
}

function handleLetters(inputKey, currentLetter) {
    const isOverTextLength = keyCount < textDisplay.children.length;

    if(inputKey == currentLetter.innerText && isOverTextLength) {
        currentLetter.style.color = 'green';
    } else {
        currentLetter.style.color = 'red';
        errorCount++;
    }
}

function handleSpaces(inputKey, currentLetter) {

    if(inputKey == ' ' && currentLetter.innerText == ' ') {
        textInput.value = '';
        checkPoint = keyCount+1;
    }
}