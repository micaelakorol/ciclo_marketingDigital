import styled from "styled-components";
import { BtnPlanes } from "./Planes";
import { temas } from "../../styled-components/Colores";

const Personal = styled.section`
  text-align: center;
`;

const BtnPersonal = styled(BtnPlanes)`
  border: none;
  background: ${temas.bgMarronSuave};
  &:hover {
    opacity: 0.8;
  }
`;

export { Personal, BtnPersonal };
