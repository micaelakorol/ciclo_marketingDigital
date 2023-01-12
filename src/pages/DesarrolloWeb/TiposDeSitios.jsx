import React from "react";
import {
  ContenedorTarjetas,
} from "../../styled-components/Servicios";
import {
  ContenedorRedes,
  DescripcionRedes,
} from "../styled-components/GestionRedes";
import {TituloTarjeta} from '../styled-components/DesarrolloWeb'
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
      <ContenedorRedes>
        {descripcionSitios.map((item) => (
          <ContenedorTarjetas key={item.id}>
            <img src={item.img} alt="Iconos" className="gestion-redes" />
            <TituloTarjeta>{item.titulo}</TituloTarjeta>
            <DescripcionRedes as="li">{item.descripcion}</DescripcionRedes>
          </ContenedorTarjetas>
        ))}
      </ContenedorRedes>
    </>
  );
};

export default TiposDeSitios;
