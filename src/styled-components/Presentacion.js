import styled from "styled-components";
import SvgFondo from "../assets/bg-pattern-intro-right-desktop.svg";
import { colores, temas } from "./Colores";

const ContenedorPresentacion = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-height: 70vh;
  overflow: hidden;
  background: ${temas.bgPresentacion};
  padding: 1rem;
  background-image: url(${SvgFondo});
  background-repeat: no-repeat;
  background-position: right;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    background-image: none;
  }
`;

const InformacionPrincipal = styled.section`
  margin: 2rem 0 0 1rem;
  @media (max-width: 1024px) {
    margin: 1rem 0 0 1rem;
  }
`;
const Titulo = styled.h1`
  font-size: 1.3rem;
  margin-top: 2rem;
  padding: 0.4rem;
  color: ${colores.oscuro};
  text-align: start;
  text-transform: uppercase;
  @media (max-width: 768px) {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;

const Descripcion = styled.p`
  color: ${colores.oscuro};
  font-family: "Karla", sans-serif;
  font-size: 1.1rem;
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

const ComoLoHago = styled(Descripcion)`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.3rem;
`;

const ContenedorBg = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
.imgPersona{
  width: 100%;
  margin-top: -3rem;
}
 /* @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }*/
@media(max-width: 1200px){
  .imgPersona {
    margin: 0;
    width: 100vw;
}
`;

export {
  ContenedorPresentacion,
  Titulo,
  Descripcion,
  InformacionPrincipal,
  ContenedorBg,
  ComoLoHago,
};
