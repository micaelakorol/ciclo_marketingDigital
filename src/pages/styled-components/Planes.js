import styled from "styled-components";
import { colores } from "../../styled-components/Colores";

const Subtitulo = styled.h3`
  text-align: center;
  margin-top: 1rem;
  padding: 0.5rem;
  font-size: 1.2rem;
  color: ${colores.oscuro};
  background: ${colores.grayLight};
  filter: saturate(1.2);
  font-weight: 600;
`;

const TituloDesarrollo = styled(Subtitulo)`
  background: transparent;
  margin: 0;
`;

const TituloPlan = styled.h3`
  text-transform: uppercase;
  text-align: center;
  color: ${colores.oscuro};
`;

const DescripcionPlan = styled.ul`
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: ${colores.oscuroSuave};
`;

const BtnPlanes = styled.div`
  background: ${colores.oscuro};
  border: 1.7px solid ${colores.blanco};
  width: 90%;
  padding: 0.4rem;
  border-radius: 0.4rem;
  margin: auto;
  cursor: pointer;
  filter: saturate(1.1);
  .wsp {
    position: relative;
    top: 0.2rem;
  }
  &:hover {
    background-color: #ffd600;
  }
`;

const Ancla = styled.a`
  text-transform: uppercase;
  font-weight: 500;
  color: ${colores.blanco};
  filter: contrast(3);
  &:hover {
    color: ${colores.oscuro};
  }
`;

export {
  BtnPlanes,
  Subtitulo,
  TituloPlan,
  DescripcionPlan,
  Ancla,
  TituloDesarrollo,
};
