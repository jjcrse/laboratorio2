class Header extends HTMLElement { 
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' }); 
        shadow.innerHTML = `
            <style> 
                :host {
                    display: block;
                    font-family: 'Poppins', sans-serif;
                }
                header {
                    background-color: #121212;
                    color: #FFFFFF;
                    padding: 20px 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
                    border-bottom: 2px solid #3C93FF;
                }
                .logo-container {
                    display: flex;
                    align-items: center;
                }
                .logo {
                    width: 50px;
                    height: 50px;
                }
                nav ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    gap: 25px;
                }
                nav ul li a {
                    color: #FFFFFF;
                    text-decoration: none;
                    font-size: 1.1rem;
                    font-weight: 500;
                    transition: color 0.3s, transform 0.2s;
                }
                nav ul li a:hover {
                    color: #3C93FF;
                    transform: translateY(-2px);
                }
                .button-container {
                    display: flex;
                    gap: 15px;
                }
                .button {
                    background-color: #3C93FF;
                    color: white;
                    border: none;
                    padding: 12px 25px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                    transition: background-color 0.3s, transform 0.2s;
                }
                .button:hover {
                    background-color: #1A73E8;
                    transform: scale(1.05);
                }
            </style>
            <header> 
                <div class="logo-container">
                    <img class="logo" src="imagenes/Logo.png" alt="Logo">
                </div>
                <nav>
                    <ul>
                        <li><a href="#features">Videojuegos</a></li>
                        <li><a href="#testimonials">Comentarios</a></li>
                        <li><a href="#pricing">Lanzamientos</a></li>
                        <li><a href="#faq">Noticias</a></li>
                    </ul>
                </nav>
                <div class="button-container">
                    <button class="button">Registrarse</button>
                    <button class="button">Iniciar Sesion</button>
                </div>
            </header>
        `;
    }
}




export default Header

//Linea 1 lo estiende con un html element para crear un webcomponent

//*Linea 4 usa el shadow DOM this.attachShadow({ mode: 'open' }) para encapsular los estilos y la estructura

//&Linea 6 hasta linea 66 son estilos

//? Linea 67 hasta 83 se le da el logo a la izquierda 
//?Se le pone el enlace en las secciones (Videojuegos, Comentarios, Lanzamientos, Noticias) y los botones

//*Linea 91 ayuda a importar y utilizar el Header en otros archivos