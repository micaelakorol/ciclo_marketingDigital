import React from "react";
import {
  ContenedorServicios,
  ContenedorTarjetas,
  TituloTarjeta,
  DescripcionTarjeta,
  ImgTarjeta,
} from "../../styled-components/Servicios";
import data from "./Data";

const Tarjeta = () => {
  let tarjeta = data.items;

  return (
    <>
      <ContenedorServicios>
        {tarjeta.map((item) => (
          <ContenedorTarjetas key={item.id}>
            <ImgTarjeta>
              <img
                src={item.img}
                alt="Servicios Imagen"
                className="logo-tarjeta"
              />
            </ImgTarjeta>
            <TituloTarjeta>{item.titulo}</TituloTarjeta>
            <DescripcionTarjeta>{item.descripcion}</DescripcionTarjeta>
            {item.descripcion2 && 
            <DescripcionTarjeta>
              {item.descripcion2 ? item.descripcion2 : null}
            </DescripcionTarjeta>}
          </ContenedorTarjetas>
        ))}
      </ContenedorServicios>
    </>
  );
};

export default Tarjeta;
