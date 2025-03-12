import getNoticias from "./getnoticias.js";

class NewsContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
            const news= getNoticias();
            this.shadowRoot.innerHTML = `
            <ul>
                ${news.map(noticia => `
                    <noticia-element titulo="${noticia.title}" author="${noticia.author}"></noticia-element>

                `).join('')}
            </ul>
        `;
    }



}

export default NewsContainer;
