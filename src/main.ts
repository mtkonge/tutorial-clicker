import "./style.css";

function main() {
    let tutorialPoints = 0;
    const prevButton =
        document.querySelector<HTMLButtonElement>("#prev-button")!;
    const nextButton =
        document.querySelector<HTMLButtonElement>("#next-button")!;
    nextButton.addEventListener("click", () => {
        tutorialPoints++;
    });
}

window.addEventListener("DOMContentLoaded", () => {
    main();
});
