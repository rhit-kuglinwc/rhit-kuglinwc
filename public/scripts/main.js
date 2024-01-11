var rhit = rhit || {};


rhit.PageController = class {
    static State = {
        RED_TO_BLUE: 0,
        RUSTIC_OCEAN: 1,
        WINTER_WONDERLAND: 2
    }

    constructor() {
        // this.state = parseInt(document.documentElement.style.getPropertyValue('--theme'));
        this.state = rhit.PageController.State.RED_TO_BLUE

        this.redToBlue = document.querySelector("#red-to-blue").onclick = (event) => {
            this.state = rhit.PageController.State.RED_TO_BLUE;
            this.updateView();
        }

        this.redToBlue = document.querySelector("#moonlight-mint").onclick = (event) => {
            this.state = rhit.PageController.State.RUSTIC_OCEAN;
            this.updateView();
        }

        this.redToBlue = document.querySelector("#luscious-green").onclick = (event) => {
            this.state = rhit.PageController.State.WINTER_WONDERLAND;
            this.updateView();
        }
        this.updateView();

    }

    updateView() {
        if (this.state == 0) { // If red and blue theme
            document.documentElement.style.setProperty('--light-color-1', '#E0BAFF');
            document.documentElement.style.setProperty('--light-color-2', '#FFF8BA');
            document.documentElement.style.setProperty('--dark-color-1', '#622396');
            document.documentElement.style.setProperty('--dark-color-2', '#968B23');
            document.documentElement.style.setProperty('--pop-out-color', '#232F96');
            document.documentElement.style.setProperty('--background', 'repeating-linear-gradient(90deg, hsla(64, 83%, 54%, 0.05) 0px, hsla(64, 83%, 54%, 0.05) 1px, transparent 1px, transparent 11px, hsla(64, 83%, 54%, 0.05) 11px, hsla(64, 83%, 54%, 0.05) 12px, transparent 12px, transparent 32px), repeating-linear-gradient(135deg, hsla(64, 83%, 54%, 0.05) 0px, hsla(64, 83%, 54%, 0.05) 1px, transparent 1px, transparent 11px, hsla(64, 83%, 54%, 0.05) 11px, hsla(64, 83%, 54%, 0.05) 12px, transparent 12px, transparent 32px), repeating-linear-gradient(45deg, hsla(64, 83%, 54%, 0.05) 0px, hsla(64, 83%, 54%, 0.05) 1px, transparent 1px, transparent 11px, hsla(64, 83%, 54%, 0.05) 11px, hsla(64, 83%, 54%, 0.05) 12px, transparent 12px, transparent 32px), repeating-linear-gradient(180deg, hsla(64, 83%, 54%, 0.05) 0px, hsla(64, 83%, 54%, 0.05) 1px, transparent 1px, transparent 11px, hsla(64, 83%, 54%, 0.05) 11px, hsla(64, 83%, 54%, 0.05) 12px, transparent 12px, transparent 32px), linear-gradient(135deg, rgba(158, 27, 27, 0.84), rgba(82, 77, 249, 0.57))');
        }

        if (this.state == 1) { // If rustic ocean theme
            document.documentElement.style.setProperty('--light-color-1', '#DAEBE3');
            document.documentElement.style.setProperty('--light-color-2', '#EADBD9');
            document.documentElement.style.setProperty('--dark-color-1', '#509674');
            document.documentElement.style.setProperty('--dark-color-2', '#AB726A');
            document.documentElement.style.setProperty('--pop-out-color', '#6B2F28');
            document.documentElement.style.setProperty('--background', 'radial-gradient(circle at top center, rgb(235, 235, 235) 0%, rgb(235, 235, 235) 10%,rgb(229, 229, 229) 10%, rgb(229, 229, 229) 19%,rgb(222, 222, 222) 19%, rgb(222, 222, 222) 22%,rgb(216, 216, 216) 22%, rgb(216, 216, 216) 24%,rgb(209, 209, 209) 24%, rgb(209, 209, 209) 63%,rgb(203, 203, 203) 63%, rgb(203, 203, 203) 75%,rgb(196, 196, 196) 75%, rgb(196, 196, 196) 100%)');
        }

        if (this.state == 2) { // If luscios green theme
            document.documentElement.style.setProperty('--light-color-1', '#576E5E');
            document.documentElement.style.setProperty('--light-color-2', '#5EAE77');
            document.documentElement.style.setProperty('--dark-color-1', '#584D4D');
            document.documentElement.style.setProperty('--dark-color-2', '#27332B');
            document.documentElement.style.setProperty('--pop-out-color', '#AD5F5E');
            document.documentElement.style.setProperty('--background', 'repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 19px,transparent 19px, transparent 38px,rgba(0,0,0,0.06) 38px, rgba(0,0,0,0.06) 57px,rgba(0,0,0,0.25) 57px, rgba(0,0,0,0.25) 76px,rgba(0,0,0,0.12) 76px, rgba(0,0,0,0.12) 95px,rgba(0,0,0,0.03) 95px, rgba(0,0,0,0.03) 114px,rgba(0,0,0,0.26) 114px, rgba(0,0,0,0.26) 133px,rgba(0,0,0,0.23) 133px, rgba(0,0,0,0.23) 152px,transparent 152px, transparent 171px,rgba(0,0,0,0.25) 171px, rgba(0,0,0,0.25) 190px,transparent 190px, transparent 209px,rgba(0,0,0,0.03) 209px, rgba(0,0,0,0.03) 228px,rgba(0,0,0,0.23) 228px, rgba(0,0,0,0.23) 247px,rgba(0,0,0,0.03) 247px, rgba(0,0,0,0.03) 266px),repeating-linear-gradient(135deg, transparent 0px, transparent 3px,rgba(0,0,0,0.09) 3px, rgba(0,0,0,0.09) 6px,rgba(0,0,0,0.03) 6px, rgba(0,0,0,0.03) 9px,rgba(0,0,0,0.09) 9px, rgba(0,0,0,0.09) 12px,rgba(0,0,0,0.09) 12px, rgba(0,0,0,0.09) 15px,rgba(0,0,0,0.06) 15px, rgba(0,0,0,0.06) 18px,rgba(0,0,0,0.01) 18px, rgba(0,0,0,0.01) 21px,rgba(0,0,0,0.02) 21px, rgba(0,0,0,0.02) 24px,transparent 24px, transparent 27px,rgba(0,0,0,0.02) 27px, rgba(0,0,0,0.02) 30px,transparent 30px, transparent 33px,rgba(0,0,0,0.02) 33px, rgba(0,0,0,0.02) 36px,rgba(0,0,0,0.06) 36px, rgba(0,0,0,0.06) 39px,rgba(0,0,0,0.07) 39px, rgba(0,0,0,0.07) 42px,rgba(0,0,0,0.1) 42px, rgba(0,0,0,0.1) 45px,rgba(0,0,0,0.01) 45px, rgba(0,0,0,0.01) 48px,rgba(0,0,0,0.01) 48px, rgba(0,0,0,0.01) 51px,rgba(0,0,0,0.1) 51px, rgba(0,0,0,0.1) 54px),repeating-linear-gradient(90deg, rgba(0,0,0,0.11) 0px, rgba(0,0,0,0.11) 19px,transparent 19px, transparent 38px,rgba(0,0,0,0.16) 38px, rgba(0,0,0,0.16) 57px,rgba(0,0,0,0.17) 57px, rgba(0,0,0,0.17) 76px,rgba(0,0,0,0.29) 76px, rgba(0,0,0,0.29) 95px,rgba(0,0,0,0.26) 95px, rgba(0,0,0,0.26) 114px,rgba(0,0,0,0.28) 114px, rgba(0,0,0,0.28) 133px,rgba(0,0,0,0.22) 133px, rgba(0,0,0,0.22) 152px,transparent 152px, transparent 171px,rgba(0,0,0,0.19) 171px, rgba(0,0,0,0.19) 190px,transparent 190px, transparent 209px,rgba(0,0,0,0.29) 209px, rgba(0,0,0,0.29) 228px,rgba(0,0,0,0.29) 228px, rgba(0,0,0,0.29) 247px),repeating-linear-gradient(0deg, rgba(0,0,0,0.29) 0px, rgba(0,0,0,0.29) 19px,transparent 19px, transparent 38px,rgba(0,0,0,0.2) 38px, rgba(0,0,0,0.2) 57px,rgba(0,0,0,0.03) 57px, rgba(0,0,0,0.03) 76px,rgba(0,0,0,0.26) 76px, rgba(0,0,0,0.26) 95px,rgba(0,0,0,0.06) 95px, rgba(0,0,0,0.06) 114px,rgba(0,0,0,0.29) 114px, rgba(0,0,0,0.29) 133px,rgba(0,0,0,0.19) 133px, rgba(0,0,0,0.19) 152px,transparent 152px, transparent 171px,rgba(0,0,0,0.11) 171px, rgba(0,0,0,0.11) 190px,transparent 190px, transparent 209px,rgba(0,0,0,0.1) 209px, rgba(0,0,0,0.1) 228px,rgba(0,0,0,0.04) 228px, rgba(0,0,0,0.04) 247px),linear-gradient(0deg, rgb(4,6,5),rgb(3,111,42))');
        }
        // document.documentElement.style.setProperty('--theme', this.state);
    }
}

rhit.main = function () {
    console.log("Ready");
    new rhit.PageController();
};

rhit.main();