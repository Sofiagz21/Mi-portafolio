import React from 'react';
import styled from 'styled-components';
import '../../utils/fuentes/fonts.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Div=styled.div`


/* estilos para el footer*/
background: rgb(225,86,180);
background: linear-gradient(0deg, rgba(225,86,180,0.9223039557619923) 19%, rgba(90,46,134,0.9082983535210959) 71%, rgba(32,32,118,1) 100%);
padding: 100px;
`

const ContactFooter = () => {
    return (
        <Div className="ContainerContact" id="contact">
            <div>
               
            </div>
        </Div>
    )
}

export default ContactFooter
