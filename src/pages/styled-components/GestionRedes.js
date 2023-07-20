import styled from "styled-components";
import { colores, temas } from "../../styled-components/Colores";
import { Flex } from "../../styled-components/Flex";
import {
  ContenedorTarjetas,
  DescripcionTarjeta,
} from "../../styled-components/Servicios";
import { Articulo } from "../../styled-components/Contenido";

const ContenedorRedes = styled(Flex)`
  width: 85vw;
  margin: 2rem auto;
  .gestion-redes {
    width: 45%;
  }
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const ContenedorTarjetaRD = styled(ContenedorTarjetas)`
  width: 22%;
  text-align: center;
  @media (max-width: 480px) {
    width: 70vw;
  }
`;

const DescripcionRedes = styled(DescripcionTarjeta)`
  text-align: center;
  font-weight: 600;
  .btnObjetivos {
    width: 50%;
    margin-top: 0.6rem;
    transition: all 1s;
  }
  .btnObjetivos:hover {
    opacity: 0.9;
    width: 55%;
  }
  @media (max-width: 768px) {
    .btnObjetivos {
      width: 90%;
    }
  }
`;

const ArticuloRedes = styled(Articulo)`
  .ilustracion-mkt {
    margin-top: 3rem;
    width: 40%;
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
  width: 45%;
  margin: 2rem auto;
  max-height: 100vh;
  max-width: 100vw;
  padding: 0.5rem;
  border-radius: 0.6rem;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background: ${temas.bgPresentacion};
    .btn {
      border: 1.7px dashed ${colores.blanco};
    }
  }
`;

export {
  ContenedorRedes,
  DescripcionRedes,
  ContenedorTarjetaRD,
  ArticuloRedes,
  ItemArticulo,
  ContenedorPlanRedes,
};
