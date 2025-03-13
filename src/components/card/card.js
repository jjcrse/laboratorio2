
class Cards extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const titulo = this.getAttribute('titulo') || 'Título de la Noticia';
        const resumen = this.getAttribute('resumen') || 'Resumen de la noticia.';

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
            </style>
            <div class="news">
                <div class="news-content">
                    <h3>${titulo}</h3>
                    <p>${resumen}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-news', Cards);
export default Cards;

