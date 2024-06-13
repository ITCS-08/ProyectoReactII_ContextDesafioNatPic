import { createContext, useState, useEffect } from "react";

const PHOTO_URL = "/photos.json";
export const PhotoContextApi = createContext();

const PhotoProvider = ({ children }) => {

    
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };


  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(PHOTO_URL);
        const data = await response.json();
        setPhotos(data.photos); 
      } catch (error) {
        console.error("Error al cargar fotos:", error);
      }
    };

    fetchPhotos();
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (id) => {
    setFavorites((prevFavorites) => [...prevFavorites, id]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter(favoriteId => favoriteId !== id));
  };
    

    return (

        <PhotoContextApi.Provider value={{photos, favorites, addToFavorites, removeFromFavorites}}>
            {children}
        </PhotoContextApi.Provider>

    );
}
export default PhotoProvider;