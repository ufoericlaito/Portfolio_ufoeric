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

// Behind the Scenes Photos for Video
import behindScenes1 from '../assets/Media/Video/DSC07771.JPG';
import behindScenes2 from '../assets/Media/Video/PXL_20251114_144427105.jpg';
import behindScenes3 from '../assets/Media/Video/WhatsApp 图像2025-11-17于02.30.18_2d7d20f6.jpg';

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
            <div className="youtube-video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/MIpzlGK81mg?loop=1&playlist=MIpzlGK81mg&autoplay=0&mute=0"
                title="Contemporary Dance Performance"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <p className="media-caption">Dance Performance</p>
          </div>
        </div>
      </div>

      {/* Video Introduction - 独立卡片 */}
      <div className="card">
        <h3 className="section-title">About the Video</h3>
        <AutoScrollText scrollSpeed={15}>
          <div className="video-intro">
            <p className="playback-notice">
              <strong>⚠️ Playback Notice</strong><br />
              For the intended experience, please enable Loop Playback in your video player before viewing.
            </p>

            <h4>🎬 Project Overview – Video Assignment Description</h4>
            <p>
              As the producer of this group project, I first proposed the idea of capturing the footage using an old Sony PC-120 tape camcorder to document the behind-the-scenes process, while the main visual content was filmed on a Sony A7M3. The intention was to loop segments of the video so the entire piece feels cyclical—creating a sense of "return" and connecting every chapter of the story. Just like the performer herself, each of us carries unique experiences, and this work brings together her dance technique with the visual concept we built as a team.
            </p>
            <p>
              The original aim was to create a demo reel product for the Irish World Academy of Music and Dance. However, the project gradually shifted into a more personal collaboration after our first interview with the dancer. She was given full creative freedom to choose her music and develop themes that resonated with her. Together, we shaped a dark yet elegant tone, driven by electronic dance music. The ruined abbey and the UL dance studio were selected as the main locations to reinforce this atmosphere.
            </p>
            <p>
              The journey became part of the storytelling. We recorded the full shoot and included a short, candid interview captured during the drive to each location, allowing the process itself to unfold naturally on screen.
            </p>

            <h4>🎥 Challenges & Lessons Learned</h4>
            <ul>
              <li>Working through cold weather and unexpected rain delays</li>
              <li>Maintaining stable camera movement while tracking the dancer</li>
              <li>Managing multiple camera systems for layered visual storytelling</li>
              <li>Directing the performer calmly under shifting on-site conditions</li>
              <li>Balancing low light using ISO and aperture adjustments</li>
              <li>Using focal length intentionally to shape mood and energy</li>
              <li>Color grading each shot to define contrast, warmth, and tone</li>
              <li>Matching movement, rhythm, and environment through transitions</li>
              <li>Blending jump cuts and music-driven timing for dynamic pacing</li>
            </ul>
          </div>
        </AutoScrollText>
      </div>

      {/* Behind the Scenes Photos - 独立卡片 */}
      <div className="card">
        <h3 className="section-title">Behind the Scenes</h3>
        <div className="ImageContainer media-grid">
          <div className="MediaItem">
            <img
              src={behindScenes1}
              alt="Behind the Scenes 1"
              className="Image"
              onClick={() => handleImageClick(behindScenes1, 'Behind the Scenes 1')}
            />
          </div>
          <div className="MediaItem">
            <img
              src={behindScenes2}
              alt="Behind the Scenes 2"
              className="Image"
              onClick={() => handleImageClick(behindScenes2, 'Behind the Scenes 2')}
            />
          </div>
          <div className="MediaItem">
            <img
              src={behindScenes3}
              alt="Behind the Scenes 3"
              className="Image"
              onClick={() => handleImageClick(behindScenes3, 'Behind the Scenes 3')}
            />
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
