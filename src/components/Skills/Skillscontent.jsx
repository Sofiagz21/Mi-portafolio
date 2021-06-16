import React from 'react';
import styled from 'styled-components';
import '../../utils/fuentes/fonts.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillsTitle  from './SkillsTitle';
import SkillsCards from './SkillsCards';
import SkillsPorta from './SkillsPorta';

const Div=styled.div`
/* estilos generales de la página*/
background: radial-gradient(#202076 40%, #202076 70%), linear-gradient(rgba(96, 11, 148, 0.5) 0%, transparent 70%);
`

const Skillscontent = () => {
    return (
        <Div className="ContainerSkills" id="skills">
            <div>
            <SkillsTitle/>
            <SkillsCards/>
            <SkillsPorta/>
            </div>
        </Div>
    )
}

export default Skillscontent

