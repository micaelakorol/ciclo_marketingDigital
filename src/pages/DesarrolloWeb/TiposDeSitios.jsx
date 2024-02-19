import React from "react";
import { ContenedorTarjetas } from "../../styled-components/Servicios";
import {
  TituloTarjeta,
  ContenedorDesarrollo,
  DetallesPagina,
} from "../styled-components/DesarrolloWeb";
import tiposSitios from "./data/TiposSitios";
import { Subtitulo } from "../styled-components/Planes";

const TiposDeSitios = () => {
  let descripcionSitios = tiposSitios.items;
  return (
    <>
      <Subtitulo className="item-importante" as="h4">
        Hay varios tipos de sitios web, escoger uno dependerá unicamente de tu
        objetivo
      </Subtitulo>
      <ContenedorDesarrollo>
        {descripcionSitios.map((item) => (
          <ContenedorTarjetas key={item.id}>
            <img src={item.img} alt="icono" className="desarrollo-web" />
            <TituloTarjeta>{item.titulo}</TituloTarjeta>
            <DetallesPagina> {item.descripcion}</DetallesPagina>
          </ContenedorTarjetas>
        ))}
      </ContenedorDesarrollo>
    </>
  );
};

export default TiposDeSitios;
