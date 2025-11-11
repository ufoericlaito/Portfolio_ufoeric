/**
 * Gallery Page Component
 * Displays a curated collection of technical art work
 */
import { useRef, useEffect, useState } from 'react';
import '../Container/ImageContainer.css';

import gameRunVideo from '../assets/Gallery/Game run.mp4';
import diabloVideo from '../assets/Gallery/Diablo Immortal.mp4';
import toonshader1 from '../assets/Gallery/Toonshader_1.png';
import toonshader2 from '../assets/Gallery/Toonshader_2.png';
import character1 from '../assets/Gallery/Character_1.png';
import character2 from '../assets/Gallery/Character_2.png';
import vfx1 from '../assets/Gallery/VFX_1.png';
import vfx2 from '../assets/Gallery/VFX_2.gif';

function Gallery() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [zoomImage, setZoomImage] = useState<{ src: string; alt: string } | null>(null);

  // Video playback controls music volume
  useEffect(() => {
    const handleVideoPlay = () => {
      window.dispatchEvent(new CustomEvent('videoPlaying', { detail: { playing: true } }));
    };

    const handleVideoPause = () => {
      window.dispatchEvent(new CustomEvent('videoPlaying', { detail: { playing: false } }));
    };

    videoRefs.current.forEach(video => {
      if (video) {
        video.addEventListener('play', handleVideoPlay);
        video.addEventListener('pause', handleVideoPause);
        video.addEventListener('ended', handleVideoPause);
      }
    });

    return () => {
      videoRefs.current.forEach(video => {
        if (video) {
          video.removeEventListener('play', handleVideoPlay);
          video.removeEventListener('pause', handleVideoPause);
          video.removeEventListener('ended', handleVideoPause);
        }
      });
    };
  }, []);

  // Handle image click
  const handleImageClick = (src: string, alt: string) => {
    setZoomImage({ src, alt });
    document.body.style.overflow = 'hidden';
  };

  // Close zoom modal
  const handleCloseZoom = () => {
    setZoomImage(null);
    document.body.style.overflow = 'unset';
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && zoomImage) {
        handleCloseZoom();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [zoomImage]);

  return (
    <div className="gallery-page">
      <div className="card">
        <h2 className="page-title">Gallery</h2>
        <p className="gallery-intro">
          A showcase of my technical art work, including project demos, character designs, and visual effects.
        </p>
      </div>

      {/* Project Demos - Section Title */}
      <div className="card">
        <div className="ImageTitleContainer">
          <h3 className="ImageTitle">Project Demos</h3>
        </div>
      </div>

      {/* Project Demos - Individual Video Cards */}
      <div className="VideoContainer">
        <div className="card">
          <div className="MediaItem">
            <div className="ImageTitleContainer">
              <h4 className="ImageTitle" style={{ fontSize: '1.3rem' }}>Game Run</h4>
            </div>
            <video
              ref={el => { videoRefs.current[0] = el; }}
              controls
            >
              <source src={gameRunVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="card">
          <div className="MediaItem">
            <div className="ImageTitleContainer">
              <h4 className="ImageTitle" style={{ fontSize: '1.3rem' }}>Diablo Immortal</h4>
            </div>
            <video
              ref={el => { videoRefs.current[1] = el; }}
              controls
            >
              <source src={diabloVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Featured Work - Section Title */}
      <div className="card">
        <div className="ImageTitleContainer">
          <h3 className="ImageTitle">Featured Work</h3>
        </div>
      </div>

      {/* Featured Work - Individual Cards */}
      <div className="ImageContainer">
        <div className="card">
          <div className="MediaItem">
            <img
              src={toonshader1}
              alt="Toon Shading"
              className="Image"
              onClick={() => handleImageClick(toonshader1, 'Toon Shading')}
            />
            <h4 style={{ margin: '0.8rem 0 0.3rem 0', fontSize: '1.1rem', fontWeight: '600', color: '#2c3e50' }}>Toon Shading</h4>
            <p style={{ margin: '0', fontSize: '0.9rem', color: '#666', lineHeight: '1.4' }}>Custom toon shader effects for stylized game rendering</p>
          </div>
        </div>
        <div className="card">
          <div className="MediaItem">
            <img
              src={toonshader2}
              alt="Dynamic Lighting"
              className="Image"
              onClick={() => handleImageClick(toonshader2, 'Dynamic Lighting')}
            />
            <h4 style={{ margin: '0.8rem 0 0.3rem 0', fontSize: '1.1rem', fontWeight: '600', color: '#2c3e50' }}>Dynamic Lighting</h4>
            <p style={{ margin: '0', fontSize: '0.9rem', color: '#666', lineHeight: '1.4' }}>Advanced lighting techniques for toon-shaded environments</p>
          </div>
        </div>
        <div className="card">
          <div className="MediaItem">
            <img
              src={character1}
              alt="Character Shader"
              className="Image"
              onClick={() => handleImageClick(character1, 'Character Shader')}
            />
            <h4 style={{ margin: '0.8rem 0 0.3rem 0', fontSize: '1.1rem', fontWeight: '600', color: '#2c3e50' }}>Character Shader</h4>
            <p style={{ margin: '0', fontSize: '0.9rem', color: '#666', lineHeight: '1.4' }}>Character modeling and shader development</p>
          </div>
        </div>
        <div className="card">
          <div className="MediaItem">
            <img
              src={character2}
              alt="Character Design"
              className="Image"
              onClick={() => handleImageClick(character2, 'Character Design')}
            />
            <h4 style={{ margin: '0.8rem 0 0.3rem 0', fontSize: '1.1rem', fontWeight: '600', color: '#2c3e50' }}>Character Design</h4>
            <p style={{ margin: '0', fontSize: '0.9rem', color: '#666', lineHeight: '1.4' }}>Stylized character art and texturing</p>
          </div>
        </div>
        <div className="card">
          <div className="MediaItem">
            <img
              src={vfx1}
              alt="Cloud VFX"
              className="Image"
              onClick={() => handleImageClick(vfx1, 'Cloud VFX')}
            />
            <h4 style={{ margin: '0.8rem 0 0.3rem 0', fontSize: '1.1rem', fontWeight: '600', color: '#2c3e50' }}>Cloud VFX</h4>
            <p style={{ margin: '0', fontSize: '0.9rem', color: '#666', lineHeight: '1.4' }}>Real-time cloud and atmospheric effects</p>
          </div>
        </div>
        <div className="card">
          <div className="MediaItem">
            <img
              src={vfx2}
              alt="Weapon VFX"
              className="Image"
              onClick={() => handleImageClick(vfx2, 'Weapon VFX')}
            />
            <h4 style={{ margin: '0.8rem 0 0.3rem 0', fontSize: '1.1rem', fontWeight: '600', color: '#2c3e50' }}>Weapon VFX</h4>
            <p style={{ margin: '0', fontSize: '0.9rem', color: '#666', lineHeight: '1.4' }}>Weapon effects and particle system</p>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {zoomImage && (
        <div className="image-zoom-overlay" onClick={handleCloseZoom}>
          <div className="image-zoom-container" onClick={(e) => e.stopPropagation()}>
            <button className="image-zoom-close" onClick={handleCloseZoom} title="Close (Esc)">
              ✕
            </button>
            <img src={zoomImage.src} alt={zoomImage.alt} className="image-zoom-content" />
            <div className="image-zoom-caption">{zoomImage.alt}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;