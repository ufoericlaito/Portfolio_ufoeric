/**
 * About Page Component
 * Displays professional background and expertise with personal photos
 */
import personalPhoto1 from '../assets/About/mmexport1743588375593.jpg';
import personalPhoto2 from '../assets/About/mmexport1744459376841.jpg';

function About() {
  return (
    <div className="about card">
      <h2 className="page-title">About Me</h2>

      <div className="about-content">
        {/* Personal Photos Section */}
        <div className="about-photos">
          <div className="about-photo-item">
            <img src={personalPhoto1} alt="Personal Photo 1" className="about-photo" />
          </div>
          <div className="about-photo-item">
            <img src={personalPhoto2} alt="Personal Photo 2" className="about-photo" />
          </div>
        </div>

        {/* Professional Background */}
        <div className="about-text-content">
          <p className="about-text">
            I'm a <strong>Technical Artist</strong> with three years of experience developing and producing visual games with <strong>Unity</strong> and <strong>Unreal Engine</strong>.
            My skills enable me to create current industry standard art assets with expertise in <strong>Toon shading</strong>.
            As a team leader of several game production programs, I devoted myself to the development and production of massively multiplayer games including <strong>Diablo Immortal</strong> and <strong>Knives Out</strong>.
            I am currently working on <strong>UE projects</strong> with advanced Unity production skills.
          
          </p>

        </div>
      </div>
    </div>
  );
}

export default About;
