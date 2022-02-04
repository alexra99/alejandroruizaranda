import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'HABILIDADES'} span={'HABILIDADES'} />
                <InnerLayout>
                <div className="skills">
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'JAVA'}
                            width={'70%'}
                            text={'70%'}
                        />
                        
                        <ProgressBar 
                            title={'HTML5'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'50%'}
                            text={'50%'}
                        />
                        
                        <ProgressBar 
                            title={'React JS'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'SQL'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                                title={'Docker'}
                                width={'60%'}
                                text={'60%'}
                    />
                    <ProgressBar 
                                title={'Photoshop'}
                                width={'75%'}
                                text={'75%'}
                    />
                    <ProgressBar 
                                title={'Excel'}
                                width={'75%'}
                                text={'75%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
