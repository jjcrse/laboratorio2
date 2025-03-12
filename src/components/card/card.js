class card extends HTMLElement{
    constructor(){
        super();

        let shadow = this.attachShadow({mode: 'open'})
        
        this.divheader = document.createElement("div")
        this.divContent = document.createElement("div")
        
        this.divheader.innerHTML="hola";
        shadow.appendChild(this.divheader);
        shadow.appendChild(this.divContent);
    }
    connectedCallback(){
        this.divheader.innerHTML=`<strong>
           ${this.getAttribute("data-title")}
        </strong>`
    }
    
}

customElements.define("app-list",card);