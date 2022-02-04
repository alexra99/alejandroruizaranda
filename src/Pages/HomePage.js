import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Particle from '../Components/Particle';
import Typical from 'react-typical'








function HomePage() {
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1 class="titulo">Hola! Soy <span><Typical
                steps={['Alejandro', 1000, 'Ingeniero Informático', 500]}
                loop={Infinity}
                wrapper="span"
                /></span></h1>
                <p>
                    Bienvenido a mi página web personal.


                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/alejandro-ruiz-aranda-b2ab09224/" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/alexra99" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://wa.me/+34649683729" className="icon i-whatsapp">
                        <WhatsAppIcon />
                    </a>
                </div>
            </div>
            
        
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
