import { Outlet } from "react-router-dom";
import { StateContext} from "./context/StateContext.js";


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
