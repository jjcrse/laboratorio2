class News extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["titulo", "author"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
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
                    padding: 30px;
                    border-radius: 22px; 
                    border: 2px solid black; 
                    max-width: 550px; 
                    font-family: Arial, sans-serif;
                }

                #news-titel {
                    font-size: 22px;
                    font-weight: bold;
                    margin: 10px 0;
                }

                #autor {
                    color: #aaa;
                    font-size: 14px;
                }
            </style>
            
            <div id="news">
                <div id="news-titel">${this.getAttribute("titulo") || "Sin título"}</div>
                <div id="autor">Autor: ${this.getAttribute("author") || "Anónimo"}</div>
            </div>
        `;
    }
}

customElements.define("news-element", News);
export default News;
