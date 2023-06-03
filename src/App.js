import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import MainPage from './Components/MainPage/MainPage.jsx';
import Random from "./Components/Random.jsx";
import { StateContext, useStateContext } from "./context/StateContext.js";
import styles from "./App.module.css";
import { Background } from "./Share/NavOptions.js";
import { useState, useEffect } from "react";


const App = () => {
  return(
    <StateContext>
      <div className="MyAss">
        <Outlet/>
      </div>
    </StateContext>
  )
}

export default App;
