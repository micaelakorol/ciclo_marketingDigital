import React from "react";
import { Subtitulo } from "../styled-components/Planes";
import { ArticuloDesarrollo } from "../styled-components/DesarrolloWeb";
import TiposDeSitios from "./TiposDeSitios";
import PlanDesarrollo from "./PlanDesarrollo";
import List from "./elementos/List";
const PlanesDesarrolloWeb = () => {
  return (
    <>
      <Subtitulo>¿Por qué es tan importante contar con un sitio web?</Subtitulo>
      <ArticuloDesarrollo as="article">
        <List />
      </ArticuloDesarrollo>
      <TiposDeSitios />
      <PlanDesarrollo />
    </>
  );
};

export default PlanesDesarrolloWeb;
