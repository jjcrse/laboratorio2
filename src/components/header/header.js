class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                header {
                    background-color: #121212; /* Fondo oscuro */
                    color: #FFFFFF; /* Blanco para el texto */
                    padding: 15px 30px; 
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
                }
                h1 {
                    margin: 0;
                    font-size: 1.5rem;
                    color: #3C93FF; /* Azul para el título */
                }
                nav {
                    margin: 0;
                }
                nav ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    gap: 20px; /* Espaciado entre elementos */
                }
                nav ul li a {
                    color: #FFFFFF; /* Blanco para los enlaces */
                    text-decoration: none;
                    font-weight: bold;
                    transition: color 0.3s, transform 0.3s; /* Transiciones suaves */
                }
                nav ul li a:hover {
                    color: #3C93FF; /* Azul brillante al pasar el mouse */
                }
                .button {
                    background-color: #3C93FF; /* Botón azul */
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1rem;
                    transition: background-color 0.3s;
                }
                .button:hover {
                    background-color: #1A73E8; /* Azul más oscuro al pasar el cursor */
                }
            </style>
            <header>
                <h1>Juegos</h1>
                <nav>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </nav>
                <div>
                    <button class="button">Sign in</button>
                    <button class="button">Sign up</button>
                </div>
            </header>
        `;
    }
}

customElements.define('app-header', Header);
export default Header;