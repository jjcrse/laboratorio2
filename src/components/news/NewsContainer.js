import getNoticias from "./getnoticias.js";
import "./News.js"; // Importar el componente News

class NewsContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const news = getNoticias();
        this.shadowRoot.innerHTML = `
            <ul>
                ${news
                    .map(
                        (noticia) => `
                        <news-element titulo="${noticia.title}" author="${noticia.author}"></news-element>
                    `
                    )
                    .join("")}
            </ul>
        `;
    }
}

customElements.define("noticia-container", NewsContainer);
export default NewsContainer;
