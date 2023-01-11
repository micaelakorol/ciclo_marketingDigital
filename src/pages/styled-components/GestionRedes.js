import styled from "styled-components";
import { colores } from "../../styled-components/Colores";
import { GridContainer } from "../../styled-components/Grid";
import { DescripcionTarjeta } from "../../styled-components/Servicios";
import { Articulo } from "../../styled-components/Contenido";
import { TarjetasPlanes } from "./Planes";

const ContenedorRedes = styled(GridContainer)`
  width: 90vw;
  margin: 2rem auto;
  .gestion-redes {
    width: 40%;
  }
`;

const DescripcionRedes = styled(DescripcionTarjeta)`
  text-align: center;
  font-weight: 600;
`;

const ArticuloRedes = styled(Articulo)`
  .ilustracion-mkt {
    margin: 2rem;
    width: 40%;
  }
  .btnObjetivos {
    width: 30%;
    margin-top: 1.4rem;
    transition: all 1s;
  }
  .btnObjetivos:hover{
    opacity: .9;
    width: 33%;
  }
  @media(max-width: 768px){
    .btnObjetivos{
      width: 80%;
    }
    .ilustracion-mkt{
      width: 70%;
    }
  }
`;
const ItemArticulo = styled.li`
  text-align: center;
  margin: 0.3rem;
  color: ${colores.links};
`;

const ContenedorPlanRedes = styled(TarjetasPlanes)`
padding: 2rem;
width: 40%;
margin-top: 2rem;
`

export { ContenedorRedes, DescripcionRedes, ArticuloRedes, ItemArticulo,ContenedorPlanRedes };
