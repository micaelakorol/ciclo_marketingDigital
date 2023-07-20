import React from "react";
import {Subtitulo } from "../../styled-components/Planes";
import { TituloPrincipal } from "../../../styled-components/Servicios";
import {
  ArticuloRedes,
  DescripcionRedes,
  ItemArticulo,
} from "../../styled-components/GestionRedes";
import { ImgMarketing } from "../../../styled-components/Contenido";
import { ilusMkt } from "../Variables/variables";
import { dataGestion } from "./objetivos";
import BtnAccion from "../../../reusable/BtnAccion";
import Check from "../../../reusable/Check";

const ObjetivosRedes = () => {
  let queHare = dataGestion.items;
  return (
    <>
      <Subtitulo>
      Alcanzá todo tu potencial en el mundo digital
      </Subtitulo>
      <ArticuloRedes as="article">
        <DescripcionRedes as="ul">
        <TituloPrincipal as="h4">¿Cómo lo vamos a hacer?</TituloPrincipal>
          {queHare.map((item) => (
            <ItemArticulo key={item.id}>
            <Check /> {item.items}
            </ItemArticulo>
          ))}
          <BtnAccion href="https://forms.gle/UfBkXRvRb2Rj8mp4A">
            Me interesa
          </BtnAccion>
        </DescripcionRedes>
        <ImgMarketing>
          <img src={ilusMkt} alt="ilustracion" className="ilustracion-mkt" />
        </ImgMarketing>
      </ArticuloRedes>
    </>
  );
};

export default ObjetivosRedes;
