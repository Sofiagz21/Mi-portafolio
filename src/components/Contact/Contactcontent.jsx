import React from 'react';
import styled from 'styled-components';
import '../../utils/fuentes/fonts.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactform from './Contactform';

const Div=styled.div`

/* ESTILOS PARA EL CONTAINER DEL TEXTO EN LA PÁGINA*/

font-family: 'IBM Plex Mono', monospace;

.container {
    max-width: 1140px;
    margin: auto;
    padding: 0px 50px 0px 50px;
}

/* ESTILOS DEL TEXTO*/
.text{
    padding: 50px;
    font-size: 25px;
    margin-top: 50px;
    color: white;
}
`


const Contactcontent = () => {
    return (
        <Div className="ContainerSkills" id="skills">
            <div className="Container">
                <p className="text">
                    ¡Hola! Me gustaría saber si tienes alguna duda,crítica o 
                    sugerencia.También si te gustaria trabajar conmigo en el desarrollo de tu proyecto.
                    Te dejo el formulario para que te contactes conmigo.
                </p>
                <Contactform/>
            </div>
        </Div>
    )
}

export default Contactcontent
