const textInput = document.querySelector('#typing-bar');
const textDisplay = document.querySelector('#text');
const redoButton = document.querySelector('#redo-button');
const wordCountButtons = document.querySelectorAll('.word-count-button');
const wpm = document.querySelector('#wpm');
const acc = document.querySelector('#acc');

//global variables
let textLength = textDisplay.children.length;
let letters = [];
let keyCount = 0;
let checkPoint = 0;
let count = 0;
let errorCount = 0;

//calculate wpm and accuracy
reset();
setButtonHandlers();
setKeyHandlers();
prepareTimer();
setBackSpaceHandler();