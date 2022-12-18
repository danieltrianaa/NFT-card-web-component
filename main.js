import {NFTCard} from "./components/NFTCard.js"
import {ToggleButton} from "./components/ToggleButton.js"

window.customElements.define("toggle-button", ToggleButton);
window.customElements.define("nft-card", NFTCard);

const hiddeShowSwitch = document.querySelector("toggle-button");
hiddeShowSwitch.addEventListener("change", () => {
    const styleSheet = document.styleSheets[0];
    if (hiddeShowSwitch.checked) {
        styleSheet.insertRule("nft-card {--img-filter: blur(15px); --eye-opacity: 1}", 0);
    } else {
        styleSheet.deleteRule(0);
    }
});