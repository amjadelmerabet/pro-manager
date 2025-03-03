import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="app-logo">
        <h1 className="app-name poppins-bold">Pro Manager</h1>
      </div>
      <div className="quick-links-section">
        <h3 className="section-title poppins-bold">Quick links</h3>
        <ul className="quick-links">
          <li className="quick-link poppins-regular">Home</li>
          <li className="quick-link poppins-regular">Features</li>
          <li className="quick-link poppins-regular">Pricing</li>
          <li className="quick-link poppins-regular">Privacy Policy</li>
          <li className="quick-link poppins-regular">Terms of Service</li>
          <li className="quick-link poppins-regular">Contact us</li>
        </ul>
      </div>
      <div className="social-media-section">
        <h3 className="section-title poppins-bold">Social Media</h3>
        <ul className="social-media-links">
          <li className="social-media-link poppins-regular">Facebook</li>
          <li className="social-media-link poppins-regular">Instagram</li>
          <li className="social-media-link poppins-regular">Twitter</li>
          <li className="social-media-link poppins-regular">YouTube</li>
        </ul>
      </div>
      <div className="contact-section">
        <h3 className="section-title poppins-bold">Contact</h3>
        <ul className="contact-links">
          <li className="contact-link poppins-regular">support@promanager.com</li>
          <li className="contact-link poppins-regular">+212 6 98 09 45 55</li>
          <li className="contact-link poppins-regular">Send us a message</li>
        </ul>
      </div>
    </footer>
  )
}