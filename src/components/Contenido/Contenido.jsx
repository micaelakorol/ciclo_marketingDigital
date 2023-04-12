import React from "react";
import { TituloPrincipal } from "../../styled-components/Servicios";
import {
  Articulo,
  ContenidoPrincipal,
  PMarketing,
  ImgMarketing,
  Btn,
} from "../../styled-components/Contenido";
import { ReactComponent as ContenidoImg } from "../../assets/contenido.svg";

const Contenido = () => {
  return (
    <>
      <ContenidoPrincipal>
        <TituloPrincipal>
          ¡Llegá a tu audiencia sin perseguirlos! 
        </TituloPrincipal>
        <Articulo>
          <PMarketing>
           <h4>Las redes sociales son una necesidad para tu negocio. Además es una
            poderosa herramienta para identificar a tus potenciales clientes,
            posicionar tu marca y tus productos.</h4> 
            <b>Comenzá tu proceso de venta escogiendo el plan adecuado. </b>
            <Btn to={"/redes-anuncios"}>Elige un plan para tu negocio</Btn>
          </PMarketing>

          <ImgMarketing>
            <ContenidoImg className="contenido" alt="Ilustracion marketing" />
          </ImgMarketing>
        </Articulo>
      </ContenidoPrincipal>
    </>
  );
};

export default Contenido;
