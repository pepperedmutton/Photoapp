export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">ProCamShare</div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="/gallery">Gallery</a>
          <a href="/upload">Upload</a>
          <a href="/persona">Persona</a>
        </div>
        <div className="footer-social">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:support@procamshare.com">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Made with ❤️ for photographers. &copy;
        2025 ProCamShare / Code Chrysalis
      </div>
    </footer>
  );
}
