import React, { createContext, useEffect, useContext, useState } from "react";
import { Background } from "../Share/NavOptions";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("MainPage");
  const [selectedBackground, setSelectedBackground] = useState('');
  let currentPage1 = `${currentPage}`;
  
  useEffect(() => {
    const background = Background.find((item) => item.name === currentPage1);
    if (background) {
      setSelectedBackground(background.background);
    }
  }, [currentPage,currentPage1])

  return (
    <Context.Provider value={{ currentPage, setCurrentPage, selectedBackground }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
