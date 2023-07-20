import React from "react";
import { cerrar } from "../../../variables/var";
const Cerrar = ({setMenuMobile}) => {
  return (
    <>
      <img
        src={cerrar}
        className="btnCerrar"
        alt="Icono cerrar"
        onClick={() => setMenuMobile(false)}
      />
    </>
  );
};

export default Cerrar;
