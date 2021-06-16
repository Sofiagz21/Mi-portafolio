import React from 'react'
import styled from 'styled-components';
import '../../utils/fuentes/fonts.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Perfil from '../../utils/images/perfil.png';
import Aboutcards from '../About/Aboutcards';

const Div=styled.div`

 /* ESTILOS DE LA PÁGINA ABOUT ME /ACERCA DE MÍ*/ 

 /* Estilos de la página about*/

    position: relative;
    background: radial-gradient(#202076 40%, #202076 70%), linear-gradient(rgba(96, 11, 148, 0.5) 0%, transparent 70%);
    padding: 40px 0px;
    -webkit-font-smoothing: antialiased;

/* Raya que me permite visilizar las divisones de las demás páginas*/
.raya{
    position: absolute;
    top: -5px;
    background: rgb(86,245,255);
    background: linear-gradient(90deg, rgba(86,245,255,0.9867297260701156) 12%, rgba(255,86,180,1) 81%);
    width: 100%;
    height: 5px;
    box-shadow: 0 0 1em rgb(89 193 254 / 40%);
}


 /* ESTILO DEL H2 ACERCA DE MÍ*/

 div .ache {
    font-weight: normal;
    font-size: 36px;
    margin:30px;
    color: rgb(255, 255, 255);
    text-shadow: rgb(255 255 255 / 75%) 0px 0px 15px;
    margin-bottom: 0px;
    font-family: 'IBM Plex Mono', monospace;
}

/* Animación para el subtitulo*/


.ache{animation:blink-1 10.5s both}
@keyframes blink-1{0%,50%,100%{opacity:1}25%,75%{opacity:0}}

/* Línea que va debajo del Subtítulo Sobre Mí*/

.titleLine{
    position: absolute;
    width: 60%;
    height: 5px;
    background: rgb(255, 255, 255);
    margin-top: 40px;
}

/* Container que contiene información foto y texto*/

.about-grid-up{
    margin-top: 80px;
    display: grid;
    grid-template-columns: 3fr 7fr;
    gap: 30px;
}

/* Container que contiene la foto de perfil*/


.glitch-variables {
    display: flex;
}

/* Estilos para la imagen de perfil*/
.col-1-photo img {
    width: 400px;
    height: auto;
}

/* Animación para la foto de perfil*/
.perfilfoto{animation:heartbeat 10.5s ease-in-out both}
@keyframes perfilfoto{from{transform:scale(1);transform-origin:center center;animation-timing-function:ease-out}10%{transform:scale(.91);animation-timing-function:ease-in}17%{transform:scale(.98);animation-timing-function:ease-out}33%{transform:scale(.87);animation-timing-function:ease-in}45%{transform:scale(1);animation-timing-function:ease-out}}


/* Estilos para el texto*/ 

.text {
    font-family: 'IBM Plex Mono', monospace;
    color: white;
    font-size: 25px;
    text-align: justify;
}


/* RESPONSIVE*/
@media (max-width:768px)
{

    .about-grid-up {
        gap: 0px;
        grid-template-columns: 1fr;
    }

    .col-1-photo img {
    margin: auto;
    width: 70%;
    }
}

`

const About = () => {
    return (
           <Div className="ContainerAbout" id="about">
               <div className="raya"></div>
                   <div className="TituloAbout">
                           <div>
                               <h1 className="ache">Acerca de Mí</h1>
                       </div>
                       <div className="titleLine"></div>
                   </div>
                <div className="container post-title">
                
                    <div className="about-grid-up">
                        <div className="col-1-photo">
                            <div>
                                <div className="glitch-variables">
                                    <img className="perfilfoto"src={Perfil} alt="Mi foto de perfil" />
                                </div>
                            </div>
                        </div>
                
                        <div className="col-2-text">
                            <p className="text">
                                Hola! Mi nombre es Sofia Gonzalez soy estudiante de desarrollo Frontend en el Programa TechPower Kuepa.
                                    Me considero una persona muy creativa e innovadora.A través de mi conocimiento y mis habilidades generadas, busco desarrollar e implementar nuevos proyectos que aporten a la comunidad
                                    para su avance tecnológico en el desarrollo de software.
                            </p>
                        </div>
                    </div>

                    <Aboutcards/>
                    
                </div>
 




            
           </Div>
    )
}

export default About
