/**
 * Media Page Component
 */
import { useState } from 'react';

// Import Container CSS for consistent styling
import '../Container/ImageContainer.css';
import './Mediapage.css';

// Import AutoScrollText component
import AutoScrollText from '../Container/AutoScrollText';

// Personal Photos
import personalPhoto1 from '../assets/Media/DSC07646.png';
import personalPhoto2 from '../assets/Media/DSC07526.png';
import personalPhoto3 from '../assets/Media/Screenshot 2025-11-12 23-14-40 copy.png';

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
        <h3 className="section-title">CS60411 Autumn Image</h3>
        <div className="ImageContainer media-grid">
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
      {/* Introduction Section with Auto-Scroll - 独立卡片 */}
      <div className="card">
        <h3 className="section-title">About This Project</h3>
        <AutoScrollText scrollSpeed={15}>
          <p>
            My name is Eric, and I work as a Technical Artist in game development.
            In this project, I'll be presenting both my artistic portraits and lifestyle photos in my own unique way.
          </p>
          <p>
            I chose to wear traditional Chinese clothing because I'm deeply inspired by vintage aesthetics and the fusion of tradition with futuristic electronic elements. I love exploring the visual contrast that happens when the old meets the new — the future meets the past.
          </p>
          <p>
            Beyond making games, I'm also passionate about electronic music production and DJ mixing, which I've integrated into my photos. One of my favorite subjects is my rotary-engine car, the Mazda RX-8, which I personally restored and rebuilt almost to a brand-new condition — it even appears on my computer screen in one of the shots.
          </p>
          <p>
            For the artistic portrait, I used long exposure with rotating light trails to recreate the feeling of people immersed in music. My partner and I were actually dancing during the shoot, which gave the photos their natural rhythm and energy.
            The 24mm f/1.4 lens allowed me to work creatively even in a small recording room, giving me both flexibility and depth.
          </p>
          <p>
            For the lifestyle photos, I used a Sony DCR-PC120 magnetic tape camcorder, a vintage CCD camera that captures my daily life through a nostalgic lens. I love recording the present as if I were looking at it from the past — it feels like traveling through time.
          </p>
        </AutoScrollText>
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
            <img src={selectedImage.src} alt={selectedImage.title} className="image-zoom-content" />
            <p className="image-zoom-caption">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mediapage;
