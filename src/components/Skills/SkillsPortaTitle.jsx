import React from 'react';
import styled from 'styled-components';
import '../../utils/fuentes/fonts.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Div=styled.div`
        /* ESTILOS PARA EL TITULO del portafolio */


position: relative;
    padding: 40px 0px;
    -webkit-font-smoothing: antialiased;
 
 /* estilos del subtitulo*/
    div .ache {
    font-weight: normal;
    font-size: 30px;
    margin:30px;
    color: rgb(255, 255, 255);
    text-shadow: rgb(255 255 255 / 75%) 0px 0px 15px;
    margin-bottom: 0px;
    font-family: 'IBM Plex Mono', monospace;
}

/* Animación para el subitutlo*/
.ache{animation:blink-1 10.5s both}
@keyframes blink-1{0%,50%,100%{opacity:1}25%,75%{opacity:0}}

.titleLine{
    position: absolute;
    width: 60%;
    height: 5px;
    background: rgb(255, 255, 255);
    margin-top: 40px;
}
`

const SkillsPortaTitle = () => {
    return (
        <Div className="ContainerSkills" id="skills">
                   <div className="TituloAbout">
                           <div>
                               <h1 className="ache">Proyectos</h1>
                           </div>
                       <div className="titleLine"></div>
                   </div>
        </Div>
    )
}

export default SkillsPortaTitle
