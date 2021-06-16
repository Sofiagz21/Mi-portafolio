import React from 'react';
import styled from 'styled-components';
import '../../utils/fuentes/fonts.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactTitle from './ContactTitle';
import Contactcontent from './Contactcontent';
import ContactFooter from './ContactFooter';

const Div=styled.div`
/* Estilos generales de la página como el color*/
background: radial-gradient(#202076 40%, #202076 70%), linear-gradient(rgba(96, 11, 148, 0.5) 0%, transparent 70%);
`


const Contact = () => {
    return (
        <Div className="ContainerContact" id="contact">
            <div>
                <ContactTitle/>
                <Contactcontent/>
                <ContactFooter/>
            </div>
        </Div>
    )
}

export default Contact
