import styled /* , { keyframes } */ from "styled-components";
import { colores, temas } from "./Colores";
import { Contenedor } from "./Flex";

const TituloPrincipal = styled.h2`
  color: ${colores.oscuro};
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 2rem 0;
`;

const ContenedorServicios = styled(Contenedor)``;
const ContenedorTarjetas = styled.section`
  padding: 1rem;
  margin: 0.6rem;
  height: auto;
  width: 19%;
  text-align: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  &:hover {
    background: ${temas.bgPlanes};
  }
  @media (max-width: 1200px) {
    width: 45%;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
`;

const TituloTarjeta = styled.h3`
  color: ${colores.verdeHLinks};
  text-align: center;
  margin: 1rem 0;
  @media (max-width: 768px) {
    text-align: center;
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;

const DescripcionTarjeta = styled.p`
  text-align: start;
  color: ${colores.pServicios};
  font-family: "Karla", sans-serif;
  font-size: 0.9rem;
  @media (max-width: 768px) {
    text-align: center;
    margin: 0;
    font-size: 0.7rem;
  }
`;
const ImgTarjeta = styled.section`
  text-align: center;
  .logo-tarjeta {
    width: 45%;
  }
`;

export {
  TituloPrincipal,
  ContenedorServicios,
  ContenedorTarjetas,
  TituloTarjeta,
  DescripcionTarjeta,
  ImgTarjeta,
};
