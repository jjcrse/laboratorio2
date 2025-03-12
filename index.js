import '../src/components/news.js';

document.addEventListener('DOMContentLoaded', () => {
    const newsElement = document.createElement('news-component');
    newsElement.setAttribute('subtitle', 'Últimas Noticias');
    newsElement.setAttribute('title', 'Nueva tecnología revolucionaria');
    newsElement.setAttribute('info', 'Se ha desarrollado una nueva tecnología que cambiará el mundo.');
    newsElement.setAttribute('author1-img', 'author1.jpg');
    newsElement.setAttribute('author1-name', 'Carlos Pérez');
    newsElement.setAttribute('author2-img', 'author2.jpg');
    newsElement.setAttribute('author2-name', 'María Gómez');
    newsElement.setAttribute('time', '10:30 AM');

    document.body.appendChild(newsElement);
});
