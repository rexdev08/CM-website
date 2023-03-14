//react
import React from "react";
import ReactDOM from "react-dom/client";

//react-router-dom
import { RouterProvider } from "react-router-dom";
import { createHashRouter } from "react-router-dom";

//pages
import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import LoginAdmin from "./pages/LoginAdmin";
import Resultados from "./pages/Resultados";
import ErrorPage from "./pages/ErrorPage";

//componentes
import Crear from "./components/Crear";
import ListadoPacientes from "./components/Listado";
import GlobalStyles from "./GlobalStyles";

//router
const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "admin",
    element: <LoginAdmin />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      { path: "crear", element: <Crear /> },
      { path: "pacientes", element: <ListadoPacientes /> },
      // { path: "perfil", element: <Login /> },
    ],
  },
  {
    path: "resultados",
    element: <Resultados />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
