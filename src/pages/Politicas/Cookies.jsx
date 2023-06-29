import React from "react";
import {
  ContenedorPolitica,
  ParrafoPolitica,
  TituloPolitica,TituloPrincipalPoliticas
} from "../styled-components/Politicas";

const Cookies = () => {
  return (
    <ContenedorPolitica>
      <TituloPrincipalPoliticas>POLÍTICA DE COOKIES</TituloPrincipalPoliticas>
      <TituloPrincipalPoliticas>Ciclo Marketing Digital y Desarrollo</TituloPrincipalPoliticas>
      <ParrafoPolitica>
        El acceso a este Sitio Web puede implicar la utilización de cookies. Las
        cookies son pequeñas cantidades de información que se almacenan en el
        navegador utilizado por cada Usuario —en los distintos dispositivos que
        pueda utilizar para navegar— para que el servidor recuerde cierta
        información que posteriormente y únicamente el servidor que la
        implementó leerá. Las cookies facilitan la navegación, la hacen más
        amigable, y no dañan el dispositivo de navegación.
      </ParrafoPolitica>
      <ParrafoPolitica>
        Las cookies son procedimientos automáticos de recogida de información
        relativa a las preferencias determinadas por el Usuario durante su
        visita al Sitio Web con el fin de reconocerlo como Usuario, y
        personalizar su experiencia y el uso del Sitio Web, y pueden también,
        por ejemplo, ayudar a identificar y resolver errores.
      </ParrafoPolitica>
      <ParrafoPolitica>
        La información recabada a través de las cookies puede incluir la fecha y
        hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha
        estado en el Sitio Web y los sitios visitados justo antes y después del
        mismo. Sin embargo, ninguna cookie permite que esta misma pueda
        contactarse con el número de teléfono del Usuario o con cualquier otro
        medio de contacto personal. Ninguna cookie puede extraer información del
        disco duro del Usuario o robar información personal. La única manera de
        que la información privada del Usuario forme parte del archivo Cookie es
        que el usuario dé personalmente esa información al servidor.
      </ParrafoPolitica>
      <ParrafoPolitica>
        Las cookies que permiten identificar a una persona se consideran datos
        personales. Por tanto, a las mismas les será de aplicación la Política
        de Privacidad anteriormente descrita. En este sentido, para la
        utilización de las mismas será necesario el consentimiento del Usuario.
        Este consentimiento será comunicado, en base a una elección auténtica,
        ofrecido mediante una decisión afirmativa y positiva, antes del
        tratamiento inicial, removible y documentado.
      </ParrafoPolitica>
      <TituloPolitica>Cookies de terceros</TituloPolitica>
      <ParrafoPolitica>
        Son cookies utilizadas y gestionadas por entidades externas que
        proporcionan a Ciclo Marketing Digital y Desarrollo servicios
        solicitados por este mismo para mejorar el Sitio Web y la experiencia
        del usuario al navegar en el Sitio Web. Los principales objetivos para
        los que se utilizan cookies de terceros son la obtención de estadísticas
        de accesos y analizar la información de la navegación, es decir, cómo
        interactúa el Usuario con el Sitio Web.
      </ParrafoPolitica>
      <ParrafoPolitica>
        La información que se obtiene se refiere, por ejemplo, al número de
        páginas visitadas, el idioma, el lugar a la que la dirección IP desde el
        que accede el Usuario, el número de Usuarios que acceden, la frecuencia
        y reincidencia de las visitas, el tiempo de visita, el navegador que
        usan, el operador o tipo de dispositivo desde el que se realiza la
        visita. Esta información se utiliza para mejorar el Sitio Web, y
        detectar nuevas necesidades para ofrecer a los Usuarios un Contenido y/o
        servicio de óptima calidad. En todo caso, la información se recopila de
        forma anónima y se elaboran informes de tendencias del Sitio Web sin
        identificar a usuarios individuales.
      </ParrafoPolitica>
      <ParrafoPolitica>
        Puede obtener más información sobre las cookies, la información sobre la
        privacidad, o consultar la descripción del tipo de cookies que se
        utiliza, sus principales características, periodo de expiración, etc. en
        el siguiente(s) enlace(s):
        <a href="https://policies.google.com/technologies/cookies?hl=en-US">
          {" "}
          Google Analytics
        </a>
        <a href="https://developers.google.com/tag-platform/devguides/cookies">
          {" "}
          Google Tag Manager
        </a>
        <a href="https://es-la.facebook.com/help/1896641480634370/">
          {" "}
          Pixel de Facebook{" "}
        </a>
        La(s) entidad(es) encargada(s) del suministro de cookies podrá(n) ceder
        esta información a terceros, siempre y cuando lo exija la ley o sea un
        tercero el que procese esta información para dichas entidades.
      </ParrafoPolitica>
      <TituloPolitica>Deshabilitar, rechazar y eliminar cookies</TituloPolitica>
      <ParrafoPolitica>
        El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o
        parcialmente— instaladas en su dispositivo mediante la configuración de
        su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox,
        Safari, Explorer). En este sentido, los procedimientos para rechazar y
        eliminar las cookies pueden diferir de un navegador de Internet a otro.
        En consecuencia, el Usuario debe acudir a las instrucciones facilitadas
        por el propio navegador de Internet que esté utilizando. En el supuesto
        de que rechace el uso de cookies —total o parcialmente— podrá seguir
        usando el Sitio Web, si bien podrá tener limitada la utilización de
        algunas de las prestaciones del mismo.
      </ParrafoPolitica>
    </ContenedorPolitica>
  );
};

export default Cookies;
