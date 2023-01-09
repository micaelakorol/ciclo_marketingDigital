import React from "react";
import { MainPlanes, TituloPlan } from "../styled-components/Planes";
import PlanesDesarrolloWeb from "./DescripcionPlanes/PlanesDesarrolloWeb";
import PlanesMarketing from "./DescripcionPlanes/PlanesMarketing";
const Planes = () => {
  return (
    <MainPlanes>
      <TituloPlan>Ve aquí nuestros planes mensuales</TituloPlan>
      <PlanesMarketing />
      <PlanesDesarrolloWeb />
    </MainPlanes>
  );
};

export default Planes;
