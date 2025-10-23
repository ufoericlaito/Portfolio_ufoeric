/**
 * Gallery Page Component
 * Displays a curated collection of technical art work
 */
import { useRef, useEffect } from 'react';
import gameRunVideo from '../assets/Gallery/Game run.mp4';
import diabloVideo from '../assets/Gallery/Diablo Immortal.mp4';
import toonshader1 from '../assets/Gallery/Toonshader_1.png';
import toonshader2 from '../assets/Gallery/Toonshader_2.png';
import character1 from '../assets/Gallery/Character_1.png';
import character2 from '../assets/Gallery/Character_2.png';
import vfx1 from '../assets/Gallery/VFX_1.png';
import vfx2 from '../assets/Gallery/VFX_2.gif';

interface GalleryItemProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  type: 'image' | 'video' | 'gif';
  colorScheme: 'purple' | 'blue' | 'violet';
  videoRef?: (el: HTMLVideoElement | null) => void;
}

/**
 * GalleryItem Component
 * Reusable component for displaying gallery items with consistent styling
 */
function GalleryItem({ src, alt, title, description, type, colorScheme, videoRef }: GalleryItemProps) {
  const colorClasses = {
    purple: 'gallery-item-purple',
    blue: 'gallery-item-blue',
    violet: 'gallery-item-violet'
  };

  return (
    <div className={`gallery-item ${colorClasses[colorScheme]}`}>
      {type === 'video' ? (
        <>
          <h4 className="gallery-item-title">{title}</h4>
          <video
            ref={videoRef}
            controls
            className="gallery-video"
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      ) : (
        <>
          <img src={src} alt={alt} className="gallery-image" />
          <h3 className="gallery-item-title">{title}</h3>
          <p className="gallery-item-description">{description}</p>
        </>
      )}
    </div>
  );
}

function Gallery() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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

  return (
    <div className="card">
      <h2 className="page-title">Gallery</h2>

      <div className="gallery-container">
        <p className="gallery-intro">
          A showcase of my technical art work, including project demos, character designs, and visual effects.
        </p>

        {/* Video Showcase Section */}
        <section className="gallery-section">
          <h3 className="gallery-section-title">Project Demos</h3>
          <div className="gallery-video-grid">
            <GalleryItem
              src={gameRunVideo}
              alt="Game Run Demo"
              title="Game Run"
              description=""
              type="video"
              colorScheme="purple"
              videoRef={el => { videoRefs.current[0] = el; }}
            />
            <GalleryItem
              src={diabloVideo}
              alt="Diablo Immortal Demo"
              title="Diablo Immortal"
              description=""
              type="video"
              colorScheme="violet"
              videoRef={el => { videoRefs.current[1] = el; }}
            />
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="gallery-section">
          <h3 className="gallery-section-title">Featured Work</h3>
          <div className="gallery-image-grid">
            <GalleryItem
              src={toonshader1}
              alt="Toon Shading"
              title="Toon Shading"
              description="Custom toon shader effects for stylized game rendering"
              type="image"
              colorScheme="purple"
            />
            <GalleryItem
              src={toonshader2}
              alt="Dynamic Lighting"
              title="Dynamic Lighting"
              description="Advanced lighting techniques for toon-shaded environments"
              type="image"
              colorScheme="purple"
            />
            <GalleryItem
              src={character1}
              alt="Character Shader"
              title="Character Shader"
              description="Character modeling and shader development"
              type="image"
              colorScheme="blue"
            />
            <GalleryItem
              src={character2}
              alt="Character Design"
              title="Character Design"
              description="Stylized character art and texturing"
              type="image"
              colorScheme="blue"
            />
            <GalleryItem
              src={vfx1}
              alt="VFX Cloud"
              title="Cloud VFX"
              description="Real-time cloud and atmospheric effects"
              type="image"
              colorScheme="violet"
            />
            <GalleryItem
              src={vfx2}
              alt="Weapon VFX"
              title="Weapon VFX"
              description="Weapon effects and particle systems"
              type="gif"
              colorScheme="violet"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Gallery;