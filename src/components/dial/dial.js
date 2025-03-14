class CustomDial extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.currentPage = 1;
        this.totalPages = 10;

        this.render();
    }

    connectedCallback() {
        this.shadowRoot.addEventListener("click", (event) => {
            if (event.target.classList.contains("page-number")) {
                this.currentPage = parseInt(event.target.textContent);
                this.updateSelection();
                this.dispatchEvent(new CustomEvent("pageChange", { detail: this.currentPage }));
            }
        });
    }

    updateSelection() {
        this.shadowRoot.querySelectorAll(".page-number").forEach((el) => {
            el.classList.toggle("active", parseInt(el.textContent) === this.currentPage);
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .pagination {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 30px 0;
                    border-radius: 10px;
                    margin-left: 460px;
                    margin-botton:5px;
                }

                .page-number {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 16px;
                    cursor: pointer;
                    border-radius: 50%;
                    transition: background 0.3s, transform 0.2s;
                    font-family: Arial, sans-serif;
                }

                .page-number.active {
                    background: white;
                    color: black;
                    font-weight: bold;
                    transform: scale(1.2);
                }

                .page-number:hover {
                    background: rgba(255, 255, 255, 0.2);
                }
            </style>
            <div class="pagination">
                ${Array.from({ length: this.totalPages }, (_, i) => 
                    `<div class="page-number ${i + 1 === this.currentPage ? "active" : ""}">${i + 1}</div>`
                ).join("")}
            </div>
        `;
    }
}

customElements.define("custom-dial", CustomDial);
export default CustomDial;
