import React from "react";
import {
  Header,
  ContenedorImg,
  Links,
  Elements,
  Formulario,
} from "../../styled-components/Navegacion";
import {logo} from './Variables/var'

const Navigation = () => {
  return (
    <>
      <Header>
        <ContenedorImg to={'/'}> 
        <img src={logo} alt="Logo marketing" />
        </ContenedorImg>
        <Elements> 
         <Links to="/redes-anuncios">Gestión Redes</Links>
          <Links to="/desarrollo">Desarrollo Web</Links>
       {/* Links to="/blog">Blog</Links> */}   
          <Formulario as='a' href="https://forms.gle/Sc8f1ccmL26Cci936" target="_blank" rel="noreferrer">Contacto</Formulario>
        </Elements>
      </Header>
    </>
  );
};

export default Navigation;
