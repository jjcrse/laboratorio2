import Header from './src/components/header/header.js';
import Noticias from './src/components/news/News.js';
import "./src/components/news/NewsContainer.js";
import Cards from './src/components/card/card.js';
import "./src/components/card/CardContainer.js";
import CustomDial from './src/components/dial/dial.js';

customElements.define("componente-header", Header);
customElements.define("noticia-element", Noticias);
customElements.define("card-container", Cards);
customElements.define('custom-dial', CustomDial);
 

//importa los componentes para poder ponerlos en el html


