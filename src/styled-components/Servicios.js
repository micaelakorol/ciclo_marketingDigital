import styled /* , { keyframes } */ from "styled-components";
import { colores, temas } from "./Colores";
import { Titulo } from "./Presentacion";

const TituloPrincipal = styled(Titulo)`
  color: ${colores.oscuro};
  text-align: center;
  font-size: 1.7rem;
  margin: 2rem 0 2rem 0;
`;

const ContenedorTarjetas = styled.section`
  padding: 1rem;
  margin: 0.6rem;
  height: auto;
  width: 19%;
  text-align: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  &:hover {
    background: ${temas.bgPresentacion};
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
  @media (max-width: 1200px) {
    width: 45%;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
`;

const TituloTarjeta = styled.h3`
  color: ${colores.oscuroSuave};
  text-align: center;
  margin: 1rem 0;
  @media (max-width: 768px) {
    text-align: center;
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;

const DescripcionTarjeta = styled.p`
  text-align: center;
  color: ${colores.pServicios};
  font-size: 0.88rem;
  @media (max-width: 768px) {
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
  ContenedorTarjetas,
  TituloTarjeta,
  DescripcionTarjeta,
  ImgTarjeta,
};
