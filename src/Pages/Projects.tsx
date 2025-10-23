/**
 * Projects Page Component
 * Displays portfolio of technical art projects with media galleries
 */
import { useRef, useEffect, useState } from 'react';
import ImageZoom from '../Container/ImageZoom';

// Toonshader 项目
import toonshader_img1 from '../assets/Projects/Toonshader/lookdev演示 图片1.png';
import toonshader_img2 from '../assets/Projects/Toonshader/lookdev演示 图片2.png';
import toonshader_img3 from '../assets/Projects/Toonshader/lookdev演示 图片3.png';
import toonshader_video from '../assets/Projects/Toonshader/lookdev演示.mp4';

// G140 项目 - 精选部分文件
import g140_char_shader from '../assets/Projects/G140/G140_Character shader.png';
import g140_char_shader2 from '../assets/Projects/G140/G140_Character shader 2.png';
import g140_char_shader3 from '../assets/Projects/G140/G140_Character shader3.png';
import g140_dynamic_lighting from '../assets/Projects/G140/G140_Dynamic lighting.png';
import g140_cloud from '../assets/Projects/G140/G140_Cloud.png';
import g140_cube_weapon from '../assets/Projects/G140/G140_Cube_weapon.gif';
import g140_char_video from '../assets/Projects/G140/G140_Character shader.mp4';
import g140_shadow_video from '../assets/Projects/G140/G140_Character_Shadow.mp4';
import g140_reflect_video from '../assets/Projects/G140/G140_01_with_reflect.mp4';
import g140_cloud_video from '../assets/Projects/G140/G140_Cloud_media1.mp4';
import g140_cube_video1 from '../assets/Projects/G140/G140_Cube_media1.mp4';
import g140_lighting_video from '../assets/Projects/G140/G140_Dynamic lighting media1.mp4';
import g140_healing_video from '../assets/Projects/G140/G140_HealingSkill.mp4';

// FATE 项目
import fate_img1 from '../assets/Projects/FATE/image56.png';
import fate_img2 from '../assets/Projects/FATE/image66.png';
import fate_gif1 from '../assets/Projects/FATE/image58.gif';
import fate_gif2 from '../assets/Projects/FATE/image59.gif';
import fate_gif3 from '../assets/Projects/FATE/image60.gif';
import fate_gif4 from '../assets/Projects/FATE/image61.gif';
import fate_video from '../assets/Projects/FATE/media8.mp4';

// SKY 项目
import sky_img1 from '../assets/Projects/SKY/image39.png';
import sky_img2 from '../assets/Projects/SKY/image44.png';
import sky_img3 from '../assets/Projects/SKY/image46.png';
import sky_img4 from '../assets/Projects/SKY/image49.png';

// Diablo Immortal 项目 - 按组别导入
// 第一组效果
import diablo_g1_img1 from '../assets/Projects/DiabloImmortal/image16.png';
import diablo_g1_img2 from '../assets/Projects/DiabloImmortal/image17.png';
import diablo_g1_gif from '../assets/Projects/DiabloImmortal/image18.gif';
import diablo_g1_video from '../assets/Projects/DiabloImmortal/media3.2.mp4';

// 第二组效果
import diablo_g2_img1 from '../assets/Projects/DiabloImmortal/image28.jpeg';
import diablo_g2_img2 from '../assets/Projects/DiabloImmortal/image26.png';
import diablo_g2_gif from '../assets/Projects/DiabloImmortal/image25.gif';
import diablo_g2_img3 from '../assets/Projects/DiabloImmortal/image27.jpg';
import diablo_g2_video from '../assets/Projects/DiabloImmortal/media5.mp4';

// 第三组效果
import diablo_g3_img from '../assets/Projects/DiabloImmortal/image22.png';
import diablo_g3_gif from '../assets/Projects/DiabloImmortal/image21.gif';
import diablo_g3_video from '../assets/Projects/DiabloImmortal/media4.1.mp4';

// 第四组效果（剩余）
import diablo_g4_img1 from '../assets/Projects/DiabloImmortal/image13.png';
import diablo_g4_img2 from '../assets/Projects/DiabloImmortal/image30.png';
import diablo_g4_img3 from '../assets/Projects/DiabloImmortal/image32.jpeg';
import diablo_g4_img4 from '../assets/Projects/DiabloImmortal/image33.jpeg';
import diablo_g4_img5 from '../assets/Projects/DiabloImmortal/image34.png';
import diablo_g4_img6 from '../assets/Projects/DiabloImmortal/image35.png';
import diablo_g4_gif1 from '../assets/Projects/DiabloImmortal/image14.gif';
import diablo_g4_gif2 from '../assets/Projects/DiabloImmortal/image15.gif';
import diablo_g4_video1 from '../assets/Projects/DiabloImmortal/media1.mp4';
import diablo_g4_video2 from '../assets/Projects/DiabloImmortal/media2.mp4';
import diablo_g4_video3 from '../assets/Projects/DiabloImmortal/media6.mp4';

// Super Mecha Champions 项目
import smc_img from '../assets/Projects/SuperMechaChampions/image46.png';
import smc_video1 from '../assets/Projects/SuperMechaChampions/media13.mp4';
import smc_video2 from '../assets/Projects/SuperMechaChampions/media14.mp4';

interface MediaItemProps {
  src: string;
  type: 'image' | 'video' | 'gif';
  alt: string;
  onClick?: () => void;
}

/**
 * MediaItem Component
 * Renders images, videos, or GIFs with consistent styling
 * Dispatches events when videos play/pause to control background music
 */
function MediaItem({ src, type, alt, onClick }: MediaItemProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (type === 'video' && videoRef.current) {
      const handleVideoPlay = () => {
        window.dispatchEvent(new CustomEvent('videoPlaying', { detail: { playing: true } }));
      };
      const handleVideoPause = () => {
        window.dispatchEvent(new CustomEvent('videoPlaying', { detail: { playing: false } }));
      };

      const video = videoRef.current;
      video.addEventListener('play', handleVideoPlay);
      video.addEventListener('pause', handleVideoPause);
      video.addEventListener('ended', handleVideoPause);

      return () => {
        video.removeEventListener('play', handleVideoPlay);
        video.removeEventListener('pause', handleVideoPause);
        video.removeEventListener('ended', handleVideoPause);
      };
    }
  }, [type]);

  if (type === 'video') {
    return (
      <video
        ref={videoRef}
        controls
        className="media-item media-video"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="media-item media-image"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    />
  );
}

/**
 * Projects Component
 * Main portfolio showcase with categorized project sections
 */
function Projects() {
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
      <h2 className="page-title">My Projects</h2>

      <div className="projects-container">

        {/* 1. Toonshader 项目 */}
        <section className="project-section project-toonshader">
          <h3 className="project-title">Toonshader</h3>
          <p className="project-description">
            Custom toon shader development with advanced lookdev techniques for stylized rendering.
          </p>

          {/* 第一行：视频 */}
          <div className="project-gallery project-gallery-video-row">
            <MediaItem src={toonshader_video} type="video" alt="Toonshader Demo" />
          </div>

          {/* 第二行：三个图片并列 */}
          <div className="project-gallery project-gallery-image-row">
            <MediaItem src={toonshader_img1} type="image" alt="Toonshader 1" onClick={() => handleImageClick(toonshader_img1, 'Toonshader 1')} />
            <MediaItem src={toonshader_img2} type="image" alt="Toonshader 2" onClick={() => handleImageClick(toonshader_img2, 'Toonshader 2')} />
            <MediaItem src={toonshader_img3} type="image" alt="Toonshader 3" onClick={() => handleImageClick(toonshader_img3, 'Toonshader 3')} />
          </div>
        </section>

        {/* 2. G140 项目 */}
        <section className="project-section project-g140">
          <h3 className="project-title">G140</h3>
          <p className="project-description">
            Comprehensive character shader development, dynamic lighting, and VFX systems for stylized game rendering.
          </p>

          <div className="project-gallery">
            <MediaItem src={g140_char_video} type="video" alt="G140 Character Shader" />
            <MediaItem src={g140_shadow_video} type="video" alt="G140 Shadow" />
            <MediaItem src={g140_reflect_video} type="video" alt="G140 Reflection" />
            <MediaItem src={g140_cloud_video} type="video" alt="G140 Cloud" />
            <MediaItem src={g140_cube_video1} type="video" alt="G140 Cube" />
            <MediaItem src={g140_lighting_video} type="video" alt="G140 Lighting" />
            <MediaItem src={g140_healing_video} type="video" alt="G140 Healing Skill" />
            <MediaItem src={g140_char_shader} type="image" alt="G140 Character" onClick={() => handleImageClick(g140_char_shader, 'G140 Character Shader')} />
            <MediaItem src={g140_char_shader2} type="image" alt="G140 Character 2" onClick={() => handleImageClick(g140_char_shader2, 'G140 Character Shader 2')} />
            <MediaItem src={g140_char_shader3} type="image" alt="G140 Character 3" onClick={() => handleImageClick(g140_char_shader3, 'G140 Character Shader 3')} />
            <MediaItem src={g140_dynamic_lighting} type="image" alt="G140 Dynamic Lighting" onClick={() => handleImageClick(g140_dynamic_lighting, 'G140 Dynamic Lighting')} />
            <MediaItem src={g140_cloud} type="image" alt="G140 Cloud" onClick={() => handleImageClick(g140_cloud, 'G140 Cloud VFX')} />
            <MediaItem src={g140_cube_weapon} type="gif" alt="G140 Weapon" onClick={() => handleImageClick(g140_cube_weapon, 'G140 Cube Weapon')} />
          </div>
        </section>

        {/* 3. Diablo Immortal 项目 - 按4组效果展示 */}
        <section className="project-section project-diablo">
          <h3 className="project-title">Diablo Immortal</h3>
          <p className="project-description">
            Character shaders, VFX, and environment art for Diablo Immortal using proprietary engine technology.
          </p>

          {/* 第一组效果 */}
          <h4 className="project-group-title">Effect Group 1</h4>
          <div className="project-gallery">
            <MediaItem src={diablo_g1_img1} type="image" alt="Diablo Effect 1-1" onClick={() => handleImageClick(diablo_g1_img1, 'Diablo Effect 1-1')} />
            <MediaItem src={diablo_g1_img2} type="image" alt="Diablo Effect 1-2" onClick={() => handleImageClick(diablo_g1_img2, 'Diablo Effect 1-2')} />
            <MediaItem src={diablo_g1_gif} type="gif" alt="Diablo Effect 1-3" onClick={() => handleImageClick(diablo_g1_gif, 'Diablo Effect 1-3')} />
            <MediaItem src={diablo_g1_video} type="video" alt="Diablo Effect 1 Video" />
          </div>

          {/* 第二组效果 */}
          <h4 className="project-group-title">Effect Group 2</h4>
          <div className="project-gallery">
            <MediaItem src={diablo_g2_img1} type="image" alt="Diablo Effect 2-1" onClick={() => handleImageClick(diablo_g2_img1, 'Diablo Effect 2-1')} />
            <MediaItem src={diablo_g2_img2} type="image" alt="Diablo Effect 2-2" onClick={() => handleImageClick(diablo_g2_img2, 'Diablo Effect 2-2')} />
            <MediaItem src={diablo_g2_gif} type="gif" alt="Diablo Effect 2-3" onClick={() => handleImageClick(diablo_g2_gif, 'Diablo Effect 2-3')} />
            <MediaItem src={diablo_g2_img3} type="image" alt="Diablo Effect 2-4" onClick={() => handleImageClick(diablo_g2_img3, 'Diablo Effect 2-4')} />
            <MediaItem src={diablo_g2_video} type="video" alt="Diablo Effect 2 Video" />
          </div>

          {/* 第三组效果 */}
          <h4 className="project-group-title">Effect Group 3</h4>
          <div className="project-gallery">
            <MediaItem src={diablo_g3_img} type="image" alt="Diablo Effect 3-1" onClick={() => handleImageClick(diablo_g3_img, 'Diablo Effect 3-1')} />
            <MediaItem src={diablo_g3_gif} type="gif" alt="Diablo Effect 3-2" onClick={() => handleImageClick(diablo_g3_gif, 'Diablo Effect 3-2')} />
            <MediaItem src={diablo_g3_video} type="video" alt="Diablo Effect 3 Video" />
          </div>

          {/* 第四组效果（剩余） */}
          <h4 className="project-group-title">Effect Group 4</h4>
          <div className="project-gallery">
            <MediaItem src={diablo_g4_img1} type="image" alt="Diablo Other 1" onClick={() => handleImageClick(diablo_g4_img1, 'Diablo Other 1')} />
            <MediaItem src={diablo_g4_img2} type="image" alt="Diablo Other 2" onClick={() => handleImageClick(diablo_g4_img2, 'Diablo Other 2')} />
            <MediaItem src={diablo_g4_img3} type="image" alt="Diablo Other 3" onClick={() => handleImageClick(diablo_g4_img3, 'Diablo Other 3')} />
            <MediaItem src={diablo_g4_img4} type="image" alt="Diablo Other 4" onClick={() => handleImageClick(diablo_g4_img4, 'Diablo Other 4')} />
            <MediaItem src={diablo_g4_img5} type="image" alt="Diablo Other 5" onClick={() => handleImageClick(diablo_g4_img5, 'Diablo Other 5')} />
            <MediaItem src={diablo_g4_img6} type="image" alt="Diablo Other 6" onClick={() => handleImageClick(diablo_g4_img6, 'Diablo Other 6')} />
            <MediaItem src={diablo_g4_gif1} type="gif" alt="Diablo Other Effect 1" onClick={() => handleImageClick(diablo_g4_gif1, 'Diablo Other Effect 1')} />
            <MediaItem src={diablo_g4_gif2} type="gif" alt="Diablo Other Effect 2" onClick={() => handleImageClick(diablo_g4_gif2, 'Diablo Other Effect 2')} />
            <MediaItem src={diablo_g4_video1} type="video" alt="Diablo Other Video 1" />
            <MediaItem src={diablo_g4_video2} type="video" alt="Diablo Other Video 2" />
            <MediaItem src={diablo_g4_video3} type="video" alt="Diablo Other Video 3" />
          </div>
        </section>

        {/* 4. FATE 项目 */}
        <section className="project-section project-fate">
          <h3 className="project-title">FATE</h3>
          <p className="project-description">
            Visual effects and particle systems for the FATE project, featuring magical and combat effects.
          </p>

          <div className="project-gallery">
            <MediaItem src={fate_video} type="video" alt="FATE VFX" />
            <MediaItem src={fate_img1} type="image" alt="FATE 1" onClick={() => handleImageClick(fate_img1, 'FATE VFX 1')} />
            <MediaItem src={fate_img2} type="image" alt="FATE 2" onClick={() => handleImageClick(fate_img2, 'FATE VFX 2')} />
            <MediaItem src={fate_gif1} type="gif" alt="FATE Effect 1" onClick={() => handleImageClick(fate_gif1, 'FATE Effect 1')} />
            <MediaItem src={fate_gif2} type="gif" alt="FATE Effect 2" onClick={() => handleImageClick(fate_gif2, 'FATE Effect 2')} />
            <MediaItem src={fate_gif3} type="gif" alt="FATE Effect 3" onClick={() => handleImageClick(fate_gif3, 'FATE Effect 3')} />
            <MediaItem src={fate_gif4} type="gif" alt="FATE Effect 4" onClick={() => handleImageClick(fate_gif4, 'FATE Effect 4')} />
          </div>
        </section>

        {/* 5. SKY 项目 */}
        <section className="project-section project-sky">
          <h3 className="project-title">SKY</h3>
          <p className="project-description">
            Environment art and atmospheric effects for the SKY project, focusing on celestial and natural phenomena.
          </p>

          <div className="project-gallery">
            <MediaItem src={sky_img1} type="image" alt="SKY 1" onClick={() => handleImageClick(sky_img1, 'SKY Environment 1')} />
            <MediaItem src={sky_img2} type="image" alt="SKY 2" onClick={() => handleImageClick(sky_img2, 'SKY Environment 2')} />
            <MediaItem src={sky_img3} type="image" alt="SKY 3" onClick={() => handleImageClick(sky_img3, 'SKY Environment 3')} />
            <MediaItem src={sky_img4} type="image" alt="SKY 4" onClick={() => handleImageClick(sky_img4, 'SKY Environment 4')} />
          </div>
        </section>

        {/* 6. Super Mecha Champions 项目 */}
        <section className="project-section project-smc">
          <h3 className="project-title">Super Mecha Champions</h3>
          <p className="project-description">
            Mecha character effects and technical art for Super Mecha Champions mobile game.
          </p>

          <div className="project-gallery">
            <MediaItem src={smc_video1} type="video" alt="SMC Video 1" />
            <MediaItem src={smc_video2} type="video" alt="SMC Video 2" />
            <MediaItem src={smc_img} type="image" alt="SMC Character" onClick={() => handleImageClick(smc_img, 'Super Mecha Champions Character')} />
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

export default Projects;

