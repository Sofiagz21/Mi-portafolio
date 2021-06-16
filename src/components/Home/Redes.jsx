import React from 'react'
import styled from 'styled-components';
import Git from '../../utils/images/github.svg';
import Insta from '../../utils/images/insta.svg'
import Linke from '../../utils/images/linkedin.svg';

const Div=styled.div`
 /* ESTILOS PARA EL CONTAINER REDES*/

    display: flex;
    flex-direction: row;
    align-self: center;
    margin: 120px 0 2px 0;
    animation: 2s ease 0s 1 normal none running ;

/* container que contiene el link de las redes junto con el icono*/
    .socials{
        margin: 2px 20px;
        box-sizing: border-box;
        box-shadow: rgb(86 245 255 / 50%) 0px 0px 5px, rgb(86 245 255 / 50%) 0px 0px 5px inset;
        border-radius: 15px;
        fill: rgb(86, 245, 255);
        transition: all 0.3s ease 0s;
    }


    .Socialbar {
    display: flex;
    flex-direction: row;
    width: 60%;
    height: 2px;
    margin-top: 25px;
    background:rgb(86, 245, 255);
    box-shadow: rgb(86 245 255 / 50%) 0px 0px 5px, rgb(86 245 255 / 50%) 0px 0px 5px inset;
    border-radius: 50px;
}
 
.socials img{
        width: 55px;
        height: 55px;
    }
    
 /* aniamciones para los iconos*/
    .heartbeat{-webkit-animation:heartbeat 1.5s ease-in-out infinite both;animation:heartbeat 1.5s ease-in-out infinite both}

@-webkit-keyframes heartbeat{from{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;transform-origin:center center;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}10%{-webkit-transform:scale(.91);transform:scale(.91);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}17%{-webkit-transform:scale(.98);transform:scale(.98);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}33%{-webkit-transform:scale(.87);transform:scale(.87);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}45%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes heartbeat{from{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;transform-origin:center center;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}10%{-webkit-transform:scale(.91);transform:scale(.91);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}17%{-webkit-transform:scale(.98);transform:scale(.98);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}33%{-webkit-transform:scale(.87);transform:scale(.87);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}45%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}

    
`


const Redes = () => {
    return (
        <Div className="ContainerRedes">

            <div className="socials">
                <a target="_blank" href="https://github.com/Sofiagz21">
                <img className="heartbeat" src={Git} alt="ImagenGit" />
                </a>
            </div>
            <div className="socials">
                <a target="_blank" href="https://www.linkedin.com/in/sofia-gonzalez-595a88200/">
                <img className="heartbeat"src={Linke} alt="ImagenLinke" />
                </a>
            </div>
            <div className="socials">
                <a target="_blank" href="https://www.instagram.com/sofiaaa_gonzalez_/?hl=es-la">
                <img className="heartbeat" src={Insta} alt="ImagenInsta"/>
                </a>
            </div>
            <div className="Socialbar"></div>
        </Div>
    )
}

export default Redes
