import React from 'react';
import styled from 'styled-components';
import '../../utils/fuentes/fonts.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Proyecto from '../../utils/images/Mockup.png';
import Proyecto1 from '../../utils/images/signos.png';

const Div=styled.div`

/* estilos para el container de las proyectos*/ 
    display:flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'IBM Plex Mono', monospace;

/* Container que contiene el contenido de los proyectos*/
.CardC{
    position: relative;
    width: 600px;
    height: 400px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    transition: 0.5s;
    margin-bottom: 35px;
}

.CardC .circle{
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 20px;
    width: 100%;
    height:100% ;
    overflow: hidden;
}

.CardC .circle::before{
    content: '';
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background:#e6e6ec;
    clip-path: circle(120px at center);
    transition: 0.5s;
}

.CardC:hover .circle:before{
    background: #e6e6ec;
    clip-path: circle(400px at center);
}

/* ESTILOS PARA LAS IMÁGENES*/
.CardC  img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    height: 200px;
    pointer-events: none;
    transition: 0.5s;
}

.CardC .Signos{
    height: 290px;
}

.CardC:hover img{
    left: 80%;
    height: 250px;
}

.CardC:hover .Signos{
    left: 80%;
    height: 370px;
}


.CardC .Contentc{
    position: relative;
    width: 50%;
    left: 20%;
    padding: 20px 20px 20px 40px;
    transition: 0.5s;
    opacity: 0;
    visibility:hidden;
}

.CardC:hover .Contentc{
   left: 0;
   opacity: 1;
   visibility: visible;
}

.CardC .Contentc .TitleC{
    color:#202076;
    text-transform: uppercase;
    font-size: 2em;
    line-height: 1em;
    padding-top: 5%;
    margin-bottom: 10px;
}

.CardC .Contentc .TextC{
    color: #202076;
    padding-top: 5%;
    text-align: justify;

}

.CardC .Contentc a{
    position: relative;
    color: #fff;
    font-weight: 400;
    font-size: 15px;
    text-align: center;
    padding: 5px 10px;
    border-radius: 10px;
    background: #202076;
    margin-top: 3px;
    display: inline-block;
    text-decoration: none;
}

.CardC .Contentc a:hover{
    background:rgb(255, 86, 177);
}

/* RESPONSIVE*/


@media (max-width:991px)
{
    .CardC{
        width: auto;
        max-width: 350px;
        align-items: flex-start;
        margin: 10px;
    }

    .CardC:hover{
        height: 600px;
    }

    .CardC .Contentc{
        width: 100%;
        left: 0;
        padding:30px;

    }

    .CardC:hover img{
        top: 80%;
        left: 50%;
        height: 220px;

    }
}

@media (max-width:420px){
    .CardC .Contentc{
        padding:20px;
    }
}
`

const SkillsPortaCard = () => {
    return (
        <Div className="ContainerSkills" id="skills">
            <div className="ContainerPortaCards">
                    <div className="CardC">
                    <div className="circle"></div>
                        <div className="Contentc">
                            <h2 className="TitleC">El rincón del campo.</h2>
                            <p className="TextC">Es un Proyecto social, cuyo objetivo es eliminar los intermediarios en el sector agro y así lograr que los Campesinos 
                                ganen a precios justo y tengan mejor calidad de vida</p>
                            <a href="/">Ver más acerca del proyecto</a>
                        </div>
                            <img src={Proyecto} alt="" />
                    </div>
                    <div className="CardC">
                    <div className="circle"></div>
                        <div className="Contentc">
                            <h2 className="TitleC">Los signos del zodiaco</h2>
                            <p className="TextC">He creado un programa el cuál permita ver tu signo zodiacal, a cúal perteneces 
                            y la compatibilidad con los otros signos creado con HTML,CSS Y JS</p>
                            <a href="/">Ver más acerca del proyecto</a>
                        </div>
                            <img className="Signos" src={Proyecto1} alt="" />
                    </div>
            </div>
        </Div>
    )
}

export default SkillsPortaCard
