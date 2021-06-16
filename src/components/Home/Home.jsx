import React from 'react'
import styled from 'styled-components';
import '../../utils/fuentes/fonts.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Redes from './Redes';

const Div=styled.div`
 /* estilos generales para la página Home*/
    display: flex;
    position:relative;
    justify-content:center;
    flex-direction: column;
    background: radial-gradient(rgba(96, 11, 148, 0.5) 0%, transparent 70%), linear-gradient(#0b161e 40%, #202076 70%);
    background-size: 100% 100%;
    perspective: 700px;
    font-size: clamp(10px, 2vw, 20px);
    height: 100%;
    width: 100%;
    -webkit-box-align:center;
    align-items:center;
    -webkit-box-pack:center;
    -webkit-box-flex: 1;
    padding: 170px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;


/* estilo para las lineas azules*/
.lines {
    position: fixed;
    width: 100%;
    height: 4em;
    background: linear-gradient(rgba(89, 193, 254, 0.2) 20%, #59c1fe 40%, #59c1fe 60%, rgba(89, 193, 254, 0.2) 80%);
    background-size: 1px 0.5em;
    box-shadow: 0 0 1em rgb(89 193 254 / 40%);
    transform: translateY(-5.8em);
    left: 0;

}

/* ESTILO PARA EL TITULO HOME*/
.TituloHome{
    position: relative;
    font-family: "Exo";
    font-size: 9em;
    margin: 0;
    transform: skew(-15deg);
    letter-spacing: 0.03em;
    
}

.TituloHome :first-child{
    display: block;
    text-shadow: 0 0 0.1em #8ba2d0, 0 0 0.2em black, 0 0 5em #165ff3;
    -webkit-text-stroke: 0.06em rgba(0, 0, 0, 0.5);
}

.TituloHome :last-child {
    position: absolute;
    left: 0;
    top: 0;
    background-image: linear-gradient(#032d50 25%, #00a1ef 35%, white 50%, #20125f 50%, #8313e7 55%, #ff61af 75%);
    -webkit-text-stroke: 0.01em #94a0b9;
    -webkit-background-clip: text;
    -webkit-text-fill-color:transparent;
    
}

.TituloHome ::after {
    content: "";
    position: absolute;
    top: -0.1em;
    right: 0.05em;
    width: 0.4em;
    height: 0.4em;
    background: radial-gradient(white 3%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.05) 60%, transparent 80%), radial-gradient(rgba(255, 255, 255, 0.2) 50%, transparent 60%) 50% 50%/5% 100%, radial-gradient(rgba(255, 255, 255, 0.2) 50%, transparent 60%) 50% 50%/70% 5%;
    background-repeat: no-repeat;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
}

.TituloHome :before {
    content: attr(data-text);
    position: absolute;
    left: 8px;
    text-shadow: 1px 0 blue;
    top: 0;
    color: white;
    background: black;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
}

.text-flicker-in-glow{
    font-family: "Mr Dafoe";
    margin: 0;
    font-size: 5.5em;
    margin-top: -0.6em;
    color: white;
    text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;
    transform: rotate(-7deg);
}

/* ANIMACIONES PARA EL TITUL0*/
.text-flicker-in-glow{-webkit-animation:text-flicker-in-glow 6s linear both;animation:text-flicker-in-glow 6s linear both}
@-webkit-keyframes text-flicker-in-glow{0%{opacity:0}10%{opacity:0;text-shadow:none}10.1%{opacity:1;text-shadow:none}10.2%{opacity:0;text-shadow:none}20%{opacity:0;text-shadow:none}20.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.25)}20.6%{opacity:0;text-shadow:none}30%{opacity:0;text-shadow:none}30.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}30.5%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}30.6%{opacity:0;text-shadow:none}45%{opacity:0;text-shadow:none}45.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}55%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}55.1%{opacity:0;text-shadow:none}57%{opacity:0;text-shadow:none}57.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35)}60%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35)}60.1%{opacity:0;text-shadow:none}65%{opacity:0;text-shadow:none}65.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35),0 0 100px rgba(255,255,255,.1)}75%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35),0 0 100px rgba(255,255,255,.1)}75.1%{opacity:0;text-shadow:none}77%{opacity:0;text-shadow:none}77.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1)}85%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1)}85.1%{opacity:0;text-shadow:none}86%{opacity:0;text-shadow:none}86.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}100%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}}@keyframes text-flicker-in-glow{0%{opacity:0}10%{opacity:0;text-shadow:none}10.1%{opacity:1;text-shadow:none}10.2%{opacity:0;text-shadow:none}20%{opacity:0;text-shadow:none}20.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.25)}20.6%{opacity:0;text-shadow:none}30%{opacity:0;text-shadow:none}30.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}30.5%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}30.6%{opacity:0;text-shadow:none}45%{opacity:0;text-shadow:none}45.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}55%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}55.1%{opacity:0;text-shadow:none}57%{opacity:0;text-shadow:none}57.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35)}60%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35)}60.1%{opacity:0;text-shadow:none}65%{opacity:0;text-shadow:none}65.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35),0 0 100px rgba(255,255,255,.1)}75%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35),0 0 100px rgba(255,255,255,.1)}75.1%{opacity:0;text-shadow:none}77%{opacity:0;text-shadow:none}77.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1)}85%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1)}85.1%{opacity:0;text-shadow:none}86%{opacity:0;text-shadow:none}86.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}100%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}}
`

const Home = () => {
    return (
        <Div className="ContainerHome" id="home">
                <div className="lines">
                </div>
                <h1 className="TituloHome">
                <span>SOFIA</span>
                <span>SOFIA</span>
                </h1>
                <h2 className="text-flicker-in-glow">Developer</h2>
                <Redes/>
        </Div>
        )
}

export default Home
