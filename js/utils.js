function reset() {
    //remove all spans from text display
    textDisplay.innerHTML = '';

    keyCount = 0;
    checkPoint = 0;

    //clear input field
    textInput.value = '';

    let index = 0;

    //generate text
        
    let paragraph = getParagraph();


    for(let j = 0; j<paragraph.length; j++) {
        let char = document.createElement('span');
        char.innerHTML = paragraph.charAt(j);
        char.id = 'letter-'+index;
        textDisplay.appendChild(char);
        
        index++;
    }
}

function getParagraph() {
    return paragraphList[getRandomNumberBetween(0,paragraphList.length)];
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*((max-1)-min+1)+min);
}