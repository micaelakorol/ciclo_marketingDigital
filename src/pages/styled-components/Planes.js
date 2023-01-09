import styled from "styled-components";
import { colores, temas } from "../../styled-components/Colores";

const MainPlanes = styled.main`
  background: ${temas.bgPlanes};
  filter: saturate(1.3);
  height: 100vh;
  width: 100vw;
  h3 {
    font-size: 1.4rem;
    margin-top: 1rem;
  }
`;

const VistaPlanes = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-y: hidden;
  margin: 0.8rem auto;
  border-radius: 0.5rem;
  padding: .7rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    width: 75vw;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100vw;
    padding: 0;
  }
`;

const BodyPlanes = styled.section`
  margin-top: .8rem;
`;

const Subtitulo = styled.h4`
  text-align: center;
  margin-top: 1rem;
  padding: .5rem;
  font-size: 1.2rem;
  color: ${colores.oscuroSuave};
  background: ${temas.bgMarronSuave};
`;
// Tarjetas:
const MapPlanes = styled.section`
  background: ${colores.blanco};
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 0.4rem auto;
  max-height: 100vh;
  width: 270px;
  max-width: 90vw;
  padding: 0.7rem;
  border-radius: 0.6rem;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background: ${temas.bgPlanes};
    .btn {
      border: 1.7px dashed ${colores.blanco};
    }
  }
  @media (max-width: 480px) {
    height: auto;
    padding: 0.6rem;
    p,
    b,
    .btn {
      font-size: 1.1rem;
    }
    h5 {
      font-size: 1.4rem;
    }
  }
`;

const TituloPlan = styled.h3`
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  color: ${colores.oscuro};
`;

const DescripcionPlan = styled.ul`
  font-weight: 700;
  text-align: center;
  margin-top: 0.5rem;
  font-size: .8rem;
  color: ${colores.oscuroSuave};
`;
const ContenedorPrecio = styled.section`
  margin: 0.5rem 0;
  text-align: center;
  b{
font-size: 2.5rem;
color: ${colores.precio};  
}
`;

const Precio = styled.p`
font-weight: 700;
`

const BtnPlanes = styled.button`
  background: ${colores.oscuro};
  border: 1.7px solid ${colores.blanco};
  width: 90%;
  padding: 0.4rem;
  border-radius: 0.4rem;
  cursor: pointer;
  filter: saturate(1.1);
  a {
    text-transform: uppercase;
    font-weight: 500;
    color: ${colores.blanco};
    filter: contrast(3);
  }
  .wsp {
    position: relative;
    top: .2rem;
  }
`;

export {
  MainPlanes,
  VistaPlanes,
  MapPlanes,
  BodyPlanes,
  BtnPlanes,
  Precio,
  Subtitulo,
  TituloPlan,ContenedorPrecio,
  DescripcionPlan,
};
