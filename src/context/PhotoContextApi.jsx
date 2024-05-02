import { createContext, useState, useEffect } from "react";

const PHOTO_URL = "/photos.json";
export const PhotoContextApi = createContext();

const PhotoProvider = ({ children }) => {

    
    const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(PHOTO_URL);
        const data = await response.json();
        setPhotos(data.photos); // Supongamos que 'photos.json' tiene una estructura como { photos: [ { id: 1, url: 'url1' }, { id: 2, url: 'url2' }, ... ] }
      } catch (error) {
        console.error("Error al cargar fotos:", error);
      }
    };

    fetchPhotos();
  }, []);
    

    return (

        <PhotoContextApi.Provider value={{photos}}>
            {children}
        </PhotoContextApi.Provider>

    );
}
export default PhotoProvider;