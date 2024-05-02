import { useContext, useState } from 'react';
import { PhotoContextApi } from '../context/PhotoContextApi';
import '../assets/style/style.css';

const FavoriteImages = () => {

    const { photos } = useContext(PhotoContextApi);
    const [favorites, setFavorites] = useState([]);
    

  const favoritePhotos = photos.filter((photo) => favorites.includes(photo.id));

  return (
    <>
      <div className="gallery grid-columns-6">
        <div className="photo-grid">
          {favoritePhotos.map((photo) => (
            <img key={photo.id} src={photo.src.medium} alt={photo.alt} />
          ))}
        </div>
      </div>
    </>
  );
};

  export default FavoriteImages;