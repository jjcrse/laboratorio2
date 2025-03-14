class Cards extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ["category", "title", "summary", "author1", "author2", "date", "imgSrc1", " imgSrc2"]; 
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
                .news {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    border-bottom: 1px solid #ddd;
                    font-family: Arial, sans-serif;
                }
                .news-content {
                    margin-left: 10px;
                }
                .news h3 {
                    margin: 0;
                    font-size: 1.1em;
                }
                .news p {
                    margin: 5px 0 0;
                    color: #666;
                    font-size: 0.9em;
                }
                {
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
                .author-img {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    object-fit: cover;
                }
                .author-container {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .author-name {
                    font-size: 14px;
                    color: #e5e7eb;
                }
                .news-date {
                    font-size: 12px;
                    color: #9ca3af;
                }
                .author-container {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
            </style>
            
            <div class="news">
                <div class="news-content">
                    <div class="news-title">${this.getAttribute("title") || "Sin título"}</div>
                    <div class="news-subtitle">${this.getAttribute("summary") || "Sin subtítulo"}</div>
                    <div class="news-info">${this.getAttribute("author1") || "Sin información disponible"}</div>
                    <div class="news-info">${this.getAttribute("author2") || "Sin información disponible"}</div>
                </div>
                <div class="news-footer">
                    <div class="author-container">
                        <img class="author-img" src="${this.getAttribute("imgSrc1") || ""}" alt="Autor">
                        <span class="author-name">${this.getAttribute("author1") || "Anónimo"}</span>
                        <span class="news-date">${this.getAttribute("date") || "Fecha desconocida"}</span>
                    </div>
                    
                </div>
            </div>
        `;
    }
}

customElements.define('custom-news', Cards);
export default Cards;

