import styled from "styled-components";
import { BtnPlanes, DescripcionPlan, MapPlanes, VistaPlanes } from "./Planes";
import { colores, temas } from "../../styled-components/Colores";

const PlanesDesarrollo = styled(VistaPlanes)`
  display: grid;
  grid-template-columns: repeat(3, 25%);
  justify-content: center;
  gap: 1rem;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 50%);
    width: 75vw;
    gap: 1.3rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100vw;
    padding: 0;
  }
`;

const MapPlanesDesarrollo = styled(MapPlanes)`
  width: 290px;
`;
const BtnDesarrollo = styled(BtnPlanes)`
  background: ${temas.bgBtnDesarrollo};
  filter: saturate(1.3);
  a {
    color: ${colores.oscuro};
  }
`;

const DescripcionDesarrollo = styled(DescripcionPlan)`
  summary {
    color: ${colores.oscuro};
  }
  summary::marker {
    color: ${temas.bgBtnDesarrollo};
  }
`;

export {
  PlanesDesarrollo,
  MapPlanesDesarrollo,
  BtnDesarrollo,
  DescripcionDesarrollo,
};
