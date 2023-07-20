import React from 'react'
import { ImgMarketing } from '../../../styled-components/Contenido';
import { ilusWeb } from '../../../variables/var';

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