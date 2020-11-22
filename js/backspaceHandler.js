function setBackSpaceHandler() {

    textInput.addEventListener('keydown', (e) => {
        const key = e.keyCode || e.charCode;       
        
        const spaceIsPressed = key == 8 || key == 46;
        const isOverTextLength = keyCount < textDisplay.children.length-1;
        const isOverCheckpoint = keyCount > checkPoint;

        if(spaceIsPressed && isOverTextLength && isOverCheckpoint) {
            keyCount = keyCount > 0 ? keyCount-1 : keyCount;
            let currentLetter = document.getElementById('letter-'+keyCount);
            currentLetter.style.color = 'whitesmoke';
        }
    }); 
}