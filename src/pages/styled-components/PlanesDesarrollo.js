import styled from "styled-components";
import { DescripcionPlan } from "./Planes";
import { colores, temas } from "../../styled-components/Colores";


const DescripcionDesarrollo = styled(DescripcionPlan)`
  font-weight: 700;
  summary {
    color: ${colores.oscuro};
  }
  summary::marker {
    color: ${temas.bgMarronSuave};
  }
`;

export { DescripcionDesarrollo };
