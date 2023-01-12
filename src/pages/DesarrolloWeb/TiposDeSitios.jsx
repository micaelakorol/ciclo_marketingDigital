import React from "react";
import { ContenedorTarjetas } from "../../styled-components/Servicios";
import { DescripcionRedes } from "../styled-components/GestionRedes";
import {
  TituloTarjeta,
  ContenedorDesarrollo,
} from "../styled-components/DesarrolloWeb";
import tiposSitios from "./Data/TiposSitios";
import { Subtitulo } from "../styled-components/Planes";

const TiposDeSitios = () => {
  let descripcionSitios = tiposSitios.items;
  return (
    <>
      <Subtitulo className="item-importante" as="h4">
        {" "}
        Hay varios tipos de sitios web, escoger uno dependerá unicamente de tu
        objetivo{" "}
      </Subtitulo>
      <ContenedorDesarrollo>
        {descripcionSitios.map((item) => (
          <ContenedorTarjetas key={item.id}>
            <img src={item.img} alt="Iconos" className="desarrollo-web" />
            <TituloTarjeta>{item.titulo}</TituloTarjeta>
            <DescripcionRedes as="details">
              <summary>¿Qué es?</summary>
              {item.descripcion}
            </DescripcionRedes>
          </ContenedorTarjetas>
        ))}
      </ContenedorDesarrollo>
    </>
  );
};

export default TiposDeSitios;
