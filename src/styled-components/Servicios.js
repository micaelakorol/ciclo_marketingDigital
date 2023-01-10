import styled /* , { keyframes } */ from "styled-components";
import { colores, temas } from "./Colores";
import { Contenedor } from "../pages/styled-components/Planes";

const TituloPrincipal = styled.h2`
  color: ${colores.oscuro};
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 2rem 0;
`;

const ContenedorServicios = styled(Contenedor)`
@media(max-width:768px){
  grid-template-columns: 70%;
}
`;
const ContenedorTarjetas = styled.ul`
  padding: 0.8rem;
  margin: 1rem;
  height: auto;
  max-width: 100%;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  text-align: center;
  &:hover{
    background: ${temas.bgPlanes};
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
  font-family: 'Karla', sans-serif;
  font-size: .9rem;
  @media (max-width: 768px) {
    text-align: center;
    margin: 0;
    font-size: .7rem;
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
