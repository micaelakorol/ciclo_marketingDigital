import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Contacto from "../pages/Contacto/Contacto";
import App from "../App";
import Render from "../components/Render";
import Blog from "../pages/Blog/Blog";
import DesarrolloWeb from "../pages/PlanesDesarrollo/DesarrolloWeb";
import PlanesMarketing from "../pages/PlanesMarketing/PlanesMarketing";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                errorElement: <Error />,
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
                        element: <PlanesMarketing />,
                    },
                    {
                        path: "/contacto",
                        element: <Contacto />,
                    },
                    {
                        path: "/blog",
                        element: <Blog />,
                    },
                    {
                        path: "*",
                        element: <Error />,
                    },
                ],
            },
        ],
    },
]);
