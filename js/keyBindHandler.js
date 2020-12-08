let ctrl = false;
let backspace = false;

function listenForKeyBinds() {

    textInput.addEventListener("keyup", (e) => {

        if (e.ctrlKey && e.which == 8) {
            makeWordWhite();
            keyCount -= keyCount - checkPoint;
        } 


    });
}

function makeWordWhite() {
    console.log(`keyCount ${keyCount} checkpoint ${checkPoint}`)

    for(let i = keyCount; i>=checkPoint; i--) {
        document.querySelector('#letter-'+i).style.color = 'whitesmoke';
    }
}