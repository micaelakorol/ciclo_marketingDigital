import React from "react";
import dataDesarrollo from "../data/DataDesarrollo";
import ParrafoPrincipal from "./ParrafoPrincipal";
import ImageSitioWeb from "./ImageSitioWeb";
import Check from "../../../reusable/Check";
import { DescripcionRedes, ItemArticulo } from "../../styled-components/GestionRedes";
import { ContenidoDesarrollo } from "../../styled-components/DesarrolloWeb";
const List = () => {
  let beneficiosDesarrollo = dataDesarrollo.items;
  return (
    <>
      <ContenidoDesarrollo as="section">
        <ParrafoPrincipal />
        <DescripcionRedes as="ul">
          {beneficiosDesarrollo.map((item) => (
            <ItemArticulo>
              {" "}
              <Check />
              {item.descripcion}
            </ItemArticulo>
          ))}
        </DescripcionRedes>
      </ContenidoDesarrollo>
      <ImageSitioWeb />
    </>
  );
};

export default List;
