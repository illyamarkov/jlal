const textElement = document.getElementById('scrolling-text');
let scrollingInterval;
let isMouseOver = false;
let isResetting = false; // Flag to track if text reset is in progress

function startScrollingText() {
    let text = "JL.AL";
    let propability = 3;
    let lastGeneratedText = "JL.AL";
    let phase = 0;

    function scrollText() {
        if (isMouseOver == true){
            let randomChar = '_';
            rnum = Math.floor(Math.random() * propability);
            if (rnum === 0) {
                randomChar = '-';
                rnum = Math.floor(Math.random() * propability);
                if (rnum === 0) {
                    randomChar = '.';
                    rnum = Math.floor(Math.random() * propability);
                    if (rnum === 0) {
                        randomChar = 'L';
                        rnum = Math.floor(Math.random() * propability);
                        if (rnum === 0) {
                            randomChar = 'J';
                        }
                    }
                }
            }
            lastGeneratedText = lastGeneratedText.slice(1) + randomChar;
            textElement.textContent = lastGeneratedText;
        }
        else {
            if (phase < text.length) {
                lastGeneratedText = lastGeneratedText.slice(1) + text[phase];
                textElement.textContent = lastGeneratedText;
                phase++;
                console.log("done");
            }
        }
    }

    textElement.addEventListener('mouseover', () => {
        console.log("found");
        clearInterval(scrollingInterval);
        scrollingInterval = setInterval(scrollText, 100);
        isMouseOver = true;
    });

    textElement.addEventListener('mouseout', () => {
        phase = 0;
        isMouseOver = false;
    });

    textElement.addEventListener('click', () => {
        if (!isMouseOver) {
            clearInterval(scrollingInterval);
            scrollingInterval = setInterval(scrollText, 100);
            isMouseOver = true;
        }
        else {
            phase = 0;
            isMouseOver = false;
        }
    });
}

startScrollingText();
