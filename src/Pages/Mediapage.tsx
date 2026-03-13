/**
 * Media Page Component - Project Gallery
 */
import { useState } from 'react';

// Import Container CSS for consistent styling
import '../Container/ImageContainer.css';
import './Mediapage.css';

// Import AutoScrollText component
import AutoScrollText from '../Container/AutoScrollText';
import SlideShow from '../Container/SlideShow';

// Personal Photos
import personalPhoto1 from '../assets/Media/DSC07646.png';
import personalPhoto2 from '../assets/Media/DSC07526.png';
import personalPhoto3 from '../assets/Media/Screenshot 2025-11-12 23-14-40 copy.png';

// Behind the Scenes Photos for Video
import behindScenes1 from '../assets/Media/Video/DSC07771.jpg';
import behindScenes2 from '../assets/Media/Video/PXL_20251114_144427105.jpg';
import behindScenes3 from '../assets/Media/Video/WhatsApp 图像2025-11-17于02.30.18_2d7d20f6.jpg';

// EmbodiedEarth PPT Slides
import slide1 from '../assets/Media/EmbodiedEarth/幻灯片1.png';
import slide2 from '../assets/Media/EmbodiedEarth/幻灯片2.png';
import slide3 from '../assets/Media/EmbodiedEarth/幻灯片3.png';
import slide4 from '../assets/Media/EmbodiedEarth/幻灯片4.png';
import slide5 from '../assets/Media/EmbodiedEarth/幻灯片5.png';
import slide6 from '../assets/Media/EmbodiedEarth/幻灯片6.png';
import slide7 from '../assets/Media/EmbodiedEarth/幻灯片7.png';
import slide8 from '../assets/Media/EmbodiedEarth/幻灯片8.png';
import slide9 from '../assets/Media/EmbodiedEarth/幻灯片9.png';
import slide10 from '../assets/Media/EmbodiedEarth/幻灯片10.png';
import slide11 from '../assets/Media/EmbodiedEarth/幻灯片11.png';

// CS6042 PhoneStand
import phoneStandCat01 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/cat01.jpeg';
import phoneStandCat02 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/cat02.jpeg';
import phoneStandLeaf01 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/Leaf01.jpeg';
import phoneStandLeaf02 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/Leaf02.jpeg';
import phoneStandLeaf03 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/Leaf03.jpeg';
import phoneStandMultiV201 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/multiStand v2.01.jpeg';
import phoneStandMulti00 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/multiStand00.jpeg';
import phoneStandMulti01 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/multiStand01.jpeg';
import phoneStandMulti02 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/multiStand02.jpeg';
import phoneStandMulti03 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/multiStand03.jpeg';
import phoneStandMulti04 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/multiStand04.jpeg';
import phoneStandMulti05 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/multiStand05.jpeg';
import phoneStandMulti06 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/multiStand06.jpeg';
import phoneStandMultiV202 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/multiStandv2.02.jpeg';
import phoneStandMultiV2 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/multiStandv2.jpeg';
import phoneStandPrint01 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/Print01.jpeg';
import phoneStandPrint02 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/Print02.jpeg';
import phoneStandReadyPrint from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/ReadyPrint.jpeg';
import phoneStandVideo1 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/Print Video 2026-03-13 at 00.43.21.mp4';
import phoneStandVideo2 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/Print Video 2026-03-13 at 00.44.49.mp4';
import phoneStandVideo3 from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/Print Video 2026-03-13 at 00.51.04.mp4';
import phoneStandPdf from '../assets/Media/CS6042-Interactive Media Workshop/PhoneStand/ERIC-phone,stand-0.1.pdf';

// Soundscape Performance
import soundscapePdf from '../assets/Media/CS6042-Interactive Media Workshop/Soundscape Performance/Rhythmic Improvisation_ERIC(BAOXIAN)_25068776.pdf';
import soundscapeProcessVideo from '../assets/Media/CS6042-Interactive Media Workshop/Soundscape Performance/Rhythmic Improvisation_Process.mp4';

type ProjectType = 'autumn' | 'dance' | 'embodied' | 'phoneStand' | 'soundscape' | null;

function Mediapage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const [expandedProject, setExpandedProject] = useState<ProjectType>(null);

  // EmbodiedEarth slides array
  const embodiedEarthSlides = [
    slide1, slide2, slide3, slide4, slide5, slide6,
    slide7, slide8, slide9, slide10, slide11
  ];

  const phoneStandImages = [
    phoneStandReadyPrint,
    phoneStandPrint01,
    phoneStandPrint02,
    phoneStandMultiV2,
    phoneStandMultiV201,
    phoneStandMultiV202,
    phoneStandMulti00,
    phoneStandMulti01,
    phoneStandMulti02,
    phoneStandMulti03,
    phoneStandMulti04,
    phoneStandMulti05,
    phoneStandMulti06,
    phoneStandLeaf01,
    phoneStandLeaf02,
    phoneStandLeaf03,
    phoneStandCat01,
    phoneStandCat02
  ];

  const phoneStandVideos = [phoneStandVideo1, phoneStandVideo2, phoneStandVideo3];

  const handleImageClick = (src: string, title: string) => {
    setSelectedImage({ src, title });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const openProject = (project: ProjectType) => {
    setExpandedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setExpandedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="media-page">
      {/* Page Header */}
      <div className="card">
        <h2 className="page-title">Creative Projects</h2>
        <p className="media-intro">
          Photography, Video Production & Interactive Art
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="projects-grid">
        {/* Card 1: Autumn Photography */}
        <div className="project-card" onClick={() => openProject('autumn')}>
          <div className="project-card-image">
            <img src={personalPhoto1} alt="CS60411 Autumn Image" />
            <div className="project-card-overlay">
              <h3>CS60411 Autumn Image</h3>
              <p>Photography Project</p>
            </div>
          </div>
          <div className="project-card-tags">
            <span className="tag">Photography</span>
            <span className="tag">Portrait</span>
          </div>
        </div>

        {/* Card 2: Dance Video */}
        <div className="project-card" onClick={() => openProject('dance')}>
          <div className="project-card-image">
            <img src={behindScenes1} alt="Contemporary Dance Videos" />
            <div className="play-button">▶</div>
            <div className="project-card-overlay">
              <h3>Contemporary Dance Videos</h3>
              <p>Video Production</p>
            </div>
          </div>
          <div className="project-card-tags">
            <span className="tag">Video</span>
            <span className="tag">Dance</span>
          </div>
        </div>

        {/* Card 3: Embodied Earth */}
        <div className="project-card" onClick={() => openProject('embodied')}>
          <div className="project-card-image">
            <img src={slide1} alt="Embodied Earth" />
            <div className="project-card-overlay">
              <h3>Embodied Earth</h3>
              <p>Interactive Art Installation</p>
            </div>
          </div>
          <div className="project-card-tags">
            <span className="tag">Interactive Art</span>
            <span className="tag">UN SDGs</span>
          </div>
        </div>

        {/* Card 4: CS6042 PhoneStand */}
        <div className="project-card" onClick={() => openProject('phoneStand')}>
          <div className="project-card-image">
            <img src={phoneStandReadyPrint} alt="CS6042 PhoneStand" />
            <div className="play-button">▶</div>
            <div className="project-card-overlay">
              <h3>CS6042 PhoneStand</h3>
              <p>Critical Design & Fabrication</p>
            </div>
          </div>
          <div className="project-card-tags">
            <span className="tag">Laser Cut</span>
            <span className="tag">Critical Design</span>
            <span className="tag">Prototype</span>
          </div>
        </div>

        {/* Card 5: Soundscape Performance */}
        <div className="project-card" onClick={() => openProject('soundscape')}>
          <div className="project-card-image project-card-image-placeholder">
            <div className="project-placeholder-content">
              <span className="placeholder-kicker">Performance Video</span>
              <h3>Rhythmic Improvisation</h3>
              <p>Soundscape Performance</p>
            </div>
          </div>
          <div className="project-card-tags">
            <span className="tag">Performance</span>
            <span className="tag">Soundscape</span>
            <span className="tag">Video</span>
          </div>
        </div>
      </div>

      {/* Expanded Project Modal - Autumn Photography */}
      {expandedProject === 'autumn' && (
        <div className="project-modal-overlay" onClick={closeProject}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={closeProject}>×</button>

            <div className="project-modal-body">
              {/* Two-Column Layout */}
              <div className="modal-content-grid">
                {/* Left Column: Media */}
                <div className="modal-media-column">
                  <div className="ImageContainer media-grid">
                    <div className="MediaItem">
                      <img
                        src={personalPhoto1}
                        alt="Autumn Photo 1"
                        className="Image"
                        onClick={() => handleImageClick(personalPhoto1, 'Autumn Photo 1')}
                      />
                    </div>
                    <div className="MediaItem">
                      <img
                        src={personalPhoto2}
                        alt="Autumn Photo 2"
                        className="Image"
                        onClick={() => handleImageClick(personalPhoto2, 'Autumn Photo 2')}
                      />
                    </div>
                    <div className="MediaItem">
                      <img
                        src={personalPhoto3}
                        alt="Autumn Photo 3"
                        className="Image"
                        onClick={() => handleImageClick(personalPhoto3, 'Autumn Photo 3')}
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column: Description */}
                <div className="modal-text-column">
                  <div className="project-description">
                    <AutoScrollText scrollSpeed={15}>
                      <h2 className="project-modal-title">CS60411 Autumn Image</h2>
                      <h3>About This Project</h3>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Expanded Project Modal - Dance Video */}
      {expandedProject === 'dance' && (
        <div className="project-modal-overlay" onClick={closeProject}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={closeProject}>×</button>

            <div className="project-modal-body">
              {/* Two-Column Layout */}
              <div className="modal-content-grid">
                {/* Left Column: Video and Behind the Scenes */}
                <div className="modal-media-column">
                  {/* Video Player */}
                  <div className="VideoContainer">
                    <div className="MediaItem">
                      <div className="youtube-video-wrapper">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/MIpzlGK81mg?loop=1&playlist=MIpzlGK81mg&autoplay=0&mute=0&vq=hd1080&hd=1&rel=0&modestbranding=1"
                          title="Contemporary Dance Performance"
                          style={{ border: 0 }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <p className="video-quality-note">💡 Tip: Click the settings icon (⚙️) in the video player to adjust quality to 1080p for the best viewing experience</p>
                    </div>
                  </div>

                  {/* Behind the Scenes */}
                  <div className="project-description" style={{ marginTop: '2rem' }}>
                    <h3>Behind the Scenes</h3>
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
                </div>

                {/* Right Column: Description */}
                <div className="modal-text-column">
                  <h2 className="project-modal-title">Contemporary Dance Videos</h2>
                  <div className="project-description">
                    <h3>About the Video</h3>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expanded Project Modal - Embodied Earth */}
      {expandedProject === 'embodied' && (
        <div className="project-modal-overlay" onClick={closeProject}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={closeProject}>×</button>

            <div className="project-modal-body">
              {/* Two-Column Layout */}
              <div className="modal-content-grid">
                {/* Left Column: Slideshow */}
                <div className="modal-media-column">
                  <SlideShow slides={embodiedEarthSlides} />
                </div>

                {/* Right Column: Description */}
                <div className="modal-text-column">
                  <div className="project-description">
                    <AutoScrollText scrollSpeed={15}>
                      <h2 className="project-modal-title">UN Global Goals Interactive Art Installation</h2>
                      <h3 style={{
                        color: 'var(--neon-blue)',
                        fontSize: '1.3rem',
                        marginBottom: '1rem',
                        textShadow: '0 0 10px rgba(102, 126, 234, 0.6)'
                      }}>
                        Embodied Earth: A Living Feedback System
                      </h3>
                      <div className="video-intro">
                        <p>
                          <strong>Embodied Earth: A Living Feedback System</strong> is an immersive projection-based installation that translates human presence into ecological consequence. Through real-time sensing, participants' movement, density, and interaction with modular objects dynamically influence a simulated ecosystem of flowing water, plant growth, and marine vitality. At the core of the system is an Environmental Health Index (EHI), a continuous computational variable that governs ecological states ranging from equilibrium to collapse. As bodies gather, construct, settle, or accumulate material proxies of infrastructure and waste, the environment degrades; when restorative elements such as trees or renewable "energy" objects are introduced, regeneration becomes possible but asymmetrically slower than damage. The installation visualises climate feedback loops and tipping points through embodied interaction rather than abstract data.
                        </p>
                        <p>
                          Grounded in UN Sustainable Development Goals 13 (Climate Action), 14 (Life Below Water), and 15 (Life on Land), the project positions sustainability as a collective spatial decision rather than an individual moral gesture. By combining depth-camera tracking, fluid simulation shaders, and state-based ecological logic, Embodied Earth operates as both interactive artwork and computational research artifact. It demonstrates how embodied systems design can render planetary interdependence perceptible, transforming environmental impact from distant abstraction into immediate experiential awareness.
                        </p>
                      </div>
                    </AutoScrollText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expanded Project Modal - CS6042 PhoneStand */}
      {expandedProject === 'phoneStand' && (
        <div className="project-modal-overlay" onClick={closeProject}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={closeProject}>×</button>

            <div className="project-modal-body">
              <div className="modal-content-grid">
                <div className="modal-media-column">
                  <div className="project-description">
                    <h3>Fabrication Process</h3>
                    <div className="ImageContainer media-grid">
                      {phoneStandVideos.map((video, index) => (
                        <div className="MediaItem" key={`phone-video-${index}`}>
                          <video controls className="Image">
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="project-description" style={{ marginTop: '2rem' }}>
                    <h3>Phone Stand Gallery</h3>
                    <div className="ImageContainer media-grid">
                      {phoneStandImages.map((image, index) => (
                        <div className="MediaItem" key={`phone-image-${index}`}>
                          <img
                            src={image}
                            alt={`PhoneStand ${index + 1}`}
                            className="Image"
                            onClick={() => handleImageClick(image, `PhoneStand ${index + 1}`)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="project-description" style={{ marginTop: '2rem' }}>
                    <h3>Vector Design PDF</h3>
                    <div className="pdf-preview-wrapper">
                      <object data={phoneStandPdf} type="application/pdf" className="pdf-embed">
                        <p>
                          PDF preview is not available in this browser.
                          <a href={phoneStandPdf} target="_blank" rel="noreferrer" className="project-link-button">Open PDF</a>
                        </p>
                      </object>
                    </div>
                  </div>
                </div>

                <div className="modal-text-column">
                  <div className="project-description">
                    <AutoScrollText scrollSpeed={15}>
                      <h2 className="project-modal-title">CS6042 PhoneStand</h2>
                      <h3>Critical Design - Phone Stand</h3>
                      <div className="video-intro">
                        <p>
                          This project explored how a simple phone stand could become a small critical design object rather than just a convenient accessory. Our original idea was to change the normal one-phone stand into a structure that can hold up to four phones at the same time. By doing this, the object became more functional, but it also encouraged reflection on how many devices people use around them and how often phones compete for attention in shared spaces.
                        </p>
                        <p>
                          We also changed the overall appearance of the stand and added cat-themed decorative elements, which made the design feel more playful and personal. The cat decoration softened the object visually, while the expanded multi-phone structure made it more unusual and noticeable. During testing, the stand successfully attracted attention and encouraged people to talk about its purpose instead of treating it as an ordinary holder. I think the design worked because it combined practicality with a slightly exaggerated form, making everyday phone use more visible, more social, and more open to reflection.
                        </p>
                      </div>
                    </AutoScrollText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expanded Project Modal - Soundscape Performance */}
      {expandedProject === 'soundscape' && (
        <div className="project-modal-overlay" onClick={closeProject}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={closeProject}>×</button>

            <div className="project-modal-body">
              <div className="modal-content-grid">
                <div className="modal-media-column">
                  <div className="project-description">
                    <h3>Main Performance Video</h3>
                    <div className="VideoContainer">
                      <div className="MediaItem">
                        <div className="youtube-video-wrapper">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/0UX_ycXFJ9Q?autoplay=0&rel=0&modestbranding=1"
                            title="Rhythmic Improvisation Full Version"
                            style={{ border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <p className="video-quality-note">Main performance hosted on YouTube: hallucinogenic/置换</p>
                      </div>
                    </div>
                  </div>

                  <div className="project-description" style={{ marginTop: '2rem' }}>
                    <h3>Process Video</h3>
                    <div className="VideoContainer">
                      <div className="MediaItem">
                        <video controls className="soundscape-video-player">
                          <source src={soundscapeProcessVideo} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>

                  <div className="project-description" style={{ marginTop: '2rem' }}>
                    <h3>Performance PDF</h3>
                    <div className="pdf-preview-wrapper pdf-preview-tall">
                      <object data={soundscapePdf} type="application/pdf" className="pdf-embed">
                        <p>
                          PDF preview is not available in this browser.
                          <a href={soundscapePdf} target="_blank" rel="noreferrer" className="project-link-button">Open PDF</a>
                        </p>
                      </object>
                    </div>
                  </div>
                </div>

                <div className="modal-text-column">
                  <div className="project-description">
                    <AutoScrollText scrollSpeed={15}>
                      <h2 className="project-modal-title">Rhythmic Improvisation</h2>
                      <h3>Soundscape Performance — hallucinogenic/置换</h3>
                      <div className="video-intro">
                        <h4>Capturing the Ephemeral: Rhythmic Improvisation and the Legacy of Nujabes</h4>
                        <p>
                          This soundscape performance is developed around the track <strong>hallucinogenic/置换</strong>. I implemented a set of execution rules akin to a musical algorithm: strictly limiting the editing window to 8 beats (2 bars) and enforcing mandatory track switching. While these constraints may seem rigid, they paradoxically emulate the fluid, organic vitality found in Nujabes' work. I discovered that when my operations were driven by these rules, my brain entered a profound state of flow.
                        </p>
                        <p>
                          Instead of obsessing over perfect parameters, I focused on capturing instantaneous rhythmic intuition and allowing the structure of <strong>hallucinogenic/置换</strong> to guide the pacing of the performance. The result is a process that feels both controlled and improvisational, where restriction becomes a catalyst for expressive movement, timing, and musical responsiveness.
                        </p>
                      </div>
                    </AutoScrollText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

