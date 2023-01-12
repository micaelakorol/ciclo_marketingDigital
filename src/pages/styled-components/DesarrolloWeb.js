import styled from "styled-components";
import { DescripcionTarjeta } from "../../styled-components/Servicios";
import { colores } from "../../styled-components/Colores";
import { ArticuloRedes, ContenedorPlanRedes } from "./GestionRedes";
import { BtnPlanes } from "./Planes";

const ContenidoDesarrollo = styled(DescripcionTarjeta)`
  text-align: center;
  font-size: 1.1rem;
  margin-top: 2rem;
`;

const ArticuloDesarrollo = styled(ArticuloRedes)``;

const TituloTarjeta = styled.h5`
  color: ${colores.pServicios};
  margin-bottom: 1rem;
`;

const BtnDesarrollo = styled(BtnPlanes)`
  width: 60%;
  margin-top: 1rem;
  @media (max-width: 480px) {
    width: 100%;
    a {
      font-size: 0.9rem;
    }
  }
`;

const ContenedorPlanDesarrollo = styled(ContenedorPlanRedes)`
  @media (max-width: 768px) {
    width: 80vw;
    padding: .6rem;
  }
`;

export {
  ContenidoDesarrollo,
  ArticuloDesarrollo,
  TituloTarjeta,
  BtnDesarrollo,
  ContenedorPlanDesarrollo,
};
