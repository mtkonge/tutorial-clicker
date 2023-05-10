import "./style.css";
import { Tutorial } from "./tutorial";

function getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function generateRandomId(name: string) {
    return name + Math.round(getRandomNumber(10000000, 99999999)).toString();
}

function createNextButton() {
    const nextButton = document.createElement("button");
    nextButton.innerHTML = "Next";
    nextButton.id = generateRandomId("next-button");
    nextButton.className = "tutorial-button";
    return nextButton;
}

function createPrevButton() {
    const prevButton = document.createElement("button");
    prevButton.innerHTML = "Previous";
    prevButton.id = "prev-button";
    prevButton.className = "tutorial-button";
    return prevButton;
}

function createButtonsDiv(prevButton: HTMLButtonElement, nextButton: HTMLButtonElement) {
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "tutorial-buttons-container";
    buttonsDiv.append(prevButton);
    buttonsDiv.append(nextButton);
    return buttonsDiv;
}

function createTextElement(currentTutorial: Tutorial) {
    const text = document.createElement("p");
    text.innerHTML = currentTutorial.currentStep;
    return text;
}

function moveTutorialContainerRandom(tutorialContainer: HTMLDivElement) {
    const randomTop = getRandomNumber(10, window.innerHeight - 210);
    const randomLeft = getRandomNumber(10, window.innerWidth - 310);
    tutorialContainer.style.top = randomTop + "px";
    tutorialContainer.style.left = randomLeft + "px";
}

function regenerateTutorialContainerContent(
    tutorialContainer: HTMLDivElement,
    tutorialPoints: [number],
    tutorialPointsText: HTMLHeadingElement,
    currentTutorial: Tutorial,
) {
    tutorialContainer.innerHTML = "";
    const text = createTextElement(currentTutorial);
    const prevButton = createPrevButton();
    const nextButton = createNextButton();
    const buttonsDiv = createButtonsDiv(prevButton, nextButton);
    nextButton.addEventListener("click", () => {
        tutorialPoints[0]++;
        tutorialPointsText.innerHTML = tutorialPoints.toString();
        currentTutorial.nextStep();
        regenerateTutorialContainerContent(
            tutorialContainer,
            tutorialPoints,
            tutorialPointsText,
            currentTutorial,
        );
        moveTutorialContainerRandom(tutorialContainer);
    });
    tutorialContainer.append(text);
    tutorialContainer.append(buttonsDiv);
}

function disableTapping() {
    document.addEventListener("keydown", (event) => {
        if (event.key == "Tab") {
            event.preventDefault();
        }
    });
}

function main() {
    disableTapping();
    const tutorialContainer = document.querySelector<HTMLDivElement>("#tutorial-box")!;
    let tutorialPoints: [number] = [0];
    const tutorialPointsText = document.querySelector<HTMLHeadingElement>("#tutorial-points")!;
    const tutorial = new Tutorial(["Welcome to tutorial clicker!"]);
    regenerateTutorialContainerContent(
        tutorialContainer,
        tutorialPoints,
        tutorialPointsText,
        tutorial,
    );
}

main();
