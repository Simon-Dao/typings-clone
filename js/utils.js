function reset() {

    keyCount = 0;
    checkPoint = 0;
    isStarting = false;
    errorCount = 0;
    initKeyMap();

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
    return paragraphList[getRandomNumberBetween(0, paragraphList.length)];
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * ((max - 1) - min + 1) + min);
}

function initKeyMap() {
    let temp = alphebet.split('');
    
    keyMap = new Map();

    for (let i = 0; i < temp.length; i++) {
        keyMap[temp[i]] = 0;
    }

    //change color of all keys
    renderKeyboard();
}

function renderKeyboard() {

    keyContainer.innerHTML = '';

    for(let i = 0; i<alphebet.length; i++) {
        keyContainer.appendChild(makeKey(alphebet.charAt(i)));
    }
}

function makeKey(letter) {
    let key = document.createElement('div');
    key.className = 'key';
    key.id = 'key-'+letter;
    key.innerText = letter;
    key.style.color = 'black';
    key.style.width = '60px';
    key.style.height = '60px';
    key.style.backgroundColor = `rgb(${keyMap[letter]*70},${255 - keyMap[letter]*70},0)`;
    key.style.fontSize = '30px';

    return key;
}