/**
 * Contact Page Component
 * Displays contact information and social links
 */
function Contact() {
  return (
    <div className="card">
      <h2 className="page-title">Get In Touch</h2>

      <div className="contact-content">
        <p className="contact-intro">
          If you have any questions or would like to collaborate, feel free to reach out!
        </p>

        <div className="contact-methods">
          {/* Email */}
          <div className="contact-card contact-card-email">
            <div className="contact-icon">📧</div>
            <strong className="contact-label">Email</strong>
            <p className="contact-info">
              <a
                href="mailto:laito0721@Gmail.com"
                className="contact-link"
              >
                laito0721@Gmail.com
              </a>
            </p>
          </div>

          {/* LinkedIn */}
          <div className="contact-card contact-card-linkedin">
            <div className="contact-icon">💼</div>
            <strong className="contact-label">LinkedIn</strong>
            <p className="contact-info">
              <a
                href="https://www.linkedin.com/in/baoxian-zhang-8b8272157/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                View Profile
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
