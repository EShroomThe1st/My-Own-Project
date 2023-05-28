import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import MainPage from './Components/Home/MainPage/MainPage.jsx';
import Random from "./Components/Random.jsx";

const App = () => {
  return(
    <BrowserRouter>
    <Box>
      <Routes>
        <Route path="/" exact element={<MainPage/>}/>
        <Route path="/Random" element={<Random/>}/>
        {/* <Route path="/video/:id" element={<VideoDetail/>}/>
        <Route path="/channel/:id" element={<ChannelDetail/>}/>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/> */}
      </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App;
