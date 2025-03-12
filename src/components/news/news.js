class News extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML = `
            <style>
                #news{
                    background-color: black; 
                    color: white; 
                    padding: 30px;
                    border-radius: 22px; 
                    border: 2px solid black; 
                    max-width: 550px; 
                    font-family: Arial, sans-serif;
                }

                #job{
                    color: #aaa;
                    font-size: 14px;
                    text-transform: uppercase;

                }

                #news-titel{
                    font-size: 22px;
                    font-weight: bold;
                    margin: 10px 0;
                }

                #information{
                    font-size: 16px;
                    color: #bbb;
                }

                #footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 15px;
                }

                #date {
                    font-size: 14px;
                    color: #888;
                }

                #autor{
                    display: flex;
                    align-items: center;
                }
            </style>
            
            <div id="news">
                <div id="job">
                    <p>Job</p>
                </div>
                <div id="news-titel">
                    <p>Titulo de la noticia</p>
                </div>
                <div id="information">
                    <p>Contenido/información/resumen</p>
                 </div>
                <div id="footer">
                    <div id="autor">
                        <p>nombre del autor</p>
                    </div>
                    <div id="date">
                        <p>fecha de publicación</p>
                    </div>
                </div>
            </div>
        `;
    }
}

export default News;