import "./style.css";
function getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function main() {
    const tutorialContainer =
        document.querySelector<HTMLDivElement>("#tutorial-box")!;
    let tutorialPoints = 0;
    const prevButton =
        document.querySelector<HTMLButtonElement>("#prev-button")!;
    const nextButton =
        document.querySelector<HTMLButtonElement>("#next-button")!;
    nextButton.addEventListener("click", () => {
        tutorialPoints++;
        const randomTop = getRandomNumber(0, window.innerWidth / 2);
        const randomLeft = getRandomNumber(0, window.innerHeight / 2);
        tutorialContainer.style.top = randomTop + "px";
        tutorialContainer.style.left = randomLeft + "px";
    });
}

window.addEventListener("DOMContentLoaded", () => {
    main();
});
