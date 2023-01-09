import styled, { keyframes } from "styled-components";
import { colores } from "./Colores";

const animacion = keyframes`
  0% {
    left: -200px; 
  }
  50% {
   left: 0px ;
  // background: rgba(255, 255, 255, 0.795) ;
  }
   
  100% {
     left: 0; 
  }`

const ContenedorHeaderMob = styled.header`
  width: 100%;
  height: 2.9rem;
  padding: .8rem;
  background: ${colores.blanco};
  a {
    margin-top: 1.4rem;
    font-size: 1rem;
    text-transform: uppercase;
  }
  .btnCerrar {
    height: 20px;
    position: absolute;
    right: 10px;
    text-overflow: ellipsis;
    top: 13px;
    width: 20px;
  }
  @media(min-width:768px){
    display: none;
  }
`;
const IconosMoviles = styled.section`
text-align: start;
`;
const MenuMobile = styled.nav`
  width: 200px;
  min-height: 100vh;
  background: ${colores.blanco};
  z-index: 1;
  position: absolute;
  padding: 0.5rem;
  height: auto;
  top: 0;
  left: 0;
  max-width: 300px;
  animation: ${animacion} 2s forwards;
`;

const ContainerLink = styled.section`
  display: flex;
  flex-direction: column;
`

const Modal = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: flex;
  justify-content: center;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  padding: 3.75rem;
  position: fixed;
  top: 0;
  z-index: 2;
  .logo{
    position: relative;
    right: 3rem;
    width: 100%;
  }
`;
 
export { ContenedorHeaderMob, IconosMoviles, MenuMobile, Modal, ContainerLink };
