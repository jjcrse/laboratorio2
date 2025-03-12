class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                header {
                    background-color: #1A1A1A; 
                    color: #FFFFFF; 
                    padding: 15px 30px; 
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
                }
                h1 {
                    margin: 0;
                    font-size: 1.5rem;
                    color: #3C93FF; 
                }
                nav {
                    margin: 0;
                }
                nav ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    gap: 20px; 
                }
                nav ul li a {
                    color: #FFFFFF; 
                    text-decoration: none;
                    font-weight: bold;
                    transition: color 0.3s, transform 0.3s; 
                }
                nav ul li a:hover {
                    color: #3C93FF; 
                }
                .button {
                    background-color: #3C93FF; 
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1rem;
                    transition: background-color 0.3s;
                }
                .button:hover {
                    background-color: #1A73E8; 
                }
            </style>
            <header>
                <h1>Juegos</h1>
                <nav>
                    <ul>
                        <li><a href="#features">Videojuegos</a></li>
                        <li><a href="#testimonials">Comentarios</a></li>
                        <li><a href="#pricing">Lanzamientos</a></li>
                        <li><a href="#faq">Noticias</a></li>
                    </ul>
                </nav>
                <div>
                    <button class="button">Registrarse</button>
                    <button class="button">Sign up</button>
                </div>
            </header>
        `;
    }
}

export default Header;
