import { createContext, useContext, useState } from "react";

//context

const LoaderContext = createContext(null);

//hook

const useLoaderContext = () => {
	return useContext(LoaderContext);
};

//component provider

const LoaderContextProvider = ({ children }) => {
  
	const [showLoader, setShowLoader] = useState(false);




	return (
		<LoaderContext.Provider value={[showLoader, setShowLoader]}>
			{children}
		</LoaderContext.Provider>
	);
};

export { LoaderContext, useLoaderContext, LoaderContextProvider };
