import styled from "styled-components";
import { colores, temas } from "./Colores";

const ContenedorPresentacion = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-height: 70vh;
  overflow: hidden;
  background: ${temas.bgPresentacion};
  padding: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    background-image: none;
    max-height: 100vh;
  }
`;

const InformacionPrincipal = styled.section`
  margin: 10% auto auto auto;
  width: 85%;
  @media (max-width: 1024px) {
    margin: 1rem 0 0 1rem;
    width: 100%;
  }
  @media (min-width: 1300px) {
    margin-top: 20%;
  }
`;
const Titulo = styled.h1`
  font-size: 1.7rem;
  margin-top: 2rem;
  padding: 0.4rem;
  color: ${colores.oscuro};
  text-align: start;
  @media (max-width: 768px) {
    margin: 0;
    font-size: 1.2rem;
  }
`;

const ComoLoHago = styled.h2`
  font-weight: 700;
  color: ${colores.oscuro};
  font-size: 1.333rem;
  padding: 0.2rem;
  text-align: start;
  font-weight: normal;
  @media (min-width: 768px) {
    margin: 0.5rem 0;
  }
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const ContenedorBg = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  .social-media {
    margin-top: -1.6rem;
    width: 80%;
  }
  @media (max-width: 768px) {
    .social-media {
      height: auto;
    }
  }
  @media (max-width: 300px) {
    .social-media {
      display: none;
    }
  }
`;

export {
  ContenedorPresentacion,
  Titulo,
  InformacionPrincipal,
  ContenedorBg,
  ComoLoHago,
};
