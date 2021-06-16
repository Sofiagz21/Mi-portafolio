import React from 'react';
import styled from 'styled-components';
import '../../utils/fuentes/fonts.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Div=styled.div`

/* ESTILOS PARA EL FORMULARIO*/
font-family: 'IBM Plex Mono', monospace;

form {
    margin: auto;
    max-width: 700px;
}

/* grid que contiene el inpit del nombre y correo**/
.grid-form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

/* Estilos de la caja que contienen los input y textarea*/
.CajaInput{
    width: 100%;
    background: rgb(6, 22, 39);
    transition: all 0.3s ease 0s;
    margin-top: 20px;
    border: 3px solid rgb(255, 86, 177);
    box-sizing: border-box;
    box-shadow: none;
    border-radius: 25px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}

/* Estilos de los input*/

input {
    outline:none;
    padding: 15px;
    font-size: 18px;
    background: none;
    font-weight: 400;
    color: rgb(255, 255, 255);
    border: none;
    width: 90%;
}

/* estilo que contiene el mensaje*/

textarea {
    padding: 15px;
    font-size: 18px;
    background: none;
    font-weight: 400;
    color: rgb(255, 255, 255);
    border: none;
    width: 100%;
    resize: none;
    outline:none;
}

/* Estilos para el botón*/


.button-form {
    background: none;
    display: flex;
    margin-top: 25px;
}

.download-cv {
    width: 153px;
    margin-left: 5px;
}
.download-cv {
    width: 153px;
    text-decoration: none;
    color: rgb(86, 245, 255);
    font-size: 20px;
    text-transform: uppercase;
    border: 2px solid rgb(86, 245, 255);
    box-sizing: border-box;
    box-shadow: rgb(86 245 255 / 50%) 0px 0px 10px, rgb(86 245 255 / 50%) 0px 0px 10px inset;
    border-radius: 25px;
    padding: 15px 25px 0;
    fill: rgb(86, 245, 255);
    transition: all 0.3s ease 0s;
}

.enviarboton{
    margin-left: 10px;
}

/* responsive*/

@media (max-width:550px)
{
    .grid-form{
        grid-template-columns: 1fr;
    }
}
`

const Contactform = () => {
    return (
        <Div className="ContainerContact" id="contact">
            <form action="/" autocomplete="off">
                <div className="grid-form">
                    <div className="CajaInput">
                        <input type="text "id="name" placeholder="Nombre*"/>
                    </div>
                    <div className="CajaInput">
                    <input type="email" id="email" placeholder="Email*"/>
                    </div>
                </div>
                <div className="CajaInput">
                    <input type="text" id="subject" className="inputmensaje" placeholder="Asunto*"/>
                </div>
                <div className="CajaInput">
                    <textarea className="inputmensaje" type="textarea" placeholder="Hola Sofia..." rows="5" id="mensaje"></textarea>
                </div>
                <button type="submit" className="download-cv button-form">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="iconbutton" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z"></path></g></svg>
                    <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z"></path>
                    </g>
                    <p className="enviarboton">
                    Enviar
                    </p>
                </button>
            </form>
        </Div>
    )
}

export default Contactform
