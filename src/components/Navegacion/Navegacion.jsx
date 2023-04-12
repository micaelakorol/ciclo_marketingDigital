import React from "react";
import {
  Header,
  ContenedorImg,
  Links,
  Elements,
  Formulario,
} from "../../styled-components/Navegacion";
import {ReactComponent as Logo} from '../../assets/logo.svg'

const Navigation = () => {
  return (
    <>
      <Header>
        <ContenedorImg to={'/'}> 
        <Logo className="logo" alt='Logo marketing'/></ContenedorImg>
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
