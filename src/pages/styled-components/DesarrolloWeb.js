import styled from "styled-components";
import { DescripcionTarjeta } from "../../styled-components/Servicios";
import { colores } from "../../styled-components/Colores";
import { ArticuloRedes, ContenedorPlanRedes, DescripcionRedes } from "./GestionRedes";
import { Flex } from "../../styled-components/Flex";

const ContenedorDesarrollo = styled(Flex)`
  margin: 1rem auto;
  .desarrollo-web{
    width: 45%;
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
  ContenedorPlanDesarrollo,ContenedorDesarrollo
};
