/**
 * Rendering Page Component
 * Showcases rendering techniques and visual demonstrations
 */

import { useEffect, useState } from 'react';

// Import Container CSS for consistent styling
import '../Container/ImageContainer.css';
// Import ImageZoom component for image preview
import ImageZoom from '../Container/ImageZoom';

// Root level videos
import diabloImmortalVideo from '../assets/Rendering/Diablo Immortal.mp4';
import gameRunVideo from '../assets/Rendering/Game run.mp4';

// Character - G140
import g140CharShader1 from '../assets/Rendering/Toonshadeing/character/G140_Character shader.png';
import g140CharShader2 from '../assets/Rendering/Toonshadeing/character/G140_Character shader 2.png';
import g140CharShader3 from '../assets/Rendering/Toonshadeing/character/G140_Character shader3.png';
import g140CharShaderVideo from '../assets/Rendering/Toonshadeing/character/G140_Character shader.mp4';
import g140CharSkeleton from '../assets/Rendering/Toonshadeing/character/G140_Character skeleton.png';
import g140FaceDesign from '../assets/Rendering/Toonshadeing/character/G140_face_design.png';
import g140FaceDesign1 from '../assets/Rendering/Toonshadeing/character/G140_face_design_1.png';
import g140FaceImg33 from '../assets/Rendering/Toonshadeing/character/G140_face_image33.png';
import g140FaceImg34 from '../assets/Rendering/Toonshadeing/character/G140_face_image34.png';
import g140Img23 from '../assets/Rendering/Toonshadeing/character/G140_image23.jpg';
import g140Img27 from '../assets/Rendering/Toonshadeing/character/G140_image27.jpeg';
import g140Img28 from '../assets/Rendering/Toonshadeing/character/G140_image28.jpg';
import g140Img30 from '../assets/Rendering/Toonshadeing/character/G140_image30.png';
import lookdevImg1 from '../assets/Rendering/Toonshadeing/character/lookdev演示 图片1.png';
import lookdevImg2 from '../assets/Rendering/Toonshadeing/character/lookdev演示 图片2.png';
import lookdevImg3 from '../assets/Rendering/Toonshadeing/character/lookdev演示 图片3.png';
import lookdevVideo from '../assets/Rendering/Toonshadeing/character/lookdev演示.mp4';

// Character - Diablo Immortal
import charDiablo16 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/image16.png';
import charDiablo17 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/image17.png';
import charDiablo18 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/image18.gif';
import charDiablo21 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/image21.gif';
import charDiablo22 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/image22.png';
import charDiablo25 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/image25.gif';
import charDiablo26 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/image26.png';
import charDiablo27 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/image27.jpg';
import charDiablo28 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/image28.jpeg';
import charDiablo29 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/image29.png';
import charDiablo30 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/image30.png';
import charDiablo32 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/image32.jpeg';
import charDiablo33 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/image33.jpeg';
import charDiablo34 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/image34.png';
import charDiablo35 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/image35.png';
import charDiabloMedia1 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/media1.mp4';
import charDiabloMedia2 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/media2.mp4';
import charDiabloMedia3 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/media3.2.mp4';
import charDiabloMedia4 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/media4.1.mp4';
import charDiabloMedia5 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/media5.mp4';
import charDiabloMedia6 from '../assets/Rendering/Toonshadeing/character/Diablo Immortal/media6.mp4';

// Character - Super Mecha Champions
import smcImg46 from '../assets/Rendering/Toonshadeing/character/Super_Mecha Champions/image46.png';
import smcMedia13 from '../assets/Rendering/Toonshadeing/character/Super_Mecha Champions/media13.mp4';
import smcMedia14 from '../assets/Rendering/Toonshadeing/character/Super_Mecha Champions/media14.mp4';

// Environment - G140
import envG140Reflect from '../assets/Rendering/Toonshadeing/Enviroment/G140_01_with_reflect.mp4';
import envG140Shadow from '../assets/Rendering/Toonshadeing/Enviroment/G140_Character_Shadow.mp4';
import envG140LightingVideo from '../assets/Rendering/Toonshadeing/Enviroment/G140_Dynamic lighting media1.mp4';
import envG140Lighting from '../assets/Rendering/Toonshadeing/Enviroment/G140_Dynamic lighting.png';
import riverShading from '../assets/Rendering/Toonshadeing/Enviroment/river shading.mp4';

// Environment - Diablo Immortal
import envDiablo13 from '../assets/Rendering/Toonshadeing/Enviroment/Diablo Immortal/image13.png';
import envDiablo14 from '../assets/Rendering/Toonshadeing/Enviroment/Diablo Immortal/image14.gif';
import envDiablo15 from '../assets/Rendering/Toonshadeing/Enviroment/Diablo Immortal/image15.gif';

// Environment - SKY
import sky39 from '../assets/Rendering/Toonshadeing/Enviroment/SKY/image39.png';
import sky44 from '../assets/Rendering/Toonshadeing/Enviroment/SKY/image44.png';
import sky46 from '../assets/Rendering/Toonshadeing/Enviroment/SKY/image46.png';
import sky49 from '../assets/Rendering/Toonshadeing/Enviroment/SKY/image49.png';

// VFX - G140
import vfxG140Cloud from '../assets/Rendering/Toonshadeing/VFX/G140_Cloud.png';
import vfxG140CloudVideo from '../assets/Rendering/Toonshadeing/VFX/G140_Cloud_media1.mp4';
import vfxG140Cube1 from '../assets/Rendering/Toonshadeing/VFX/G140_Cube_media1.mp4';
import vfxG140Cube2 from '../assets/Rendering/Toonshadeing/VFX/G140_Cube_media2.mp4';
import vfxG140Cube3 from '../assets/Rendering/Toonshadeing/VFX/G140_Cube_media3.mp4';
import vfxG140Cube5 from '../assets/Rendering/Toonshadeing/VFX/G140_Cube_media5.mp4';
import vfxG140CubeWeapon from '../assets/Rendering/Toonshadeing/VFX/G140_Cube_weapon.gif';
import vfxG140Healing from '../assets/Rendering/Toonshadeing/VFX/G140_HealingSkill.mp4';
import vfxOptimized from '../assets/Rendering/Toonshadeing/VFX/Optimized performance.jpeg';

// VFX - Fate
import vfxFate56 from '../assets/Rendering/Toonshadeing/VFX/Fate/image56.png';
import vfxFate58 from '../assets/Rendering/Toonshadeing/VFX/Fate/image58.gif';
import vfxFate59 from '../assets/Rendering/Toonshadeing/VFX/Fate/image59.gif';
import vfxFate60 from '../assets/Rendering/Toonshadeing/VFX/Fate/image60.gif';
import vfxFate61 from '../assets/Rendering/Toonshadeing/VFX/Fate/image61.gif';
import vfxFate65 from '../assets/Rendering/Toonshadeing/VFX/Fate/image65.gif';
import vfxFate66 from '../assets/Rendering/Toonshadeing/VFX/Fate/image66.png';
import vfxFateVideo from '../assets/Rendering/Toonshadeing/VFX/Fate/media8.mp4';

/**
 * Video playback event handling hook
 * Dispatches events to control background music volume
 */
function useVideoEvents() {
  useEffect(() => {
    const handlePlay = () => {
      window.dispatchEvent(new CustomEvent('videoPlaying'));
    };

    const handlePause = () => {
      window.dispatchEvent(new CustomEvent('videoPaused'));
    };

    // Add event listeners to all videos on the page
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handlePause);
    });

    return () => {
      videos.forEach(video => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handlePause);
      });
    };
  }, []);
}

function Rendering() {
  // Initialize video event handling
  useVideoEvents();

  // Image zoom state
  const [zoomImage, setZoomImage] = useState<{ src: string; alt: string } | null>(null);

  // Handle image click to open zoom view
  const handleImageClick = (src: string, alt: string) => {
    setZoomImage({ src, alt });
  };

  // Close zoom view
  const handleCloseZoom = () => {
    setZoomImage(null);
  };

  return (
    <div className="card">
      <h2 className="page-title">Rendering Showcase</h2>

      <div className="rendering-container">
        <p className="rendering-intro">
          Advanced rendering techniques including real-time rendering, shader development,
          and visual optimization for games and interactive applications.
        </p>

        {/* Root Level Videos */}
        <section className="rendering-section">
          <div className="ImageTitleContainer">
            <h3 className="ImageTitle">Featured Demos</h3>
          </div>
          <div className="VideoContainer">
            <div className="MediaItem">
              <video controls>
                <source src={diabloImmortalVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="MediaItem">
              <video controls>
                <source src={gameRunVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Character Rendering */}
        <section className="rendering-section">
          <div className="ImageTitleContainer">
            <h3 className="ImageTitle">Character Rendering</h3>
          </div>

          {/* G140 Character */}
          <div className="ImageTitleContainer">
            <h4 className="ImageTitle" style={{ fontSize: '1.3rem' }}>G140 Character Shader</h4>
          </div>
          {/* Video - Full Width */}
          <div className="VideoContainer">
            <div className="MediaItem">
              <video controls>
                <source src={g140CharShaderVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* Images - Grid Layout (3 columns) */}
          <div className="ImageContainer grid-3">
            <img src={g140CharShader1} alt="G140 Shader 1" className="Image" onClick={() => handleImageClick(g140CharShader1, 'G140 Shader 1')} />
            <img src={g140CharShader2} alt="G140 Shader 2" className="Image" onClick={() => handleImageClick(g140CharShader2, 'G140 Shader 2')} />
            <img src={g140CharShader3} alt="G140 Shader 3" className="Image" onClick={() => handleImageClick(g140CharShader3, 'G140 Shader 3')} />
            <img src={g140CharSkeleton} alt="G140 Skeleton" className="Image" onClick={() => handleImageClick(g140CharSkeleton, 'G140 Skeleton')} />
            <img src={g140FaceDesign} alt="G140 Face Design" className="Image" onClick={() => handleImageClick(g140FaceDesign, 'G140 Face Design')} />
            <img src={g140FaceDesign1} alt="G140 Face Design 1" className="Image" onClick={() => handleImageClick(g140FaceDesign1, 'G140 Face Design 1')} />
            <img src={g140FaceImg33} alt="G140 Face 33" className="Image" onClick={() => handleImageClick(g140FaceImg33, 'G140 Face 33')} />
            <img src={g140FaceImg34} alt="G140 Face 34" className="Image" onClick={() => handleImageClick(g140FaceImg34, 'G140 Face 34')} />
            <img src={g140Img23} alt="G140 Image 23" className="Image" onClick={() => handleImageClick(g140Img23, 'G140 Image 23')} />
            <img src={g140Img27} alt="G140 Image 27" className="Image" onClick={() => handleImageClick(g140Img27, 'G140 Image 27')} />
            <img src={g140Img28} alt="G140 Image 28" className="Image" onClick={() => handleImageClick(g140Img28, 'G140 Image 28')} />
            <img src={g140Img30} alt="G140 Image 30" className="Image" onClick={() => handleImageClick(g140Img30, 'G140 Image 30')} />
          </div>

          {/* Lookdev */}
          <div className="ImageTitleContainer">
            <h4 className="ImageTitle" style={{ fontSize: '1.3rem' }}>Lookdev Demo</h4>
          </div>
          {/* Video - Full Width */}
          <div className="VideoContainer">
            <div className="MediaItem">
              <video controls>
                <source src={lookdevVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* Images - Three Column Grid (Gallery Style) */}
          <div className="ImageContainer grid-3">
            <img src={lookdevImg1} alt="Lookdev 1" className="Image" onClick={() => handleImageClick(lookdevImg1, 'Lookdev Demo 1')} />
            <img src={lookdevImg2} alt="Lookdev 2" className="Image" onClick={() => handleImageClick(lookdevImg2, 'Lookdev Demo 2')} />
            <img src={lookdevImg3} alt="Lookdev 3" className="Image" onClick={() => handleImageClick(lookdevImg3, 'Lookdev Demo 3')} />
          </div>

          {/* Diablo Immortal Character */}
          <div className="ImageTitleContainer">
            <h4 className="ImageTitle" style={{ fontSize: '1.3rem' }}>Diablo Immortal Character</h4>
          </div>
          {/* Videos - Full Width, One Per Row */}
          <div className="VideoContainer">
            <div className="MediaItem">
              <video controls>
                <source src={charDiabloMedia3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="MediaItem">
              <video controls>
                <source src={charDiabloMedia4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="MediaItem">
              <video controls>
                <source src={charDiabloMedia5} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="MediaItem">
              <video controls>
                <source src={charDiabloMedia1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="MediaItem">
              <video controls>
                <source src={charDiabloMedia2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="MediaItem">
              <video controls>
                <source src={charDiabloMedia6} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* Images - Grid Layout (3 columns) */}
          <div className="ImageContainer grid-3">
            <img src={charDiablo16} alt="Diablo Character 16" className="Image" onClick={() => handleImageClick(charDiablo16, 'Diablo Character 16')} />
            <img src={charDiablo17} alt="Diablo Character 17" className="Image" onClick={() => handleImageClick(charDiablo17, 'Diablo Character 17')} />
            <img src={charDiablo18} alt="Diablo Character 18" className="Image" onClick={() => handleImageClick(charDiablo18, 'Diablo Character 18')} />
            <img src={charDiablo21} alt="Diablo Character 21" className="Image" onClick={() => handleImageClick(charDiablo21, 'Diablo Character 21')} />
            <img src={charDiablo22} alt="Diablo Character 22" className="Image" onClick={() => handleImageClick(charDiablo22, 'Diablo Character 22')} />
            <img src={charDiablo25} alt="Diablo Character 25" className="Image" onClick={() => handleImageClick(charDiablo25, 'Diablo Character 25')} />
            <img src={charDiablo26} alt="Diablo Character 26" className="Image" onClick={() => handleImageClick(charDiablo26, 'Diablo Character 26')} />
            <img src={charDiablo27} alt="Diablo Character 27" className="Image" onClick={() => handleImageClick(charDiablo27, 'Diablo Character 27')} />
            <img src={charDiablo28} alt="Diablo Character 28" className="Image" onClick={() => handleImageClick(charDiablo28, 'Diablo Character 28')} />
            <img src={charDiablo29} alt="Diablo Character 29" className="Image" onClick={() => handleImageClick(charDiablo29, 'Diablo Character 29')} />
            <img src={charDiablo30} alt="Diablo Character 30" className="Image" onClick={() => handleImageClick(charDiablo30, 'Diablo Character 30')} />
            <img src={charDiablo32} alt="Diablo Character 32" className="Image" onClick={() => handleImageClick(charDiablo32, 'Diablo Character 32')} />
            <img src={charDiablo33} alt="Diablo Character 33" className="Image" onClick={() => handleImageClick(charDiablo33, 'Diablo Character 33')} />
            <img src={charDiablo34} alt="Diablo Character 34" className="Image" onClick={() => handleImageClick(charDiablo34, 'Diablo Character 34')} />
            <img src={charDiablo35} alt="Diablo Character 35" className="Image" onClick={() => handleImageClick(charDiablo35, 'Diablo Character 35')} />
          </div>

          {/* Super Mecha Champions */}
          <div className="ImageTitleContainer">
            <h4 className="ImageTitle" style={{ fontSize: '1.3rem' }}>Super Mecha Champions</h4>
          </div>
          {/* Videos - Full Width */}
          <div className="VideoContainer">
            <div className="MediaItem">
              <video controls>
                <source src={smcMedia13} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="MediaItem">
              <video controls>
                <source src={smcMedia14} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* Images - Grid Layout (3 columns) */}
          <div className="ImageContainer grid-3">
            <img src={smcImg46} alt="SMC Image" className="Image" onClick={() => handleImageClick(smcImg46, 'Super Mecha Champions')} />
          </div>
        </section>

        {/* Environment Rendering */}
        <section className="rendering-section">
          <div className="ImageTitleContainer">
            <h3 className="ImageTitle">Environment Rendering</h3>
          </div>

          {/* G140 Environment */}
          <div className="ImageTitleContainer">
            <h4 className="ImageTitle" style={{ fontSize: '1.3rem' }}>G140 Environment</h4>
          </div>
          {/* Videos - Full Width */}
          <div className="VideoContainer">
            <div className="MediaItem">
              <video controls>
                <source src={envG140Reflect} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="MediaItem">
              <video controls>
                <source src={envG140Shadow} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="MediaItem">
              <video controls>
                <source src={envG140LightingVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="MediaItem">
              <video controls>
                <source src={riverShading} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* Images - Grid Layout (3 columns) */}
          <div className="ImageContainer grid-3">
            <img src={envG140Lighting} alt="G140 Lighting" className="Image" onClick={() => handleImageClick(envG140Lighting, 'G140 Dynamic Lighting')} />
          </div>

          {/* Diablo Immortal Environment */}
          <div className="ImageTitleContainer">
            <h4 className="ImageTitle" style={{ fontSize: '1.3rem' }}>Diablo Immortal Environment</h4>
          </div>
          <div className="ImageContainer grid-3">
            <img src={envDiablo13} alt="Diablo Env 13" className="Image" onClick={() => handleImageClick(envDiablo13, 'Diablo Immortal Environment 13')} />
            <img src={envDiablo14} alt="Diablo Env 14" className="Image" onClick={() => handleImageClick(envDiablo14, 'Diablo Immortal Environment 14')} />
            <img src={envDiablo15} alt="Diablo Env 15" className="Image" onClick={() => handleImageClick(envDiablo15, 'Diablo Immortal Environment 15')} />
          </div>

          {/* SKY Environment */}
          <div className="ImageTitleContainer">
            <h4 className="ImageTitle" style={{ fontSize: '1.3rem' }}>SKY Environment</h4>
          </div>
          <div className="ImageContainer grid-3">
            <img src={sky39} alt="SKY 39" className="Image" onClick={() => handleImageClick(sky39, 'SKY Environment 39')} />
            <img src={sky44} alt="SKY 44" className="Image" onClick={() => handleImageClick(sky44, 'SKY Environment 44')} />
            <img src={sky46} alt="SKY 46" className="Image" onClick={() => handleImageClick(sky46, 'SKY Environment 46')} />
            <img src={sky49} alt="SKY 49" className="Image" onClick={() => handleImageClick(sky49, 'SKY Environment 49')} />
          </div>
        </section>

        {/* VFX Rendering */}
        <section className="rendering-section">
          <div className="ImageTitleContainer">
            <h3 className="ImageTitle">Visual Effects (VFX)</h3>
          </div>

          {/* G140 VFX */}
          <div className="ImageTitleContainer">
            <h4 className="ImageTitle" style={{ fontSize: '1.3rem' }}>G140 VFX</h4>
          </div>
          {/* Videos - Full Width */}
          <div className="VideoContainer">
            <div className="MediaItem">
              <video controls>
                <source src={vfxG140CloudVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="MediaItem">
              <video controls>
                <source src={vfxG140Cube1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="MediaItem">
              <video controls>
                <source src={vfxG140Cube2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="MediaItem">
              <video controls>
                <source src={vfxG140Cube3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="MediaItem">
              <video controls>
                <source src={vfxG140Cube5} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="MediaItem">
              <video controls>
                <source src={vfxG140Healing} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* Images - Grid Layout (3 columns) */}
          <div className="ImageContainer grid-3">
            <img src={vfxG140Cloud} alt="G140 Cloud Image" className="Image" onClick={() => handleImageClick(vfxG140Cloud, 'G140 Cloud VFX')} />
            <img src={vfxG140CubeWeapon} alt="G140 Cube Weapon" className="Image" onClick={() => handleImageClick(vfxG140CubeWeapon, 'G140 Cube Weapon VFX')} />
            <img src={vfxOptimized} alt="Optimized Performance" className="Image" onClick={() => handleImageClick(vfxOptimized, 'Optimized Performance')} />
          </div>

          {/* Fate VFX */}
          <div className="ImageTitleContainer">
            <h4 className="ImageTitle" style={{ fontSize: '1.3rem' }}>Fate VFX</h4>
          </div>
          {/* Videos - Full Width */}
          <div className="VideoContainer">
            <div className="MediaItem">
              <video controls>
                <source src={vfxFateVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* Images - Grid Layout (3 columns) */}
          <div className="ImageContainer grid-3">
            <img src={vfxFate56} alt="Fate 56" className="Image" onClick={() => handleImageClick(vfxFate56, 'Fate VFX 56')} />
            <img src={vfxFate58} alt="Fate 58" className="Image" onClick={() => handleImageClick(vfxFate58, 'Fate VFX 58')} />
            <img src={vfxFate59} alt="Fate 59" className="Image" onClick={() => handleImageClick(vfxFate59, 'Fate VFX 59')} />
            <img src={vfxFate60} alt="Fate 60" className="Image" onClick={() => handleImageClick(vfxFate60, 'Fate VFX 60')} />
            <img src={vfxFate61} alt="Fate 61" className="Image" onClick={() => handleImageClick(vfxFate61, 'Fate VFX 61')} />
            <img src={vfxFate65} alt="Fate 65" className="Image" onClick={() => handleImageClick(vfxFate65, 'Fate VFX 65')} />
            <img src={vfxFate66} alt="Fate 66" className="Image" onClick={() => handleImageClick(vfxFate66, 'Fate VFX 66')} />
          </div>
        </section>
      </div>

      {/* Image Zoom Modal */}
      {zoomImage && (
        <ImageZoom
          src={zoomImage.src}
          alt={zoomImage.alt}
          isOpen={true}
          onClose={handleCloseZoom}
        />
      )}
    </div>
  );
}

export default Rendering;
