import "./card.js";
import getCards from "./getcards.js";

class CardContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        this.render();
    }

    async render() {
        const cards = await getCards();
        this.shadowRoot.innerHTML = `
            <style>
                
                .news-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 20px;
                    width: 100%;
                    max-width: 1200px;
                }
            </style>
            <div class="news-grid">
                ${cards.map(card => `
                    <custom-news 
                        category="${card.category}"
                        title="${card.title}"
                        summary="${card.summary}"
                        author1="${card.author1}"
                        author2="${card.author2}"
                        date="${card.date}"
                        imgSrc1="${card.imgSrc1}"
                        imgSrc2="${card.imgSrc2}"
                    ></custom-news>
                `).join("")}
            </div>
        `;
    }
}

customElements.define("card-container", CardContainer);
export default CardContainer;