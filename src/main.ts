import "./style.css";

function getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function generateRandomId(name: string) {
    return name + Math.round(getRandomNumber(10000000, 99999999)).toString();
}

function regenerateTutorialContainerContent(
    tutorialContainer: HTMLDivElement,
    tutorialPoints: [number],
    tutorialPointsText: HTMLHeadingElement,
) {
    tutorialContainer.innerHTML = "";
    const text = document.createElement("p");
    const buttonsDiv = document.createElement("div");
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");
    text.innerHTML = `Welcome to tutorial clicker! Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Harum repellendus sed vero fugiat, pariatur laudantium tempora alias`;
    buttonsDiv.className = "tutorial-buttons-container";
    prevButton.innerHTML = "Previous";
    prevButton.id = "prev-button";
    prevButton.className = "tutorial-button";
    nextButton.innerHTML = "Next";
    nextButton.id = generateRandomId("next-button");
    nextButton.className = "tutorial-button";
    nextButton.addEventListener("click", () => {
        tutorialPoints[0]++;
        tutorialPointsText.innerHTML = tutorialPoints.toString();
        regenerateTutorialContainerContent(tutorialContainer, tutorialPoints, tutorialPointsText);
        const randomTop = getRandomNumber(10, window.innerHeight - 210);
        const randomLeft = getRandomNumber(10, window.innerWidth - 310);
        tutorialContainer.style.top = randomTop + "px";
        tutorialContainer.style.left = randomLeft + "px";
    });
    buttonsDiv.append(prevButton);
    buttonsDiv.append(nextButton);
    tutorialContainer.append(text);
    tutorialContainer.append(buttonsDiv);
}

function main() {
    document.addEventListener("keydown", (event) => {
        if (event.key == "Tab") {
            event.preventDefault();
        }
    });
    const tutorialContainer = document.querySelector<HTMLDivElement>("#tutorial-box")!;
    let tutorialPoints: [number] = [0];
    const tutorialPointsText = document.querySelector<HTMLHeadingElement>("#tutorial-points")!;
    regenerateTutorialContainerContent(tutorialContainer, tutorialPoints, tutorialPointsText);
}

main();
