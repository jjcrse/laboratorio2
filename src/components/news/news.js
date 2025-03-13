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
        this.shadowRoot.innerHTML = `
            <style>
                #news {
                    background-color: black; 
                    color: white; 
                    padding: 20px;
                    border-radius: 15px; 
                    border: 2px solid black; 
                    max-width: 600px; 
                    font-family: Arial, sans-serif;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                img {
                    width: 100%;
                    border-radius: 10px;
                }

                #news-titel {
                    font-size: 22px;
                    font-weight: bold;
                    margin: 5px 0;
                }

                #subtitulo {
                    font-size: 18px;
                    color: #ddd;
                }

                #info {
                    font-size: 16px;
                    color: #bbb;
                }

                #footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 10px;
                }

                #author-container {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                #author-img {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    object-fit: cover;
                }

                #date {
                    font-size: 14px;
                    color: #888;
                }
            </style>
            
            <div id="news">
                <img src="${this.getAttribute("img") || ""}" alt="Imagen de la noticia">
                <div id="news-titel">${this.getAttribute("titulo") || "Sin título"}</div>
                <div id="subtitulo">${this.getAttribute("subtitulo") || "Sin subtítulo"}</div>
                <div id="info">${this.getAttribute("info") || "Sin información disponible"}</div>
                <div id="footer">
                    <div id="author-container">
                        <img id="author-img" src="${this.getAttribute("imagenautor") || ""}" alt="Autor">
                        <p>${this.getAttribute("author") || "Anónimo"}</p>
                    </div>
                    <div id="date">${this.getAttribute("fecha") || "Fecha desconocida"}</div>
                </div>
            </div>
        `;
    }
}

customElements.define("news-element", News);
export default News;
