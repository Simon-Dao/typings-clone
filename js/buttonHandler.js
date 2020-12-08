function setButtonHandlers() {
    
    redoButton.addEventListener('click', () => {
        reset();
    });

    wordSwitchButton.forEach((button)=> {
        button.addEventListener('click', () => {
            isEasyText = !isEasyText;
            reset();
        });
    });
}