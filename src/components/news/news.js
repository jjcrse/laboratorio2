class Noticias extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <section class="seccion-noticias">
                <h2 class="titulo-noticias">Últimas</h2>
                <div class="contenedor-noticias">
                    ${this.renderizarPublicaciones()}
                </div>
            </section>
        `;
    }

    renderizarPublicaciones() {
        const publicaciones = [
            {
                categoria: 'Videojuegos',
                titulo: 'Fortnite lanza un nuevo modo de juego innovador',
                descripcion: 'El nuevo juego de fortnite esta mas increible que algun otro que haya sido creado nunca jamas',
                autor: 'Juan José Correa',
                avatar: "./images/pp1.jpg",
                fecha: '10/Junio/2024'
            },
        ];

        return publicaciones.map(publicacion => `
            <div class="publicacion-noticia">
                <span class="categoria-noticia">${publicacion.categoria}</span>
                <h3 class="titulo-publicacion">${publicacion.titulo}</h3>
                <p class="descripcion-publicacion">${publicacion.descripcion}</p>
                <div class="pie-publicacion">
                    <div class="info-autor">
                        <img src="${publicacion.avatar}" alt="${publicacion.autor}" class="avatar-autor">
                        <span class="nombre-autor">${publicacion.autor}</span>
                    </div>
                    <span class="fecha-publicacion">${publicacion.fecha}</span>
                </div>
            </div>
        `).join('');
    }
}

customElements.define('publicaciones-noticias', Noticias);