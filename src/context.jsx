import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const intialState = {
  title: "",
  image: "",
  content: ``,
};

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        title: "Modern Interior Design Studio",
        image: "images/couch1.png",
        content: `Itaque earum rerum hic tenetur a sapiente delectus, ut aut
        reiciendis voluptatibus maiores alias consequatur aut
        perferendis doloribus asperiores repellat.`,
      },
    });
  };


  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        title: "About us",
        image: "images/couch.png",
        content: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, 
        because it is pain, but because occasionally circumstances occur in which toil and pain can 
        procure him some great pleasure.`,
      },
    });
  };

 



  return (
    <AppContext.Provider
      value={{ ...state, updateHomePage, updateAboutPage}}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppContext, AppProvider, useGlobalContext };
