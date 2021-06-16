import React from 'react'
import styled from 'styled-components';
import '../../utils/fuentes/fonts.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Div=styled.div`
/* ESTILOS PARA EL TITULO del Habilidades*/
position: relative;
    padding: 40px 0px;
    -webkit-font-smoothing: antialiased;


.raya{
    position: absolute;
    top: -5px;
    background: rgb(86,245,255);
    background: linear-gradient(90deg, rgba(86,245,255,0.9867297260701156) 12%, rgba(255,86,180,1) 81%);
    width: 100%;
    height: 5px;
    box-shadow: 0 0 1em rgb(89 193 254 / 40%);
}

/* estilos del subtitulo*/
 div .ache {
    font-weight: normal;
    font-size: 36px;
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

const SkillsTitle = () => {
    return (
        <Div className="ContainerSkills" id="skills">
            <div className="raya"></div>
                   <div className="TituloAbout">
                           <div>
                               <h1 className="ache">Mis Habilidades</h1>
                           </div>
                       <div className="titleLine"></div>
                   </div>
        </Div>
    )
}

export default SkillsTitle
