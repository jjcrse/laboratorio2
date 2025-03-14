class Cards extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ["category", "title", "summary", "author1", "author2", "date", "imgSrc1", "imgSrc2"];
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
                :host {
                    display: block;
                    background-color: #1e293b;
                    color: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
                    font-family: 'Arial', sans-serif;
                    max-width: 460px;
                    padding: 20px;
                    margin: 10px auto;
                    
                }
                

                .news-header {
                    font-size: 12px;
                    color: #9ca3af;
                    text-transform: uppercase;
                    margin-bottom: 5px;
                }
                .news-title {
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                .news-summary {
                    font-size: 14px;
                    color: #d1d5db;
                    margin-bottom: 10px;
                }
                .news-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: 10px;
                    font-size: 12px;
                    color: #9ca3af;
                    border-top: 1px solid #374151;
                }
                .author-container {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .author-img {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                }
                .author-info {
                    display: flex;
                    flex-direction: column;
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
            <div class="news">
                <div class="news-header">${this.getAttribute("category") || "Category"}</div>
                <div class="news-title">${this.getAttribute("title") || "Sin título"}</div>
                <div class="news-summary">${this.getAttribute("summary") || "Sin resumen"}</div>
                <div class="news-footer">
                    <div class="author-container">
                        <img class="author-img" src="${this.getAttribute("imgSrc1") || ''}" alt="Autor1">
                        <div class="author-info">
                            <span class="author-name">${this.getAttribute("author1") || "Autor desconocido"}</span>
                            <span class="news-date">${this.getAttribute("date") || "Fecha desconocida"}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-news', Cards);
export default Cards;

