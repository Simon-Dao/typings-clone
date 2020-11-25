function reset() {

    keyCount = 0;
    checkPoint = 0;
    isStarting = false;
    errorCount = 0;

    generateText();

    //clear input field
    textInput.value = '';
}

function generateText() {

    textDisplay.innerHTML = '';
    wpm.innerHTML = 'XX/';
    acc.innerHTML = ' XX';

    //generate text        
    let index = 0;
    let paragraph = getParagraph();
    textLength = paragraph.length;

    for (let j = 0; j < paragraph.length; j++) {
        let char = document.createElement('span');
        char.innerHTML = paragraph.charAt(j);
        char.id = 'letter-' + index;
        textDisplay.appendChild(char);
            
        index++;
    }
}

function getParagraph() {
    //return paragraphList[getRandomNumberBetween(0, paragraphList.length)];
    return "hello my name is simon";
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * ((max - 1) - min + 1) + min);
}