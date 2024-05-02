import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import FavoriteImages from "../components/FavoriteImages";
import NotFound from "../views/NotFound";


function Router() {

  return (

    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/favoritos" element={<FavoriteImages />} />
    <Route path="*" element={<NotFound />} /> 
    
    </Routes>

  );
}

export default Router;