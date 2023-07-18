import React from 'react'
import { ilusWeb } from "../../GestionRedes/Variables/variables";
import { ImgMarketing } from '../../../styled-components/Contenido';

const ImageSitioWeb = () => {
  return (
    <ImgMarketing>
    <img
      src={ilusWeb}
      alt="ilustracion-sitio-web"
      className="ilustracion-mkt"
    />
  </ImgMarketing>
  )
}

export default ImageSitioWeb