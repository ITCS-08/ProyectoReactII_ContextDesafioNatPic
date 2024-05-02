
import Navbar from "./components/Navbar";
import Router from "./routes/Router";
import PhotoProvider from "./context/PhotoContextApi";
// import FavoritesProvider from "./context/ContextApiFavorites";
import './App.css'
import Gallery from "./components/Gallery";
import FavoriteImages from "./components/FavoriteImages";




const App = () => {
  return (
    <div>
      <Navbar />      
      <Router />
      

      <PhotoProvider>
        <Gallery />    
        <FavoriteImages />
      </PhotoProvider>

      {/* <FavoritesProvider>
      <FavoriteImages />

      </FavoritesProvider> */}

      
    </div>
  );
};
export default App;
