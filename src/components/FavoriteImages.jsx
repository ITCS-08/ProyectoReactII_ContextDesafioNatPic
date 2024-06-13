import { useContext} from 'react';
import { PhotoContextApi } from '../context/PhotoContextApi';
import '../assets/style/style.css';


const FavoriteImages = () => {

  //  const { photos, favorites } = useContext(PhotoContextApi);

  // const { photos } = useContext(PhotoContextApi);
  // const [favorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  const { photos, favorites } = useContext(PhotoContextApi);
  const favoritePhotos = photos.filter((photo) => favorites.includes(photo.id));
  

  return (
    <>
       <div className="gallery grid-columns-6">
      
      <div className="photo-grid">
        {favoritePhotos.map(photo => (
          <div key={photo.id} className="photo-container">
            <img src={photo.src.medium} alt={photo.alt} />
          </div>

          
        ))}
      </div>

      {console.log("photos_FAIMA", photos)}
      {console.log("favorites_photos_FAIMA", favorites)}

    </div>
    </>
  );
};

export default FavoriteImages;