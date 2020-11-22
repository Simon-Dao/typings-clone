function setButtonHandlers() {
    
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