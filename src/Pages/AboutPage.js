import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSetion';

function AboutPage() {
    return (
     <div className='AboutPage' id='sobremi'>
        <MainLayout>
            <AboutStyled >
                <Title title={'Sobre Mi'} span={'Sobre Mi'} />
                <ImageSection />
                <ServicesSection />
                <ReviewsSection />
            </AboutStyled >
            </MainLayout>
    </div>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage
