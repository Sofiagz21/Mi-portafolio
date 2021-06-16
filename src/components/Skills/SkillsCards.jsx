import React from 'react';
import styled from 'styled-components';
import '../../utils/fuentes/fonts.styles.css';

const Div=styled.div`

font-family: 'IBM Plex Mono', monospace;

/* Estilos para la section*/
section{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    min-height: 100vh;
}

section::before{
    content: '';
    position: absolute;
    top: 45%;
    left: 0;
    width: 100%;
    height: 50px;
    background:rgb(86,245,255);
}

/* ESTILOS PARA EL CONTENEDOR*/
.container{
    width: 900px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

/* estilos para el contenedor las cartas */
.container .cardi{
    position: relative;
    width: 250px;
    height: 300px;
    text-align: center;
    z-index: 10;
    margin:20px 20px 60px;
    transition: 0.5s;
}

/*ESTILOS PARA LAS CAJAS BOX */

.container .cardi .box{
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(85,245,255,0.05);
    box-shadow: 0 15px 35px rgba(0,0,0,0.5);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(85,245,255,0.1);
    z-index: 10;
    border-radius: 10px;
}
 
 /* estilo que contiene el svg y el numero*/
.percent{
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    z-index: 100;
}

.percent .number{
    position: absolute;
    top: 0;
    left: 0;
    width:100% ;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.percent .number .numero{
    color: #fff;
    font-weight: 700;
    font-size: 50px;
}

.percent .number .numero span{
    font-size: 24px;
}

/* ESTILO DE LOS TITULOS DE LAS HABILIDADES*/

.text{
    position: absolute;
    bottom:-42px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    padding: 30px 20px 10px;
    background: rgb(255, 86, 177); 
    border-radius: 10px;
    font-weight: 800;
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
    z-index: 1;
    pointer-events: none;
    transition: bottom 0.5s, z-index 0s, transform 0.5s,padding 0.5s;
    transition-delay: 0.5s, 0.5s,0s,0.5s;
    color: #fff;
}

.cardi:hover .text{
    transition-delay: 0s, 0.5s,0s,0s;
    bottom:-70px;
    z-index: 11;
    transform: translateX(-50%) translateY(-50px);
    padding: 30px 20px 10px;
}

/* estilos para el svg*/


svg{
    position: relative;
    width: 150px;
    height: 150px;
}

svg circle{
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 10;
    stroke: rgba(255,255,255,0.05);
    transform: translate(5px,5px);
    stroke-linecap: round;
}
svg circle:nth-child(2){
    stroke: #Fff;
    stroke-dasharray: 440px;
    stroke-dashoffset: 440px;

}

/* PARA DETERMINAR EL PORCETANJE DE CADA UNA DE LAS HABILIDADES*/
.cardi:nth-child(1) svg circle:nth-child(2){
    stroke-dashoffset: calc(440px - (440px * 90) / 100);
}

.cardi:nth-child(2) svg circle:nth-child(2){
    stroke-dashoffset: calc(440px - (440px * 85)/ 100);
}

.cardi:nth-child(3) svg circle:nth-child(2){
    stroke-dashoffset: calc(440px - (440px * 75) / 100);
}

.cardi:nth-child(4) svg circle:nth-child(2){
    stroke-dashoffset: calc(440px - (440px * 55) / 100);
}

.cardi:nth-child(5) svg circle:nth-child(2){
    stroke-dashoffset: calc(440px - (440px * 50) / 100);
}
.cardi:nth-child(6) svg circle:nth-child(2){
    stroke-dashoffset: calc(440px - (440px * 60) / 100);
}
.cardi:nth-child(7) svg circle:nth-child(2){
    stroke-dashoffset: calc(440px - (440px * 80) / 100);
}

.cardi:nth-child(8) svg circle:nth-child(2){
    stroke-dashoffset: calc(440px - (440px * 75) / 100);
}

`


const Skillscards = () => {
    return (
        <Div className="ContainerSkills" id="skills">
            <section>
                <div className="container">
                    <div className="cardi">
                        <div className="box">
                            <div>
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="number">
                                        <h2 className="numero">90<span>%</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">Html5</div>
                    </div>
                    <div className="cardi">
                        <div className="box">
                            <div>
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="number">
                                        <h2 className="numero">85<span>%</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">CSS</div>
                    </div>
                    <div className="cardi">
                        <div className="box">
                            <div>
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="number">
                                        <h2 className="numero">75<span>%</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">JavaScript</div>
                    </div>
                    <div className="cardi">
                        <div className="box">
                            <div>
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="number">
                                        <h2 className="numero">55<span>%</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">Bootstrap</div>
                    </div>
                    <div className="cardi">
                        <div className="box">
                            <div>
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="number">
                                        <h2 className="numero">50<span>%</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">React</div>
                    </div>
                    <div className="cardi">
                        <div className="box">
                            <div>
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="number">
                                        <h2 className="numero">60<span>%</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">Git/Github</div>
                    </div>
                    <div className="cardi">
                        <div className="box">
                            <div>
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="number">
                                        <h2 className="numero">80<span>%</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">Figma</div>
                    </div>
                    <div className="cardi">
                        <div className="box">
                            <div>
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="number">
                                        <h2 className="numero">75<span>%</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text"> ResponsiveDesing</div>
                    </div>
                </div>
            </section>
        </Div>
    )
}

export default Skillscards
