import React from 'react'
import { IconosMoviles } from '../../../styled-components/NavegacionMob'
import { menu } from "../../../assets/var"
import Image from '../../../reusable/Image'
const Menu = ({setMenuMobile}) => {
  return (
    <IconosMoviles>
        <Image
          src={menu}
          alt="Icono menu"
          onClick={() => setMenuMobile(true)}
        />
      </IconosMoviles>
  )
}

export default Menu