import getNoticias from "./getnoticias.js"; 
import "./News.js";

class NewsContainer extends HTMLElement { 
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() { 
        const news = getNoticias();
        this.shadowRoot.innerHTML = 
        
        `
            <style>
                :host {
                    display: flex;
                    justify-content: center;
                    padding: 20px;
                    width: 100%;
                }

                .news-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 20px;
                    max-width: 1000px;
                    width: 100%;
                }
            </style>
         
            <div class="news-grid">
                ${news
                    .map(
                        (noticia) => `
                        <news-element 
                            titulo="${noticia.title}" 
                            subtitulo="${noticia.subtitulo}"
                            info="${noticia.info}"
                            author="${noticia.author}"
                            fecha="${noticia.fecha}"
                            img="${noticia.img}"
                            imagenautor="${noticia.imagenAutor}">
                        </news-element>
                    `
                    )
                    .join("")}
            </div>
        `;
    } 
}

customElements.define("noticia-container", NewsContainer); //define ese componente como newscontainer para que se convierta en html
export default NewsContainer; //Lo exporta para usarlo


//*Linea 1 Coge la lista  y la importa desde ese getnoticias

//*Linea 2 importo el componente <news-element> desde el otro archivo

//!Linea 4 aqui hago el webcomponent

//* Linea 7 hago el Shadow DOM para que el estilo personal no se afecte por otros estilos

//Linea 11 coge la lista de noticias con getnoticas

//Linea 12 define el componente el dhtml del componente usando la plantilla

//& Linea 13 hasta linea 31 son estilos

//Linea 32 hasta linea 48 cambia la lista de noticias en elementos con sus atributos y pues lo une con la linea 47 en un solo string y lo pone en el <div class="news-grid">