import React from 'react';
import styled from 'styled-components';
import SkillsPortaTitle from './SkillsPortaTitle';
import SkillsPortaCard from './SkillsPortaCard';


const Div=styled.div`
`
const SkillsPorta = () => {
    return (
        <Div className="ContainerSkills" id="skills">
            <div>
                <SkillsPortaTitle/>
                <SkillsPortaCard/>
            </div>
        </Div>
    )
}

export default SkillsPorta
