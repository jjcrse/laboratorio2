class NewsComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .news-container {
                    font-family: Arial, sans-serif;
                    border: 1px solid #ccc;
                    padding: 16px;
                    border-radius: 8px;
                    max-width: 400px;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
                }
                .subtitle {
                    font-size: 14px;
                    color: gray;
                }
                .title {
                    font-size: 20px;
                    font-weight: bold;
                    margin: 8px 0;
                }
                .info {
                    font-size: 16px;
                    margin-bottom: 12px;
                }
                .author-container {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .author {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 12px;
                }
                .author img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
                .time {
                    font-size: 12px;
                    color: gray;
                    text-align: right;
                    margin-top: 10px;
                }
            </style>
            <div class="news-container">
                <div class="subtitle">${this.getAttribute('subtitle') || 'Subtítulo'}</div>
                <div class="title">${this.getAttribute('title') || 'Título'}</div>
                <div class="info">${this.getAttribute('info') || 'Información de la noticia.'}</div>
                <div class="author-container">
                    <div class="author">
                        <img src="${this.getAttribute('author1-img') || 'avatar1.jpg'}" alt="Autor 1">
                        <span>${this.getAttribute('author1-name') || 'Autor 1'}</span>
                    </div>
                    <div class="author">
                        <img src="${this.getAttribute('author2-img') || 'avatar2.jpg'}" alt="Autor 2">
                        <span>${this.getAttribute('author2-name') || 'Autor 2'}</span>
                    </div>
                </div>
                <div class="time">${this.getAttribute('time') || '12:00 PM'}</div>
            </div>
        `;
    }
}

customElements.define('news-component', NewsComponent);
