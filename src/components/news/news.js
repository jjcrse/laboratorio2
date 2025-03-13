class News extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["titulo", "subtitulo", "info", "author", "fecha", "img", "imagenautor"];
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const imgSrc = this.getAttribute("img");
        const showImage = imgSrc && imgSrc !== "./none";

        this.shadowRoot.innerHTML = `
            <style>
                * {
                    box-sizing: border-box;
                }

                :host {
                    display: flex;
                    flex-direction: column;
                    background-color: #1e293b; /* Azul oscuro elegante */
                    color: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                    font-family: 'Arial', sans-serif;
                }

                :host(:hover) {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
                }

                .news-img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    display: ${showImage ? "block" : "none"};
                }

                .news-content {
                    padding: 15px;
                }

                .news-title {
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 5px;
                }

                .news-subtitle {
                    font-size: 16px;
                    color: #b0b0b0;
                    margin-bottom: 10px;
                }

                .news-info {
                    font-size: 14px;
                    color: #d1d5db;
                    line-height: 1.4;
                }

                .news-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 15px;
                    font-size: 12px;
                    color: #888;
                    background-color: #0f172a;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .author-container {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .author-img {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    object-fit: cover;
                }

                .author-name {
                    font-size: 14px;
                    color: #e5e7eb;
                }

                .news-date {
                    font-size: 12px;
                    color: #9ca3af;
                }
            </style>
            
            <div class="news-card">
                ${showImage ? `<img class="news-img" src="${imgSrc}" alt="Imagen de la noticia">` : ""}
                <div class="news-content">
                    <div class="news-title">${this.getAttribute("titulo") || "Sin título"}</div>
                    <div class="news-subtitle">${this.getAttribute("subtitulo") || "Sin subtítulo"}</div>
                    <div class="news-info">${this.getAttribute("info") || "Sin información disponible"}</div>
                </div>
                <div class="news-footer">
                    <div class="author-container">
                        <img class="author-img" src="${this.getAttribute("imagenautor") || ""}" alt="Autor">
                        <span class="author-name">${this.getAttribute("author") || "Anónimo"}</span>
                    </div>
                    <span class="news-date">${this.getAttribute("fecha") || "Fecha desconocida"}</span>
                </div>
            </div>
        `;
    }
}

customElements.define("news-element", News);
export default News;

//En la linea 50 del diseño pues se utiliza para que si es true tendra un display: block; osea que se 
//muestra y pues si no tiene aparece false y tendra un display: none; y lo ocultara y no lo deja sin un espacio vacio
//Pero esa funcion ya no se usa porque me toca preguntarle al profe mañana jueves 13/3/2025