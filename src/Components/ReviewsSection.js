import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from './Title';
import hackathon from '../img/hackathon.jpg';
import ServiceCard from './ServiceCard2';

function ReviewsSetion() {
    return (
        <ReviewsStyled>
            <Title title={'Reconocimientos'} span={'Reconocimientos'} />
            <InnerLayout>
                <div className="reviews">
                <ServiceCard
                        image={hackathon}
                        title={<span>2º Premio Hackathon Aula Smart 2020</span>} 
                        paragraph={'Competición basada en resolver retos de programación sen un determinado tiempo.'}
                    />
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        @media screen and (max-width: 502px){
        width: 70%;
        }
    }
`;

export default ReviewsSetion;
