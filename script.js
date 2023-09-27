const textElement = document.getElementById('scrolling-text');
let scrollingInterval;
let isMouseOver = false;
let isResetting = false; // Flag to track if text reset is in progress

function startScrollingText() {
    let text = "JL.AL";
    let propability = 3;
    let lastGeneratedText = "JL.AL";

    function scrollText() {
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

    function resetText() {
        isResetting = true; // Set the flag to indicate resetting
        clearInterval(scrollingInterval);
        const targetText = "JL.AL";
        let i = 0;
        const resetInterval = setInterval(() => {
            if (i < targetText.length) {
                lastGeneratedText = lastGeneratedText.slice(1) + targetText[i];
                textElement.textContent = lastGeneratedText;
                i++;
            } else {
                clearInterval(resetInterval);
                isResetting = false; // Reset the flag when reset is complete
            }
        }, 100);
    }

    textElement.addEventListener('mouseover', () => {
        if (!isMouseOver) {
            clearInterval(scrollingInterval);
            if (!isResetting) { // Check if not currently resetting
                scrollingInterval = setInterval(scrollText, 100);
                isMouseOver = true;
            }
        }
    });

    textElement.addEventListener('mouseout', () => {
        if (!isResetting) { // Check if not currently resetting
            resetText();
            isMouseOver = false;
        }
    });

    textElement.addEventListener('click', () => {
        if (!isMouseOver) {
            clearInterval(scrollingInterval);
            if (!isResetting) { // Check if not currently resetting
                scrollingInterval = setInterval(scrollText, 100);
                isMouseOver = true;
            }
        }
    });
}

startScrollingText();
