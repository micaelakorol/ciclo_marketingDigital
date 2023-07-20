import styled from "styled-components";
import { colores } from "./Colores";
import { Link, NavLink } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  height: 2.9rem;
  padding: 0.5rem;
  background: ${colores.blanco};
  display: grid;
  grid-template-columns: repeat(2, 40% 60%);
  margin-bottom: 0.1rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  @media (max-width: 767px) {
    display: none;
  }
`;

const Elementos = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 4rem;
`;

const Links = styled(NavLink)`
  color: ${colores.links};
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0.5rem;
  text-transform: uppercase;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;


const ContenedorImg = styled(Link)`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-left: 3rem;
  .logo {
    padding: 0.5rem;
  }
`;

export { Elementos, ContenedorImg, Links, Header };
