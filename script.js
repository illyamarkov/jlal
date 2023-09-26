const textElement = document.getElementById('scrolling-text');
let scrollingInterval;

function startScrollingText() {
    let text = "JL.AL";

    function scrollText() {
        const randomChar = ['J', 'L', 'A', '-', '.', '_'][Math.floor(Math.random() * 6)];
        text = text.slice(1) + randomChar;
        textElement.textContent = text;
    }

    textElement.addEventListener('mouseover', () => {
        clearInterval(scrollingInterval);
        scrollingInterval = setInterval(scrollText, 100);
    });

    textElement.addEventListener('mouseout', () => {
        console.log("Hello");
        clearInterval(scrollingInterval);
        textElement.textContent = "JL.AL";
        text = "JL.AL";
    });

    // For mobile devices, click event starts scrolling for 5 seconds
    textElement.addEventListener('click', () => {
        clearInterval(scrollingInterval);
        scrollingInterval = setInterval(scrollText, 100);
    });
}

startScrollingText();
