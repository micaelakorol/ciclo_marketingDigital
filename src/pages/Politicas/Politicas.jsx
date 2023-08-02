import React from "react";
import {
  ParrafoPolitica,
  ContenedorPolitica,
  TituloItems,
  TituloPrincipalPoliticas,
} from "../styled-components/Politicas";

const Politicas = () => {
  return (
    <>
      <ContenedorPolitica>
        <TituloPrincipalPoliticas>
          Política de privacidad
        </TituloPrincipalPoliticas>
        <TituloPrincipalPoliticas>
          Ciclo Marketing Digital y Desarrollo
        </TituloPrincipalPoliticas>
        <ParrafoPolitica>
          La presente Política de Privacidad establece los términos en que <i> Ciclo
          Marketing Digital y Desarrollo </i> usa y protege la información que es
          proporcionada por sus usuarios al momento de utilizar su sitio web.
        </ParrafoPolitica>
        <TituloItems>Información que es recogida</TituloItems>
        <ParrafoPolitica>
          Nuestro sitio web podrá recoger información personal por ejemplo:
          Nombre, información de contacto como su dirección de correo
          electrónico e información demográfica. Así mismo cuando sea necesario
          podrá ser requerida información específica para procesar algún pedido
          o realizar una entrega o facturación.
        </ParrafoPolitica>
        <TituloItems>Uso de la información recogida</TituloItems>
        <ParrafoPolitica>
          Nuestro sitio web emplea la información con el fin de proporcionar el
          mejor servicio posible, particularmente para mantener un registro de
          usuarios, de pedidos en caso que aplique, y mejorar nuestros productos
          y servicios. Es posible que sean enviados correos electrónicos
          periódicamente a través de nuestro sitio con ofertas especiales,
          nuevos productos y otra información publicitaria que consideremos
          relevante para usted o que pueda brindarle algún beneficio, estos
          correos electrónicos serán enviados a la dirección que usted
          proporcione y podrán ser cancelados en cualquier momento. Ciclo
          Marketing Digital y Desarrollo está altamente comprometido para
          cumplir con el compromiso de mantener su información segura. Usamos
          los sistemas más avanzados y los actualizamos constantemente para
          asegurarnos que no exista ningún acceso no autorizado.
        </ParrafoPolitica>
        <TituloItems>Cookies</TituloItems>
        <ParrafoPolitica>
          Nuestro sitio web emplea las cookies para poder identificar las
          páginas que son visitadas y su frecuencia. Esta información es
          empleada únicamente para análisis estadístico y después la información
          se elimina de forma permanente. Usted puede eliminar las cookies en
          cualquier momento desde su ordenador. Usted puede aceptar o negar el
          uso de cookies. Además, usted puede cambiar la configuración de su
          ordenador para declinar las cookies.
        </ParrafoPolitica>
        <TituloItems>Enlaces a Terceros</TituloItems>
        <ParrafoPolitica>
          Este sitio web pudiera contener enlaces a otros sitios que pudieran
          ser de su interés. Una vez que usted de clic en estos enlaces y
          abandone nuestra página, ya no tenemos control sobre al sitio al que
          es redirigido y por lo tanto no somos responsables de los términos o
          privacidad ni de la protección de sus datos en esos otros sitios
          terceros
        </ParrafoPolitica>
        <TituloItems>Control de su información personal</TituloItems>
        <ParrafoPolitica>
          En cualquier momento usted puede restringir la recopilación o el uso
          de la información personal que es proporcionada a nuestro sitio web.
          Cada vez que se le solicite rellenar un formulario, como el de alta de
          usuario, puede marcar o desmarcar la opción de recibir información por
          correo electrónico.
        </ParrafoPolitica>
        <TituloItems>Contacto</TituloItems>
        <ParrafoPolitica>
          Email: micaelakorol@gmail.com <br />
          Teléfono: +541124000822
        </ParrafoPolitica>
      </ContenedorPolitica>
    </>
  );
};

export default Politicas;
