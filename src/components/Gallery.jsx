
import { useContext } from 'react';
import { PhotoContextApi } from '../context/PhotoContextApi';
import '../assets/style/style.css';
import IconHeart from './IconHeart';



const Gallery = () => {


  const { photos, favorites, addToFavorites, removeFromFavorites } = useContext(PhotoContextApi);

  const handleFavoriteToggle = (id) => {
    if (favorites.includes(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };

  console.log("photos", photos);
  console.log("favorites", favorites);
  return (
    <>
      <div className="gallery grid-columns-6">

        <div className="photo-grid" >
          {photos.map((photo) => (
            <div key={photo.id} className="photo-container" >

              <img key={photo.id} src={photo.src.medium} alt={photo.alt} />

              <button
                onClick={() => handleFavoriteToggle(photo.id)}
                className={favorites.includes(photo.id) ? 'favorite' : ''}

              // className={`favorite-button ${favorites.includes(photo.id) ? 'favorite' : ''}`}

              >
                {/* <IconHeart  filled={Element.liked}/> */}
                <IconHeart filled={favorites.includes(photo.id)} />

                {favorites.includes(photo.id) ? 'Remover de Favoritos' : 'Agregar a Favoritos'}

              </button>

            </div>

          ))}
        </div>

        <div> 
          <>
          <h1>Fotos Favoritas </h1>
             </>
        </div>


      </div>

    </>

  );

}
export default Gallery;
