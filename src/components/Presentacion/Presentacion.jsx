import React from "react";
import {
  ContenedorPresentacion,
  Titulo,
  Descripcion,
  InformacionPrincipal,
  ContenedorBg,
} from "../../styled-components/Presentacion";
import {ReactComponent as ImagenPresentacion} from '../../assets/img.svg'

const Presentacion = () => {
  return (
    <>
      <ContenedorPresentacion>
        <InformacionPrincipal>
          <Titulo>¡Hola! Soy Nicolas</Titulo>
          <Descripcion>
           Mi proposito es ayudarte a impulsar tu marca y hacer crecer tu negocio.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquid quasi quo minus vel quod doloremque amet illum rerum nobis quas eum numquam ex ipsum porro, natus sunt iste necessitatibus!
          </Descripcion>
        </InformacionPrincipal>

        <ContenedorBg>
        <ImagenPresentacion className='Imgpersona' alt="presentacion nicolas"/>
        </ContenedorBg>
      </ContenedorPresentacion>

      {/* ------------------------------------------------------------------------------- */}
    </>
  );
};

export default Presentacion;
