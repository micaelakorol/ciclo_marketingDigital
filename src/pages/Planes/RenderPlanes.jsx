import React from "react";
import { MainPlanes } from "../styled-components/Planes";
import PlanesDesarrolloWeb from "./DescripcionPlanes/PlanesDesarrolloWeb";
import PlanesMarketing from "./DescripcionPlanes/PlanesMarketing";
const Planes = () => {
  return (
    <MainPlanes>
      <PlanesMarketing />
      <PlanesDesarrolloWeb />
    </MainPlanes>
  );
};

export default Planes;
