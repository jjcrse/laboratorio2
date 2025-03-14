import getcards from "./getcards.js";
import "./card.js";

class CardContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const cards = getcards();
        this.shadowRoot.innerHTML = `
            <style>
                .container {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    max-width: 600px;
                    margin: auto;
                }
            </style>
            <div class="container">
                ${cards.map(card => `
                    <custom-news 
                        category="${card.category}"
                        title="${card.title}"
                        summary="${card.summary}"
                        author1="${card.author1}"
                        author2="${card.author2}"
                        date="${card.date}"
                        img-src="${card.imgSrc1}"
                    ></custom-news>
                `).join("")}
            </div>
        `;
    }
}

customElements.define("card-container", CardContainer);
export default CardContainer;