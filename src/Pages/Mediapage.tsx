/**
 * Media Page Component
 */
import { useState } from 'react';

// Import Container CSS for consistent styling
import '../Container/ImageContainer.css';

// Personal Photos
import personalPhoto1 from '../assets/About/mmexport1743588375593.jpg';
import personalPhoto2 from '../assets/About/mmexport1744459376841.jpg';
import personalPhoto3 from '../assets/Gallery/Character_1.png';

// Videos
import danceVideo from '../assets/Gallery/Game run.mp4';

function Mediapage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const handleImageClick = (src: string, title: string) => {
    setSelectedImage({ src, title });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="media-page">
      <div className="card">
        <h2 className="page-title">Media Photo & Video</h2>
        <p className="media-intro">
          Professional photos and contemporary dance videos
        </p>
      </div>

      {/* Behind the Scenes Photos - 独立卡片 */}
      <div className="card">
        <h3 className="section-title">Behind the Scenes</h3>
        <div className="ImageContainer grid-3">
          <div className="MediaItem">
            <img
              src={personalPhoto1}
              alt="Behind the Scenes 1"
              className="Image"
              onClick={() => handleImageClick(personalPhoto1, 'Behind the Scenes 1')}
            />
          </div>
          <div className="MediaItem">
            <img
              src={personalPhoto2}
              alt="Behind the Scenes 2"
              className="Image"
              onClick={() => handleImageClick(personalPhoto2, 'Behind the Scenes 2')}
            />
          </div>
          <div className="MediaItem">
            <img
              src={personalPhoto3}
              alt="Behind the Scenes 3"
              className="Image"
              onClick={() => handleImageClick(personalPhoto3, 'Behind the Scenes 3')}
            />
          </div>
        </div>
      </div>

      {/* Video Section - 独立卡片 */}
      <div className="card">
        <h3 className="section-title">Contemporary Dance Videos</h3>
        <div className="VideoContainer">
          <div className="MediaItem">
            <video controls>
              <source src={danceVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="media-caption">Dance Performance</p>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div className="image-zoom-overlay" onClick={closeModal}>
          <div className="image-zoom-container">
            <button className="image-zoom-close" onClick={closeModal}>×</button>
            <img src={selectedImage.src} alt={selectedImage.title} className="image-zoom-img" />
            <p className="image-zoom-title">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mediapage;
