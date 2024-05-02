
import { useContext, useState } from 'react';
import { PhotoContextApi } from '../context/PhotoContextApi';
import '../assets/style/style.css';



const Gallery = () => {


  const { photos } = useContext(PhotoContextApi);

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <>
      <div className="gallery grid-columns-6">

        <div className="photo-grid" >
          {photos.map((photos) => (
            <div key={photos.id} className="photo-container">
          
              <img key={photos.id} src={photos.src.medium} alt={photos.alt} />

              <button
                onClick={() => toggleFavorite(photos.id)}
                className={favorites.includes(photos.id) ? 'favorite' : ''}
              >
                {favorites.includes(photos.id) ? 'Remover de Favoritos' : 'Agregar a Favoritos'}
              </button>
            </div>

          ))}
        </div>

      </div>

    </>

  );

}
export default Gallery;
