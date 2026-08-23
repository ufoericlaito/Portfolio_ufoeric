/**
 * Game Demo Page Component
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface DemoCardProps {
  icon: string;
  title: string;
  description: string;
  technologies: string;
  colorScheme: 'purple' | 'violet' | 'blue' | 'teal';
}

/**
 * DemoCard Component
 * Reusable component for displaying demo information
 */
function DemoCard({ icon, title, description, technologies, colorScheme }: DemoCardProps) {
  const colorClasses = {
    purple: 'demo-card-purple',
    violet: 'demo-card-violet',
    blue: 'demo-card-blue',
    teal: 'demo-card-teal'
  };

  return (
    <div className={`demo-card ${colorClasses[colorScheme]}`}>
      <h3 className="demo-title">
        {icon} {title}
      </h3>
      <p className="demo-description">{description}</p>
      <div className="demo-tech">
        <strong className="demo-tech-label">Technologies:</strong>
        <span className="demo-tech-value">{technologies}</span>
      </div>
    </div>
  );
}

function Game_Demo() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#thesis-demo') {
      const el = document.getElementById('thesis-demo');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  return (
    <div className="game-demo-page">
      <div className="card">
        <h2 className="page-title">Game Demos</h2>
        <p className="game-demo-intro">
          Interactive game demos showcasing technical art capabilities,
          shader development, and real-time rendering techniques.
        </p>
      </div>

      {/* MSc Thesis Demo - Interactive Music & Visual Healing */}
      <div className="card" id="thesis-demo">
        <div className="demo-card demo-card-teal">
          <h3 className="demo-title">
            Interactive Music &amp; Visual Healing: A System for Stress Relief and Creative Agency
          </h3>
          <p className="demo-meta">
            MSc Interaction and Experience Design · University of Limerick · Thesis Demo
          </p>
          <p className="demo-description">
            An embodied audiovisual installation that turns body movement into real-time music
            and generative visuals. Built for non-musicians under everyday stress, the system
            removes traditional barriers—instruments, notation, and “fail states”—so creative
            expression itself becomes a tool for emotional regulation and flow.
          </p>
          <p className="demo-description">
            A standard webcam and MediaPipe BlazePose track 33 skeletal keypoints; Unity maps
            motion parameters (velocity, hand height, proximity) to ambient sound and fluid
            shader visuals. Slow gestures yield calm, honey-like waves; energetic movement
            creates turbulent colour and denser harmony—always responsive, never wrong.
          </p>
          <div className="demo-video-embed">
            <div className="youtube-video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ABgcs2NTmd8?enablejsapi=1&autoplay=0&rel=0&modestbranding=1"
                title="Interactive Music & Visual Healing - Thesis Demo"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="demo-tech">
            <strong className="demo-tech-label">Technologies:</strong>
            <span className="demo-tech-value">
              Unity, MediaPipe / BlazePose, Compute Shader / Shader Graph, Generative Audio
            </span>
          </div>
        </div>
      </div>

      {/* Unity Toon Shader Demo - 独立卡片 */}
      <div className="card">
        <DemoCard
          icon="🎮"
          title="Unity Toon Shader Demo"
          description="A demonstration of custom toon shading techniques in Unity, featuring stylized rendering, outline effects, and dynamic lighting."
          technologies="Unity, HLSL, Custom Shaders"
          colorScheme="purple"
        />
      </div>

      {/* Unreal Engine VFX Showcase - 独立卡片 */}
      <div className="card">
        <DemoCard
          icon="🌟"
          title="Unreal Engine VFX Showcase"
          description="Real-time visual effects and particle systems created in Unreal Engine 4/5, demonstrating advanced material creation and Niagara systems."
          technologies="Unreal Engine 4/5, Niagara, Material Editor"
          colorScheme="violet"
        />
      </div>

      {/* PBR Material Demo - 独立卡片 */}
      <div className="card">
        <DemoCard
          icon="💎"
          title="PBR Material Demo"
          description="Physically-based rendering materials with advanced texturing techniques, showcasing realistic surface properties and lighting interactions."
          technologies="Substance Painter, Unity/UE, PBR Workflow"
          colorScheme="blue"
        />
      </div>

      {/* Notice - 独立卡片 */}
      <div className="card">
        <div className="demo-notice">
          <p className="demo-notice-text">
            🎬 Interactive demos and video showcases coming soon!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Game_Demo;