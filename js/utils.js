function reset() {
    //remove all spans from text display
    textDisplay.innerHTML = '';

    keyCount = 0;
    checkPoint = 0;

    //clear input field
    textInput.value = '';

    let count = 0;

    //generate text
    for(let i = 0; i<wordCount; i++) {
        
        let word = generateWord();
        for(let j = 0; j<word.length; j++) {
            let char = document.createElement('span');
            char.innerHTML = word.charAt(j);
            char.id = 'letter-'+count;
            textDisplay.appendChild(char);
            
            count++;
        }
    }
}

function generateWord() {
    return 'hello ';
}