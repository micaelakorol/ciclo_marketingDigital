import React from "react";
import { Subtitulo } from "../styled-components/Planes";
import {
  ArticuloDesarrollo,
  ContenidoDesarrollo,
  ParrafoDW,
} from "../styled-components/DesarrolloWeb";
import { ImgMarketing } from "../../styled-components/Contenido";
import {
  DescripcionRedes,
  ItemArticulo,
} from "../styled-components/GestionRedes";
import dataDesarrollo from "./Data/DataDesarrollo";
import TiposDeSitios from "./TiposDeSitios";
import PlanDesarrollo from "./PlanDesarrollo";
import { check,ilusWeb } from "../GestionRedes/Data/variables";

const PlanesDesarrolloWeb = () => {
  let beneficiosDesarrollo = dataDesarrollo.items;

  return (
    <>
      <Subtitulo>¿Por qué es tan importante contar con un sitio web?</Subtitulo>
      <ArticuloDesarrollo as="article">
        <ContenidoDesarrollo as="section">
          <ParrafoDW>
            Hoy en día, tener presencia en internet es fundamental para
            cualquier emprendimiento o empresa. Pero, ¿Cuáles son los
            beneficios?
          </ParrafoDW>

          <DescripcionRedes as="ul">
            {beneficiosDesarrollo.map((item) => (
              <ItemArticulo>
                {" "}
                <img src={check} alt="check" />
                {item.descripcion}
              </ItemArticulo>
            ))}
          </DescripcionRedes>
        </ContenidoDesarrollo>
        <ImgMarketing>
              <img src={ilusWeb} alt="ilustracion-sitio-web" className="ilustracion-mkt" />
        </ImgMarketing>
      </ArticuloDesarrollo>
      <TiposDeSitios />
      <PlanDesarrollo />
    </>
  );
};

export default PlanesDesarrolloWeb;
