export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <span className="footer-link">Audio Description</span>
        <span className="footer-link">Help Center</span>
        <span className="footer-link">Gift Cards</span>
        <span className="footer-link">Media Center</span>
        <span className="footer-link">Investor Relations</span>
        <span className="footer-link">Jobs</span>
        <span className="footer-link">Terms of Use</span>
        <span className="footer-link">Privacy</span>
        <span className="footer-link">Legal Notices</span>
        <span className="footer-link">Cookie Preferences</span>
        <span className="footer-link">Corporate Information</span>
        <span className="footer-link">Contact Us</span>
      </div>
      <div className="footer-copy">
        <p>&copy; {new Date().getFullYear()} Cinevault, Inc.</p>
      </div>
    </footer>
  );
}