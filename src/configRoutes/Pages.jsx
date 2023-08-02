import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import App from "../App";
import Render from "../components/Render";
import DesarrolloWeb from "../pages/DesarrolloWeb/DesarrolloWeb";
import Politicas from "../pages/Politicas/Politicas";
import Error from "../pages/Error/Error";
import GestionRedes from "../pages/GestionRedes/Gestion/GestionRedes";
import Nosotros from "../pages/SobreNosotros/Nosotros";
  
 export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="" element={<Render />} />
        <Route path="/desarrollo" element={<DesarrolloWeb />} />
        <Route path="/redes-anuncios" element={<GestionRedes />} />
        <Route path='/politicas-de-privacidad' element={<Politicas />} />
        <Route path='/sobre-nosotros' element={<Nosotros />} />
        <Route path='*' element={<Error />} />
      </Route>
    )
  );