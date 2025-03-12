import getNoticias from "./getnoticias";

class NewsContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
         
            const news= getNoticias();
            this.shadowRoot.innerHTML = `
            <ul>
                ${"hola"}
            </ul>
        `;
    }



}

export default NewsContainer;