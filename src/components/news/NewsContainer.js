import getNoticias from "./getnoticias.js";
import "./News.js"; // Importar el componente News por si lo necesitas para imprimir las cards pero seria casi igual

class NewsContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const news = getNoticias();
        this.shadowRoot.innerHTML = `
            <div>
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
