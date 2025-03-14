class CustomDial extends HTMLElement {
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
                .dial-container {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                }
                .dial-button {
                    width: 56px;
                    height: 56px;
                    background-color: #1976d2;
                    color: white;
                    border: none;
                    border-radius: 50%;
                    font-size: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: background-color 0.3s;
                }
                .dial-button:hover {
                    background-color: #1565c0;
                }
            </style>
            <div class="dial-container">
                <button class="dial-button">+</button>
            </div>
        `;
    }
}

customElements.define('custom-dial', CustomDial);
export default CustomDial;