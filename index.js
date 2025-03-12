import Header from './src/components/header/header.js';
import Noticias from './src/components/news/News.js';
import NewsContainer from './src/components/news/NewsContainer.js';

customElements.define("componente-header", Header);
customElements.define("noticia-element", Noticias);
customElements.define("noticia-container", NewsContainer);
