import React from "react";
import { TituloPrincipal } from "../../styled-components/Servicios";
import {
  Articulo,
  ContenidoPrincipal,
  PMarketing,
  ImgMarketing,
  Btn,
} from "../../styled-components/Contenido";
const Contenido = () => {
  let img = 'https://res.cloudinary.com/dgqyqd2pa/image/upload/v1689607305/contenido_kpcbsm.svg'
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
          <img src={img} className="contenido" alt="Ilustracion marketing"/>
          </ImgMarketing>
        </Articulo>
      </ContenidoPrincipal>
    </>
  );
};

export default Contenido;
