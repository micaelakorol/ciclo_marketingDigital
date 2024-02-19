import React from 'react'
import { ImgMarketing } from '../../../styled-components/Contenido';
import { ilusWeb } from '../../../assets/var';
import Image from '../../../reusable/Image';

const ImageSitioWeb = () => {
  return (
    <ImgMarketing>
    <Image
      src={ilusWeb}
      alt="ilustracion-sitio-web"
      className="ilustracion-mkt"
    />
  </ImgMarketing>
  )
}

export default ImageSitioWeb