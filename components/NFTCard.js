const HTML = `
<section class="card">
    <div class="nft-img-container">
        <img class="nft-img" src="" alt="Illustration image">

        <div class="eye-icon">
            <img width="1" height="1" src="/icons/icon-view.svg" alt="Eye icon">
        </div>
    </div>

    <h1 class="title"></h1>
    <p class="description"></p>

    <section class="nft-info">
        <div class="ntf__flex-wraper ntf__flex-wraper--eth">
            <div class="ethereum-icon">
                <img width="11" height="18" src="/icons/icon-ethereum.svg" alt="Ethereum icon">
            </div>
            <p class="price"><span id="price"></span> ETH</p>
        </div>

        <div class="ntf__flex-wraper ntf__flex-wraper--clock">
            <div class="clock-icon">
                <img width="1" height="1" src="/icons/icon-clock.svg" alt="Clock icon">
            </div>
            <p class="time"><span id="time"></span> days left</p>
        </div>
    </section>

    <div class="divider"></div>

    <section class="nft-creator">
        <div class="user-profile-img">
        </div>
        <p class="credits">Creation of <span class="user-name"></span></p>
    </section>
</section>
`;

const CSS = `
<style>
    *, *::after, *::before {
	    box-sizing: border-box;
	    padding: 0;
	    margin: 0;
    }

    :host {
        display: block;
        width: fit-content;
        --soft-blue: hsl(218, 50%, 80%);
        --cyan: hsl(178, 100%, 50%);
        --body-bg: hsl(217, 55%, 10%);
        --card-bg: hsl(214, 50%, 16%);
        --line: hsl(215, 32%, 27%);
        --white: hsl(0, 0%, 100%);

        --img-filter: blur(0px);
        --eye-opacity: 0;
    }

    img {
        display: block;
        width: 100%;
        height: auto;
    }

    .card {
        position: relative;
        width: 100%;
        max-width: 328px;
        padding: 24px 28px;
        border-radius: 12px;
        background-image: linear-gradient(to right top,#14263d,#132339,#122034,#101e30,#0f1b2c,#0e1b2d,#0d1b2e,#0c1b2f,#0b1d35,#091f3a,#082140,#062346);
    }
    
    /* Card shadow */
    .card::after{
        content: "";
    
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 12px;
    
        opacity: 0;
        box-shadow: 0 0 10px 4px rgba(0, 255, 247, 0.4);
        transition: opacity 750ms;
    }
    
    .card:hover::after {
        opacity: 1;
    }
    
    /* IMAGE SECTION */
    
    .nft-img-container {
        position: relative;
        margin-bottom: 28px;
        border-radius: 12px;
        overflow: hidden;
        height: auto;
    }
    
    .nft-img {
        will-change: filter;
    
        border-radius: 12px;
        filter: var(--img-filter);
        transition: filter 250ms;
        object-fit: cover;
    }
    
    .eye-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    
        width: 42px;
    
        opacity: var(--eye-opacity);
        transition: opacity 250ms;
    }
    
    /* TITLE AND DESCRIPTION SECTION */
    
    .title {
        width: fit-content;
        margin-bottom: 12px;
        font-size: 2.2rem;
        font-weight: 600;
        color: var(--white);
    
        cursor: pointer;
        transition: color 250ms;
    }
    
    .title:hover {
        color: var(--cyan);
    }
    
    .description {
        font-size: 1.6rem;
        color: var(--soft-blue);
        line-height: 1.6;
        letter-spacing: 0;
    }
    
    /* NFT INFO SECTION */
    
    .nft-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
    }
    
    .ntf__flex-wraper {
        display: flex;
        align-items: center;
    }
    
    .ethereum-icon {
        width: 11px;
        margin-right: 8px;
    }
    
    .price {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--cyan);
        letter-spacing: 0.7px;
    }
    
    .clock-icon {
        width: 18px;
        margin-right: 6px;
    }
    
    .time {
        font-size: 1.5rem;
        color: var(--soft-blue);
    }
    
    /* DIVIDER */
    
    .divider {
        width: 100%;
        height: 1px;
        margin: 18px 0;
        background-color: var(--line);
    }
    
    /* CREDITS SECTION */
    
    .nft-creator {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
    }
    
    .user-profile-img {
        width: 34px;
        height: 34px;
        margin-right: 14px;
        border-radius: 100px;
        border: 1px solid var(--white);
        overflow: hidden;
    }
    
    .credits {
        font-size: 1.5rem;
        color: var(--soft-blue);
    }
    
    .user-name {
        color: var(--white);
        cursor: pointer;
        transition: color 250ms;
    }
    
    .user-name:hover {
        color: var(--cyan);
    }
</style>
`;

const template = document.createElement("template");
template.innerHTML = CSS + HTML;

export class NFTCard extends HTMLElement {
    static get observedAttributes() {
        return ["img", "nft-title", "description", "price", "time", "user-name", "user-img"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    set img(value) {
        this.setAttribute("img", value);
    } get img() {
        return this.getAttribute("img");
    }

    set nftTitle(value) {
        this.setAttribute("nft-title", value);
    } get nftTitle() {
        return this.getAttribute("nft-title");
    }

    set description(value) {
        this.setAttribute("description", value);
    } get description() {
        return this.getAttribute("description");
    }

    set price(value) {
        this.setAttribute("price", value);
    } get price() {
        return this.getAttribute("price");
    }

    set time(value) {
        this.setAttribute("time", value);
    } get time() {
        return this.getAttribute("time");
    }

    set userName(value) {
        this.setAttribute("user-name", value);
    } get userName() {
        return this.getAttribute("user-name");
    }

    set userImg(value) {
        this.setAttribute("user-img", value);
    } get userImg() {
        return this.getAttribute("user-img");
    }

    attributeChangedCallback(attrName) {
        switch (attrName) {
            case "img":
                const inputCheckbox = this.shadowRoot.querySelector(".nft-img");
                inputCheckbox.setAttribute("src", this.img)
            break;

            case "nft-title":
                const title = this.shadowRoot.querySelector(".title");
                title.textContent = this.nftTitle;
            break;

            case "description":
                const description = this.shadowRoot.querySelector(".description");
                description.textContent = this.description;
            break;
        
            case "price":
                const price = this.shadowRoot.querySelector("#price");
                price.textContent = this.price;
            break;

            case "time":
                const time = this.shadowRoot.querySelector("#time");
                time.textContent = this.time;
            break;

            case "user-name":
                const userName = this.shadowRoot.querySelector(".user-name");
                userName.textContent = this.userName;
            break;

            case "user-img":
                const userImgContainer = this.shadowRoot.querySelector(".user-profile-img");
                userImgContainer.style.background = `url(${this.userImg}) no-repeat center / cover`;
            break;

            default:
                break;
        }
    }
}