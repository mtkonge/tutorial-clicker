export class Tutorial {
    private stepCounter = 0;
    public currentStep = "";

    constructor(private steps: string[]) {
        this.currentStep = steps[0];
    }

    nextStep() {
        if (this.stepCounter === this.steps.length - 1) {
            this.currentStep = this.steps[0];
            this.stepCounter = 0;
            return;
        }
        this.stepCounter++;
        this.currentStep = this.steps[this.stepCounter];
    }
}
