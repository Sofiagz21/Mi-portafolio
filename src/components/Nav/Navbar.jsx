import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import '../../utils/fuentes/fonts.styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const Nav = styled.nav`

    /* ESTILOS DEL MENÚ*/
    width: 100%;
    position:fixed;
    display: flex;
    justify-content: space-between;
    height:75px;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 1050;
    background: rgba(2,28,38,0.12);
    transition: background 0.3s ease 0s;
    
    /* Estilos para el titulo del portafolio*/

    .logo{
        padding: 15px 0;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 24px;
        text-transform: uppercase;
        color: rgb(255, 86, 177);
        text-shadow: rgb(255 33 153 / 75%) 0px 0px 15px, rgb(255 33 153) 0px 0px 10px;
    }

    /* animacion para el titulo*/
    
    .logo{-webkit-animation:flicker-in-1 2s linear both;animation:flicker-in-1 2s linear both}
    @-webkit-keyframes flicker-in-1{0%{opacity:0}10%{opacity:0}10.1%{opacity:1}10.2%{opacity:0}20%{opacity:0}20.1%{opacity:1}20.6%{opacity:0}30%{opacity:0}30.1%{opacity:1}30.5%{opacity:1}30.6%{opacity:0}45%{opacity:0}45.1%{opacity:1}50%{opacity:1}55%{opacity:1}55.1%{opacity:0}57%{opacity:0}57.1%{opacity:1}60%{opacity:1}60.1%{opacity:0}65%{opacity:0}65.1%{opacity:1}75%{opacity:1}75.1%{opacity:0}77%{opacity:0}77.1%{opacity:1}85%{opacity:1}85.1%{opacity:0}86%{opacity:0}86.1%{opacity:1}100%{opacity:1}}@keyframes flicker-in-1{0%{opacity:0}10%{opacity:0}10.1%{opacity:1}10.2%{opacity:0}20%{opacity:0}20.1%{opacity:1}20.6%{opacity:0}30%{opacity:0}30.1%{opacity:1}30.5%{opacity:1}30.6%{opacity:0}45%{opacity:0}45.1%{opacity:1}50%{opacity:1}55%{opacity:1}55.1%{opacity:0}57%{opacity:0}57.1%{opacity:1}60%{opacity:1}60.1%{opacity:0}65%{opacity:0}65.1%{opacity:1}75%{opacity:1}75.1%{opacity:0}77%{opacity:0}77.1%{opacity:1}85%{opacity:1}85.1%{opacity:0}86%{opacity:0}86.1%{opacity:1}100%{opacity:1}}

`

const Navbar = () => {
    return (
        <Nav className="navbar">
            <div className="logo">
                Mi portafolio
            </div>
            <Burger/>
        </Nav>
    )
}

export default Navbar
