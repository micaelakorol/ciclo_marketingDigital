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
        Te ayudamos a potenciar y administrar tus redes sociales
      </Subtitulo>
      <TituloPrincipal as="h4">¿Cómo lo vamos a hacer?</TituloPrincipal>
      <ArticuloRedes as="article">
        <DescripcionRedes as="ul">
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
