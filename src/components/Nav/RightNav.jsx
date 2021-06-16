import React from 'react'
import styled from 'styled-components';

const Ul= styled.ul`

/* ESTILOS PARA UL*/
    list-style: none;
    display:flex;
    flex-flow:row nowrap;

/*ESTILO PARA LAS LISTAS*/
.Navli {
    padding: 18px 5px;   
    transition: background 0.3s ease 0s; 
} 

/* estilos para el a*/
a{
   text-decoration: none;
   font-family: 'IBM Plex Mono', monospace;
   padding-left: 1rem;
   font-size: 20px;
   text-transform: uppercase;
   transition: background 0.3s ease 0s;
}

a:hover{
        text-shadow: rgb(255 255 255 / 75%) 0px 0px 5px;
        color: rgb(255, 255, 255) !important;
        transition: background 0.3s ease 0s;
}

/*RESPONSIVE*/


@media (max-width: 768px) {
    flex-flow: column nowrap;
    background: rgba(86, 117, 129, 0.75);
    transition: background 0.3s ease 0s;
    position:fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width:300px;
    padding-top: 3.5rem;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out; 

    .Navli a{
        color:#fff;
    }
}
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={ open } className="Navul">
                <li className="Navli"><a href="#home">Home</a></li>
                <li className="Navli"><a href="#about">Sobre mí</a></li>
                <li className="Navli"><a href="#skills">Habilidades</a></li>
                <li className="Navli"><a href="#contact">Contacto</a></li> 
        </Ul>
    )
}

export default RightNav
