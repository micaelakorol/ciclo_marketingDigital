import React from "react";
import { TituloPrincipal } from "../../styled-components/Servicios";
import {
  Articulo,
  ContenidoPrincipal,
  PMarketing,
  ImgMarketing,
  Btn,
} from "../../styled-components/Contenido";
import {ReactComponent as ContenidoImg} from "../../assets/contenido.svg"

const Contenido = () => {
  return (
    <>
    <ContenidoPrincipal>
    <TituloPrincipal>
    « Es imposible venderle a quien no conoces »
      </TituloPrincipal>
      <Articulo>
        <PMarketing>
          Las redes sociales son una necesidad para tu negocio. Además es una poderosa herramienta para identificar a tus potenciales clientes, posicionar tu marca y tus productos. <br /> Comenzá tu proceso de venta escogiendo el plan adecuado.
          <Btn to={'/planes'}>Elige un plan para tu negocio</Btn>
        </PMarketing>

        <ImgMarketing>
        <ContenidoImg className="contenido" alt='Ilustracion marketing'/>
        </ImgMarketing>
      </Articulo>
    </ContenidoPrincipal></>
  );
};

export default Contenido;
