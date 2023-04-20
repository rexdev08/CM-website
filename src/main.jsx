//react
import React from "react";
import ReactDOM from "react-dom/client";

//react-router-dom
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

//pages
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";

//componentes
import GlobalStyles from "./GlobalStyles";
import LoginResultados from "./pages/LoginResultados";
import LoaderScreen from "./components/LoaderScreen";
import { LoaderContextProvider } from "./contexts/LoaderContext";

//router
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
	},
	{
		path: "resultados",
		element: <LoginResultados />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GlobalStyles />
		<LoaderContextProvider>
			<LoaderScreen />
			<RouterProvider router={router} />
		</LoaderContextProvider>
	</React.StrictMode>
);
