import React from "react";
import styled from "styled-components";
import grado from "../img/grado.jpeg";

import cv from "../img/Curriculum.pdf";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={grado} alt="" />
      </div>
      <div className="right-content">
        <h4>
          Alejandro <span>Ruiz Aranda</span>
        </h4>
        <p className="paragraph">
          Hola! Soy Alejandro, estoy finalizando el grado en{" "}
          <span>Ingeniería en Informática</span> en la Escuela Superior de
          Infórmatica de <span>Ciudad Real.</span>
          <br></br>
          He realizado la intensificación en Ciencias de la Computación, y mis
          especialidades son <span>Machine Learning, Big Data y AI </span>
          (Artificial Intelligence).
          <br></br>
          Sin embargo, también me apasiona el mundo del{" "}
          <span>desarrollo web,</span> y he realizado algunos proyectos de forma
          autodidacta para formarme en este ámbito.
          <br></br>
          Me considero una persona <span>organizada, proactiva,</span> y que{" "}
          <span>adora los retos.</span> <br></br>
          Siempre trato de estar al tanto de las{" "}
          <span>últimas tecnologías</span> e investigo sobre aquellas que me
          pueden ser útiles.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Nombre</p>
            <p>Edad</p>
            <p>Nacionalidad</p>
            <p>Idiomas</p>
            <p>Ubicación</p>
            <p>Servicios</p>
          </div>
          <div className="info">
            <p>: Alejandro Ruiz Aranda</p>
            <p>: 22</p>
            <p>: Español </p>
            <p>: Español, Inglés</p>
            <p>: Ciudad Real, 13003, España</p>
            <p>
              : Machine Learning, Big Data, DeepLearning, Artificial
              Intelligence, Data Mining, Desarrollo web
            </p>
          </div>
        </div>
        <a href={cv} download='cvAlejandroRuiz'><button className='dwn'type='submit'>Descargar CV</button></a>
        
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .dwn{
    background-color: var(--primary-color);
    border-radius: 12px;
    padding: 0.4rem 1.6rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all 0.4s ease-in-out;
  }
  .left-content {
    width: 80%;
    img {
      width: 95%;
      box-shadow: 0 0 20px #007bff;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;

export default ImageSection;
