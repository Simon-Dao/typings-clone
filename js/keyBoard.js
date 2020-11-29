const keyContainer = document.querySelector('#keyboard-container');
const errorMapButton = document.querySelector('#error-button');

function setkeyBoardElement() {
    initKeyMap();

    errorMapButton.addEventListener('click', (event) => {
        timesMapPressed++;

        if(timesMapPressed % 2 == 0) {
        keyContainer.innerHTML = '';
        errorMapButton.innerText = 'show error map';
        }
        else {
            errorMapButton.innerText = 'close';
            renderKeyboard();
        }
    });

    textInput.addEventListener('keypress', (e) => {
       // let key = String.fromCharCode(e.keyCode).toLowerCase();
        
        //console.log(keyMap[key]);

       // keyMap[key] = keyMap[key]+1;
    });
}