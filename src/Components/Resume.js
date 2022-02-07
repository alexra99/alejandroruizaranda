import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Formación'} span={'Formación'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Experiencia Laboral'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'FEBRERO - JULIO 2022'} 
                        title={'MicroServices Developer'}
                        subTitle={'NTT DATA'}
                        text={'Prácticas en el departamento de Industria. Desarrollo de microservicios y despliegue en contenedores Docker.'} 
                    />
                    <ResumeItem 
                        year={'SEPTIEMBRE 2017 - '} 
                        title={'Community Manager'}
                        subTitle={'El Muro Disco-Pub'}
                        text={'Desarrollo de flyers en Photoshop, contenido audiovisual, soporte y gestión de RRSS.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Estudios Oficiales'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2018 - 2022'} 
                        title={'Grado en Ingenería Informática'}
                        subTitle={'Escuela Superior de informática de Ciudad Real UCLM'}
                        text={'Especialidad en Ciencias Computacionales.'} 
                    />
                    <ResumeItem 
                        year={'2016 - 2018'} 
                        title={'Bachillerato Cientifico-Tecnológico'}
                        subTitle={'I.E.S Berenguela de Castilla Bolaños de Calatrava'}
                        text={'EVAU con Nota Media: 9.03'} 
                    />
                    <ResumeItem 
                        year={'2015'} 
                        title={'B1 Cambridge English: Preliminary (PET)'}
                        subTitle={'Cambridge English'}
                        text={'Título oficial que acredita el nivel B1 de inglés.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
