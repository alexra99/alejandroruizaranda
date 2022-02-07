import React from 'react'
import styled from 'styled-components';

function ServiceCard({ image, title, paragraph }) {
    return (
        <ServiceCardStyled2 >
            <div className="container">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled2 >
    )}

const ServiceCardStyled2 = styled.div`
    
    img{
        box-shadow: 0 0 20px #007bff;
    }
    
    background-color: var(--background-dark-grey);
    border-left: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: all .4s ease-in-out;
    &:hover{
        border-top: 8px solid var(--primary-color);
        transform: translateY(3px);
    }
    .container{
        display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 102px){
                width: 70%;
            }
        padding: 1.2rem;
        h4{
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;
            &::after{
                content: "";
                width: 4rem;
                background-color: var(--border-color);
                height: 3px;
                position: absolute;;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }

        p{
            padding: .8rem 0;
        }
    }
`;

export default ServiceCard;
