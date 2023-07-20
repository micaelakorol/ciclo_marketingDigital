import React from 'react'
import { IconosMoviles } from '../../../styled-components/NavegacionMob'
import { menu } from "../../../variables/var"
const Menu = ({setMenuMobile}) => {
  return (
    <IconosMoviles>
        <img
          src={menu}
          alt="Icono menu"
          onClick={() => setMenuMobile(true)}
        />
      </IconosMoviles>
  )
}

export default Menu