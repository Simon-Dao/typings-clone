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

reset();
setButtonHandlers();
setKeyHandlers();
setBackSpaceHandler();