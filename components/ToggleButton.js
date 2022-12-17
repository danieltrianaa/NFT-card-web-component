const HTML = `
    <p id="leftWord">Show</p>
    <div>
        <input id="toggle" class="checkbox" type="checkbox">
        <label class="toggle__bar" for="toggle"></label>
    </div>
    <p id="rightWord">Hide</p>
`;

const CSS = `
<style>
    :host {
        --bar-width: 44px;
        --bar-height: 24px;
        --circle-dimensions: 14px;
        --circle-left-margin-adjustment: 6px;
        --translate-x-adjustment: 18px;
        --transition-duration: 250ms;
        --text-display: block;
    
        --bar-bg: black;
        --bar-bg-checked: white;

        --circle-bg: white;
        --circle-bg-checked: black;

        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        gap: 12px;
    }

    :host p {
        display: var(--text-display);
    }

    .toggle__bar {
        will-change: background;

        position: relative;
        display: inline-block;
        width: var(--bar-width);
        height: var(--bar-height);
        border-radius: 999px;
        background: var(--bar-bg);
        cursor: pointer;

        transition-property: background;
        transition-duration: var(--transition-duration);
    }

    .toggle__bar::after {
        will-change: transform;

        content: "";
        position: absolute;
        top: 50%;
        left: var(--circle-left-margin-adjustment);
        transform: translate(0, -50%);

        width: var(--circle-dimensions);
        height: var(--circle-dimensions);
        border-radius: 999px;
        
        background: var(--circle-bg);
        transition-property: transform, background;
        transition-duration: var(--transition-duration);
    }

    .checkbox {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
	    display: none;
    }

    .checkbox:checked + .toggle__bar {
        background: var(--bar-bg-checked);
    }

    .checkbox:checked + .toggle__bar::after {
        transform: translate(var(--translate-x-adjustment), -50%);
        background: var(--circle-bg-checked);
    }
</style>
`;

const template = document.createElement("template");
template.innerHTML = CSS + HTML;

export class ToggleButton extends HTMLElement {
    static get observedAttributes() {
        return ["left-word", "right-word", "checked"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const isTextDisplayNone = this.textDisplay === "none";
        if (!isTextDisplayNone) {
            if (!this.hasAttribute("left-word")) {
                this.setAttribute("left-word", "On");
            }

            if (!this.hasAttribute("right-word")) {
                this.setAttribute("right-word", "Off");
            }

            const leftWord = this.shadowRoot.querySelector("#leftWord");
            leftWord.textContent = this.leftWord;
    
            const rightWord = this.shadowRoot.querySelector("#rightWord");
            rightWord.textContent = this.rightWord;
        }

        this._upgradeProperty('left-word');
        this._upgradeProperty('right-word');
        this._upgradeProperty('checked');

        const inputCheckbox = this.shadowRoot.querySelector("#toggle");
        inputCheckbox.addEventListener("change", this._onChecked.bind(this));
    }

    _upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            let value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }

    _onChecked() {
        this.checked = !this.checked;

        this.dispatchEvent(new CustomEvent('change', {
            detail: {
                checked: this.checked,
            },

            bubbles: true,
        }));
    }

    get textDisplay() {
        const leftWord = this.shadowRoot.querySelector("#leftWord");
        const leftWordDisplay = getComputedStyle(leftWord).display;

        return leftWordDisplay
    }

    set leftWord(value) {
        if (typeof value === 'string' || value instanceof String) {
            this.setAttribute("left-word", value);
        }
    } get leftWord() {
        return this.getAttribute("left-word");
    }

    set rightWord(value) {
        if (typeof value === 'string' || value instanceof String) {
            this.setAttribute("right-word", value);
        }
    } get rightWord() {
        return this.getAttribute("right-word");
    }

    set checked(value) {
        const isChecked = Boolean(value);

        if (isChecked) this.setAttribute('checked', '');
        else this.removeAttribute('checked');
    } get checked() {
        return this.hasAttribute("checked")
    }

    disconnectedCallback() {
        const inputCheckbox = this.shadowRoot.querySelector("#toggle");
        inputCheckbox.removeEventListener('click', this._onChecked);
    }
    
    attributeChangedCallback(attrName) {
        switch (attrName) {
            case "left-word":
                const leftWord = this.shadowRoot.querySelector("#leftWord");
                leftWord.textContent = this.leftWord;
            break;

            case "right-word":
                const rightWord = this.shadowRoot.querySelector("#rightWord");
                rightWord.textContent = this.rightWord;
            break;
            
            case "checked":
                const inputCheckbox = this.shadowRoot.querySelector("#toggle");

                if (this.checked) {
                    inputCheckbox.checked = true;
                } else {
                    inputCheckbox.checked = false;
                }
            break;
        }
    }
}