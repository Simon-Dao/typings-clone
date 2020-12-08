const textInput = document.querySelector('#typing-bar');
const textDisplay = document.querySelector('#text');
const redoButton = document.querySelector('#redo-button');
const wordSwitchButton = document.querySelectorAll('#button');
const wpm = document.querySelector('#wpm');
const acc = document.querySelector('#acc');
const alphebet = 'abcdefghijklmnopqrstuvwxyz';
let keyMap;
let isEasyText = true;

//global variables
let textLength = textDisplay.children.length;
let letters = [];
let keyCount = 0;
let checkPoint = 0;
let count = 0;
let errorCount = 0;
let timesMapPressed = 0;

//calculate wpm and accuracy
reset();
setButtonHandlers();
listenForKeyBinds();
setKeyHandlers();
prepareTimer();
setBackSpaceHandler();
setkeyBoardElement();