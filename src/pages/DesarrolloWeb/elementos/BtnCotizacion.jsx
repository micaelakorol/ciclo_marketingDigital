import React from 'react'
import { Ancla, BtnPlanes } from '../../styled-components/Planes'

const BtnCotizacion = () => {
  return (
    <BtnPlanes className="btn btnObjetivos">
    <Ancla
      href="https://forms.gle/76FDBUW7RbBaxv9N7"
      target="_blank"
      rel="noreferrer"
    >
      Solicitar cotización
    </Ancla>
  </BtnPlanes>
  )
}

export default BtnCotizacion