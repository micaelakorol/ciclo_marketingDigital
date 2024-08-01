import React from "react";
import {
  ContenedorTarjetas,
  TituloTarjeta,
  DescripcionTarjeta,
} from "../../styled-components/Servicios";
import dataServicios from "../../utils/dataServicios";
import { Contenedor } from "../../styled-components/Flex";
const Tarjeta = () => {
  let tarjeta = dataServicios.items;
  return (
    <Contenedor>
      {tarjeta.map((item) => (
        <ContenedorTarjetas key={item.id}>
          {/**    <ImgTarjeta>
            <Image
              src={item.img}
              alt="Servicios Imagen"
              className="logo-tarjeta"
            />
          </ImgTarjeta>*/}
          <TituloTarjeta>{item.titulo}</TituloTarjeta>
          <DescripcionTarjeta>{item.descripcion}</DescripcionTarjeta>
          {item.descripcion2 && (
            <DescripcionTarjeta>
              {item.descripcion2 ? item.descripcion2 : null}
            </DescripcionTarjeta>
          )}
        </ContenedorTarjetas>
      ))}
    </Contenedor>
  );
};

export default Tarjeta;
