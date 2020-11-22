const textInput = document.querySelector('#typing-bar');
const textDisplay = document.querySelector('#text');
const redoButton = document.querySelector('#redo-button');
const wordCountButtons = document.querySelectorAll('.word-count-button');
let letters = [];
let keyCount = 0;
let wordCount = 25;
let checkPoint = 0;
let count = 0;
//todo make a random word generator
//calculate wpm and accuracy

function setKeyInputEvent() {

    //when any key except for backspace is pressed
    textInput.addEventListener('keypress', (e) => {
        
        const inputKey = String.fromCharCode(e.keyCode);
        const currentLetter = document.getElementById('letter-'+keyCount);
        
        handleLetters(inputKey, currentLetter);
        handleSpaces(inputKey, currentLetter);
        
        //makes sure that key count does not go over the amount of characters in the sample text
        keyCount = keyCount < textDisplay.children.length-1 ? keyCount+1 : keyCount; 
    });
    
    //backspace event
    textInput.addEventListener('keydown', (e) => {
        const key = e.keyCode || e.charCode;       
        
        const spaceIsPressed = key == 8 || key == 46;
        const isOverTextLength = keyCount < textDisplay.children.length-1;

        if(spaceIsPressed && isOverTextLength) {
            keyCount = keyCount > 0 ? keyCount-1 : keyCount;
            let currentLetter = document.getElementById('letter-'+keyCount);
            currentLetter.style.color = 'whitesmoke';
        }
    }); 

    redoButton.addEventListener('click', () => {
        reset();
    });

    wordCountButtons.forEach((button)=> {
        button.addEventListener('click', () => {

            wordCount = parseInt(button.value);
            reset();
        });
    });
}
function handleSpaces(inputKey, currentLetter) {

    if(inputKey == ' ' && currentLetter.innerText == ' ') {
        textInput.value = '';
        checkPoint = keyCount+1;
    }
}

function handleLetters(inputKey, currentLetter) {
    const isOverTextLength = keyCount < textDisplay.children.length;

    if(inputKey == currentLetter.innerText && isOverTextLength)
        currentLetter.style.color = 'green';
    else 
        currentLetter.style.color = 'red';
}

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

reset();
setKeyInputEvent();