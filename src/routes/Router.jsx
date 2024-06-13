import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Favorites from "../views/Favorites";


function Router() {

  return (

    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/favoritos" element={<Favorites />} />
    <Route path="*" element={<NotFound />} /> 
    
    </Routes>

  );
}

export default Router;