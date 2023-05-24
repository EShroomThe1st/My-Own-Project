import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import MainPage from './Components/MainPage/MainPage.jsx';

const App = () => {
  return(
    <BrowserRouter>
    <Box>
      <Routes>
        <Route path="/" exact element={<MainPage/>}/>
        {/* <Route path="/video/:id" element={<VideoDetail/>}/>
        <Route path="/channel/:id" element={<ChannelDetail/>}/>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/> */}
      </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App;
