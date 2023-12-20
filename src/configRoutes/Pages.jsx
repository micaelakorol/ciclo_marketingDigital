import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Render from "../components/Render";
import DesarrolloWeb from "../pages/DesarrolloWeb/DesarrolloWeb";
import Politicas from "../pages/Politicas/Politicas";
import Error from "../pages/Error/Error";
import GestionRedes from "../pages/GestionRedes/Gestion/GestionRedes";
import Nosotros from "../pages/SobreNosotros/Nosotros";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Render />,
      },
      {
        path: "/desarrollo",
        element: <DesarrolloWeb />,
      },
      {
        path: "/redes-anuncios",
        element: <GestionRedes />,
      },
      {
        path: "/politicas-de-privacidad",
        element: <Nosotros />,
      },
      {
        path: "/sobre-nosotros",
        element: <Politicas />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
