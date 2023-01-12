import styled from "styled-components";
import { colores, temas } from "../../styled-components/Colores";
import { GridContainer } from "../../styled-components/Grid";
import { DescripcionTarjeta } from "../../styled-components/Servicios";
import { Articulo } from "../../styled-components/Contenido";

const ContenedorRedes = styled(GridContainer)`
  width: 90vw;
  margin: 2rem auto;
  .gestion-redes {
    width: 45%;
  }
  @media (max-width: 768px) {
    width: 50vw;
  }
  @media (max-width: 480px) {
    width: 100vw;
  }
`;

const DescripcionRedes = styled(DescripcionTarjeta)`
  text-align: center;
  font-weight: 600;
  .btnObjetivos {
    width: 30%;
    margin-top: 1.4rem;
    transition: all 1s;
  }
  .btnObjetivos:hover {
    opacity: 0.9;
    width: 33%;
  }
  @media (max-width: 768px) {
    .btnObjetivos {
      width: 80%;
    }
  }
`;

const ArticuloRedes = styled(Articulo)`
  .ilustracion-mkt {
    margin: 2rem;
    width: 45%;
  }
  @media (max-width: 768px) {
    .ilustracion-mkt {
      display: none;
    }
  }
`;
const ItemArticulo = styled.li`
  text-align: center;
  margin: 0.3rem;
  color: ${colores.links};
  list-style: none;
`;

const ContenedorPlanRedes = styled.section`
  background: ${colores.blanco};
  padding: 2rem;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 40%;
  margin: 2rem auto;
  max-height: 100vh;
  max-width: 100vw;
  padding: 0.5rem;
  border-radius: 0.6rem;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background: ${temas.bgPlanes};
    .btn {
      border: 1.7px dashed ${colores.blanco};
    }
  }

`;

export {
  ContenedorRedes,
  DescripcionRedes,
  ArticuloRedes,
  ItemArticulo,
  ContenedorPlanRedes,
};
