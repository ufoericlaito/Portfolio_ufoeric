/**
 * Game Demo Page Component
 */

interface DemoCardProps {
  icon: string;
  title: string;
  description: string;
  technologies: string;
  colorScheme: 'purple' | 'violet' | 'blue';
}

/**
 * DemoCard Component
 * Reusable component for displaying demo information
 */
function DemoCard({ icon, title, description, technologies, colorScheme }: DemoCardProps) {
  const colorClasses = {
    purple: 'demo-card-purple',
    violet: 'demo-card-violet',
    blue: 'demo-card-blue'
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
  return (
    <div className="game-demo-page">
      <div className="card">
        <h2 className="page-title">Game Demos</h2>
        <p className="game-demo-intro">
          Interactive game demos showcasing technical art capabilities,
          shader development, and real-time rendering techniques.
        </p>
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