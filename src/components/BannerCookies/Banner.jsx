import React from "react";
//import CookieBanner from "react-cookie-banner/lib";
import CookieConsent, { resetCookieConsentValue } from "react-cookie-consent";
import { LinkPoliticas } from "../../styled-components/BannerCookies";

const Banner = () => {
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Aceptar"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        // onAccept={}
        enableDeclineButton
        declineButtonText="Rechazar"
        onDecline={() => resetCookieConsentValue()} //elimina las cookies del sitio del cliente
      >
        Nosotros y terceros utilizamos cookies o tecnologías similares con fines
        técnicos, según se especifica en la
        <LinkPoliticas
          href="https://www.iubenda.com/privacy-policy/92793178/legal"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Política de privacidad.
        </LinkPoliticas>{" "}
        Denegar el consentimiento puede provocar que características
        relacionadas no estén disponibles. Utilice el botón “Aceptar” para dar
        su consentimiento. Utilice el botón “Rechazar” si no está de acuerdo.
      </CookieConsent>
    </>
  );
};

export default Banner;
