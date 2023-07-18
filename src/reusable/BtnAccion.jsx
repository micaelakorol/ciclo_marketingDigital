import React from "react";
import { Ancla, BtnPlanes } from "../pages/styled-components/Planes";

const BtnAccion = ({ href, children }) => {
  return (
    <BtnPlanes className="btn btnObjetivos">
      <Ancla href={href} target="_blank" rel="noreferrer">
        {children}
      </Ancla>
    </BtnPlanes>
  );
};

export default BtnAccion;
