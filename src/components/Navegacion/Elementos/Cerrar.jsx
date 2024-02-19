import React from "react";
import { cerrar } from "../../../assets/var";
import Image from "../../../reusable/Image";
const Cerrar = ({setMenuMobile}) => {
  return (
    <>
      <Image
        src={cerrar}
        className="btnCerrar"
        alt="Icono cerrar"
        onClick={() => setMenuMobile(false)}
      />
    </>
  );
};

export default Cerrar;
