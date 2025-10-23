/**
 * Work Experience Page Component
 * Displays professional work history
 */

function Work_Experience() {
  return (
    <div className="card">
      <h2 className="page-title">Work Experience</h2>

      <div className="work-experience-content">
        <p className="work-experience-text">
          Three years of professional experience in technical art and game development,
          working on AAA titles and leading production teams.
        </p>

        <div className="experience-section">
          <h3 className="experience-title">Diablo Immortal - Team Leader</h3>
          <p className="experience-description">
            Led technical art team for massively multiplayer online game development.
            Responsible for shader development, visual effects, and art pipeline optimization.
          </p>
          <p className="experience-skills">
            <strong>Skills:</strong> Proprietary Engine, Shader Development, Team Leadership, VFX
          </p>
        </div>

        <div className="experience-section">
          <h3 className="experience-title">Knives Out - Technical Artist</h3>
          <p className="experience-description">
            Contributed to the development of battle royale game with focus on toon shading,
            character rendering, and performance optimization.
          </p>
          <p className="experience-skills">
            <strong>Skills:</strong> Toon Shading, Character Art, Optimization, Unity
          </p>
        </div>

        <div className="experience-section">
          <h3 className="experience-title">Current Focus - Present</h3>
          <p className="experience-description">
            Currently working on Unreal Engine projects, leveraging advanced Unity production
            skills and expanding expertise in next-gen rendering techniques.
          </p>
          <p className="experience-skills">
            <strong>Skills:</strong> Unreal Engine 4/5, Advanced Unity, Next-Gen Graphics, R&D
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work_Experience;