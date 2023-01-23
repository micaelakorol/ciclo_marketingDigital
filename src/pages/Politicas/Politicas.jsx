import React from "react";
import {
  ParrafoPolitica,
  ContenedorPolitica,
  TituloItems,
  PoliticaCompleta,TituloPrincipalPoliticas
} from "../styled-components/Politicas";
import { Link } from "react-router-dom";

const Politicas = () => {
  return (
    <>
    <ContenedorPolitica>
      <TituloPrincipalPoliticas>Política de privacidad</TituloPrincipalPoliticas>
      <TituloPrincipalPoliticas>
        Ciclo Marketing Digital y Desarrollo
      </TituloPrincipalPoliticas>
      <ParrafoPolitica>
        {" "}
        Este Sitio Web recoge algunos Datos Personales de sus Usuarios. <br />
        <Link to='/terminos-y-condiciones'>Ver Terminos y Condiciones</Link>
      </ParrafoPolitica>

      <TituloItems>
        Titular y Responsable del tratamiento de los Datos
      </TituloItems>
      <ParrafoPolitica>Ciclo Marketing Digital y Desarrollo</ParrafoPolitica>
      <ParrafoPolitica>
        Correo electrónico de contacto del Titular: micaelakorol@gmail.com{" "}
        <br />
        Teléfono del Titular: +541124000822
      </ParrafoPolitica>

      <TituloItems>
        Datos Personales tratados para las siguientes finalidades y utilizando
        los siguientes servicios:
      </TituloItems>
      <ParrafoPolitica>
        <b>Estadisticas:</b> Google Analytics 4. Datos Personales: Datos de uso
      </ParrafoPolitica>
      <ParrafoPolitica>
        <b>Gestión de Etiquetas: </b> Google Tag Manager Datos Personales: Datos
        de uso
      </ParrafoPolitica>
      <ParrafoPolitica>
        <b>De medición:</b> Pixel de Facebook
      </ParrafoPolitica>
      <ParrafoPolitica>
        <b>Cookies de preferencias</b>: Almacenan las preferencias del Usuario
        detectadas en este Sitio Web en el dominio local como, por ejemplo, su
        zona horaria y región.
      </ParrafoPolitica>
      <TituloItems>Cookies</TituloItems>
      <ParrafoPolitica>
        Nuestro sitio web emplea las cookies para poder identificar las páginas
        que son visitadas y su frecuencia. Esta información es empleada
        únicamente para análisis estadístico y después la información se elimina
        de forma permanente. Usted puede eliminar las cookies en cualquier
        momento desde su ordenador. Usted puede aceptar o negar el uso de
        cookies. Además, usted puede cambiar la configuración de su ordenador
        para declinar las cookies.
      </ParrafoPolitica>

      <PoliticaCompleta
        href={require("../../components/Footer/politicaPrivacidad.pdf")}
        target="_blank"
      >
        Ver Politica de Privacidad Completa
      </PoliticaCompleta>
    </ContenedorPolitica>
    </>
  );
};

export default Politicas;
