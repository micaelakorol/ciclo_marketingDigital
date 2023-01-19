import styled from "styled-components";
import { DescripcionTarjeta } from "../../styled-components/Servicios";
import { colores, temas } from "../../styled-components/Colores";
import { ArticuloRedes, ContenedorPlanRedes, DescripcionRedes } from "./GestionRedes";
import { BtnPlanes } from "./Planes";

const ContenedorDesarrollo = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  margin: 1rem;
  place-content: center;
  .desarrollo-web{
    width: 45%;
  }
  summary::marker{
  color: ${temas.bgMarronSuave};
}
  @media(max-width: 768px){
    grid-template-columns: repeat(2, 45%);
  }
  @media(max-width: 480px){
    grid-template-columns: 80%;
  }
`

const ContenidoDesarrollo = styled(DescripcionTarjeta)`
  text-align: center;
  font-size: 1.1rem;
  padding: 1.5rem;
`;

const ArticuloDesarrollo = styled(ArticuloRedes)`
`;

const TituloTarjeta = styled.h5`
  color: ${colores.pServicios};
  margin-bottom: 1rem;
`;

const BtnDesarrollo = styled(BtnPlanes)`
  width: 60%;
  margin-top: 1rem;
  &:hover{
    opacity: .9;
  }
  @media (max-width: 480px) {
    width: 100%;
    a {
      font-size: 0.9rem;
    }
  }
`;

const ContenedorPlanDesarrollo = styled(ContenedorPlanRedes)`
padding: 2rem;
  @media (max-width: 768px) {
    width: 80vw;
    padding: .6rem;
  }
`;

const ParrafoDW = styled.p`
  text-align: center;
  color: ${colores.pServicios};
  margin-bottom: .8rem;
  font-size: 1rem;
`
const DetallesPagina = styled(DescripcionRedes)`
font-weight: 500;
`

export {
  ContenidoDesarrollo,
  ArticuloDesarrollo,ParrafoDW,
  TituloTarjeta,DetallesPagina,
  BtnDesarrollo,
  ContenedorPlanDesarrollo,ContenedorDesarrollo
};
