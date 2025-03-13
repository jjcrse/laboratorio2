import Header from './src/components/header/header.js';
import Noticias from './src/components/news/News.js';
import "./src/components/news/NewsContainer.js";
import Cards from './src/components/card/card.js';


customElements.define("componente-header", Header);
customElements.define("noticia-element", Noticias);
customElements.define('custom-news', Cards);
 

//importa los componentes para poder ponerlos en el html


