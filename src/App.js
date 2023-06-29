import React from "react";
import './styles/index.css'
import Navegacion from './components/Navegacion/Navegacion'
import { Outlet } from "react-router-dom";
import NavegacionMovil from "./components/Navegacion/NavegacionMovil";

const App = () => {
  return <>
 <Navegacion />
 <NavegacionMovil />
 <Outlet />
  </>;
};

export default App;
