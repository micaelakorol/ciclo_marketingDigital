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
          <Links to="/planes">Planes</Links>
          <Links to="/blog">Blog</Links>
          <Formulario as='a' href="https://docs.google.com/forms/d/e/1FAIpQLSeV2UXaBdYPZUWYGpAbYXLs7zLXxz6SH4SlHECcoHoDYeDGnQ/viewform" target="_blank" rel="noopener noreferrer">Contacto</Formulario>
        </Elements>
      </Header>
    </>
  );
};

export default Navigation;
