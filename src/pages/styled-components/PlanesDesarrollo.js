import styled from "styled-components";
import { DescripcionPlan, MapPlanes, VistaPlanes } from "./Planes";
import { colores, temas } from "../../styled-components/Colores";

const PlanesDesarrollo = styled(VistaPlanes)`
  display: grid;
  grid-template-columns: repeat(3, 28%);
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
  width: 295px;
  max-width: 100vw;
`;

const DescripcionDesarrollo = styled(DescripcionPlan)`
  font-weight: 700;
  summary {
    color: ${colores.oscuro};
  }
  summary::marker {
    color: ${temas.bgMarronSuave};
  }
`;

export { PlanesDesarrollo, MapPlanesDesarrollo, DescripcionDesarrollo };
