import getNoticias from "./getnoticias.js";
import "./News.js";

class NewsContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const news = getNoticias();
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    justify-content: center;
                    padding: 20px;
                    width: 100%;
                }

                .news-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 20px;
                    max-width: 1000px;
                    width: 100%;
                }
            </style>

            <div class="news-grid">
                ${news
                    .map(
                        (noticia) => `
                        <news-element 
                            titulo="${noticia.title}" 
                            subtitulo="${noticia.subtitulo}"
                            info="${noticia.info}"
                            author="${noticia.author}"
                            fecha="${noticia.fecha}"
                            img="${noticia.img}"
                            imagenautor="${noticia.imagenAutor}">
                        </news-element>
                    `
                    )
                    .join("")}
            </div>
        `;
    }
}

customElements.define("noticia-container", NewsContainer);
export default NewsContainer;
