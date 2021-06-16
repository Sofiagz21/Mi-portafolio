import React from 'react';
import styled from 'styled-components';
import '../../utils/fuentes/fonts.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Div=styled.div`

/* Eestilos para las cartas acerca de mí*/

/*Estilo del contendedor de las tres cartas*/
.about-cards {
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.justify-content-center {
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
}

/* Estilos para la primera carta y tercera carta*/

.neon-card h4:first-child {
    font-family: 'IBM Plex Mono', monospace;
    margin-top: 20px;
    font-size: 26px;
    color:white;
    text-shadow: rgb(255 255 255 / 75%) 0px 0px 15px;
}

/* Estilos para la segunda carta*/

.neon-card {
    border: 4px solid rgb(255, 86, 177);
    box-sizing: border-box;
    box-shadow: rgb(255 86 177 / 50%) 0px 0px 15px, rgb(255 86 177 / 50%) 0px 0px 15px inset;
    border-radius: 35px;
    padding: 20px;
    margin-bottom: 30px;
}

.neon-blue{
    border-color: rgb(22, 135, 143);
    box-shadow: rgb(86 245 255 / 50%) 0px 0px 15px, rgb(86 245 255 / 50%) 0px 0px 15px inset;
}

.highlighted{
    margin-top: -50px;
}

/* ESTILOS PARA LAS LISTAS DE LAS CARTAS 1 Y 3*/
ul {
    margin-top: 25px;
    list-style-type: none;
    padding: 5px;
}

li {
    margin-top: 20px;
    display: list-item;
    text-align: -webkit-match-parent;
    font-size: 15px;
    text-align: justify;
}

/* estilos  para los titulos Front End Developer*/*
.TitleFrontEnd{
    font-size: 60px;
    margin-top: 65px;
    font-family: 'IBM Plex Mono', monospace;
    color: white;
    text-align: center;
    text-shadow: rgb(255 255 255 / 75%) 0px 0px 15px;

}
.TitleCenter{
    font-size: 60px;
    margin-top: 10px;
    font-family: 'IBM Plex Mono', monospace;
    padding: 15px;
    color: white;
    text-align: center;
    text-shadow: rgb(255 255 255 / 75%) 0px 0px 15px;

}

/* animaciones para el titulo */
.TitleFrontEnd{-webkit-animation:vibrate-1 .3s linear infinite both;animation:vibrate-1 .3s linear infinite both}
.TitleCenter{-webkit-animation:vibrate-1 .3s linear infinite both;animation:vibrate-1 .3s linear infinite both}

@-webkit-keyframes vibrate-1{0%{-webkit-transform:translate(0);transform:translate(0)}20%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}40%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}60%{-webkit-transform:translate(2px,2px);transform:translate(2px,2px)}80%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}100%{-webkit-transform:translate(0);transform:translate(0)}}@keyframes vibrate-1{0%{-webkit-transform:translate(0);transform:translate(0)}20%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}40%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}60%{-webkit-transform:translate(2px,2px);transform:translate(2px,2px)}80%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}100%{-webkit-transform:translate(0);transform:translate(0)}}


/* RESPONSIVE*/

@media (max-width:800px)
{
    .about-cards {
    grid-template-columns: 1fr;
    gap: 0px;
    }
    .neon-card{
        margin-bottom: 70px;
        padding: 1px;
    }
}

`
const Aboutcards = () => {
    return (
        <Div className="AboutCards">
            <div className="row justify-content-center about-cards text-center">
                <div className="justify-content-center">
                    <div className="neon-card">
                        <ul className="text">
                            <li>Traduzco el diseño de tu sitio a código HTML y CSS. </li>
                            <li>Controlo las tipografías, plantillas, formas del diseño y la interactividad.</li>
                            <li>Programo, cambio y mantenengo tu sitio web</li>
                            </ul>
                    </div>
                </div>
                <div className="neon-card neon-blue highlighted">
                    <h1 className="TitleFrontEnd">FrontEnd</h1>
                    <h1 className="TitleCenter">Developer</h1>
                </div>
                <div className="neon-card">
                    <ul className="text">
                        <li>Adapto el diseño de tu web a diversos dispositivos y navegadores. </li>
                        <li>Creo herramientas que mejoren la interacción entre usuario y web.</li>
                        <li>Uso APIs para conectar la web con servicios y sistemas.</li>
                    </ul>
                </div>
            </div>
        </Div>
    )
}

export default Aboutcards
