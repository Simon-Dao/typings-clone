const keyContainer = document.querySelector('#keyboard-container');
const errorMapButton = document.querySelector('#error-button');

function setkeyBoardElement() {
    initKeyMap();

    textInput.addEventListener('keypress', (e) => {
       // let key = String.fromCharCode(e.keyCode).toLowerCase();
        
        //console.log(keyMap[key]);

       // keyMap[key] = keyMap[key]+1;
    });
}