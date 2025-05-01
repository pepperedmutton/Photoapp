import './App.css';
import { useState } from 'react';
import cameraBanner from './assets/cameraBanner.jpg';
import Login from './components/Login';
import { Status } from './components/Status';

function App() {
  const [currentSort, setCurrentSort] = useState('date');
  const [currentFilter, setCurrentFilter] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [loginToken, setLoginToken] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSortChange = (sortBy: string) => {
    setCurrentSort(sortBy);
  };
  const handleFilterChange = (filterBy: string) => {
    setCurrentFilter(filterBy);
  };
  const handleToggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? 'darkmode' : 'light-mode'}>
      {/* Navbar */}
      <header>
        <nav className="navbar">
          <div className="navbar-left">
            <span className="navbar-logo">📷 ProCamShare</span>
            <select
              value={currentSort}
              onChange={(e) => handleSortChange(e.target.value)}
              className="navbar-select"
            >
              <option value="date">Sort by Date</option>
              <option value="name">Sort by Name</option>
              <option value="camera">Sort by Camera</option>
            </select>
            <input
              type="text"
              placeholder="Filter by tag or camera..."
              value={currentFilter}
              onChange={(e) => handleFilterChange(e.target.value)}
              className="navbar-input"
            />
          </div>
          <div className="navbar-right">
            <button className="navbar-btn" onClick={handleToggleDarkMode}>
              🌙
            </button>
            <button className="navbar-btn">Upload</button>
            <button className="navbar-btn">Login</button>
          </div>
        </nav>
        <Login
          setStatusMessage={setStatusMessage}
          setLoginToken={setLoginToken}
        />
        <Status
          statusMessage={statusMessage}
        />
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src={cameraBanner} alt="Camera" className="hero-image" />
          <h1>Welcome to ProCamShare</h1>
          <p>
            Discover, share, and manage your best photography moments.<br />
            Sort, filter, and upload your photos with ease!
          </p>
          <a href="#features" className="cta-button">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>📸 Upload Photos</h3>
            <p>Share your favorite shots with the community.</p>
          </div>
          <div className="feature">
            <h3>🔍 Smart Filters</h3>
            <p>Find photos by tags, camera, or date instantly.</p>
          </div>
          <div className="feature">
            <h3>🌙 Dark Mode</h3>
            <p>Switch between light and dark themes for comfort.</p>
          </div>
        </div>
      </section>

      {/* Flows Section */}
      <section className="flows">
        <h2>User Flows</h2>
        <div className="flow-item">
          <h3>Upload Flow</h3>
          <ol>
            <li>Click the Upload button in the navbar.</li>
            <li>Select your photo and fill in details.</li>
            <li>Submit to share with the community.</li>
          </ol>
        </div>
        <div className="flow-item">
          <h3>Filter & Sort Flow</h3>
          <ol>
            <li>Use the filter input or sort dropdown in the navbar.</li>
            <li>Instantly see results update in the gallery.</li>
          </ol>
        </div>
        <div className="flow-item">
          <h3>Dark Mode Flow</h3>
          <ol>
            <li>Click the 🌙 button to toggle dark mode.</li>
            <li>Enjoy a comfortable viewing experience.</li>
          </ol>
        </div>
      </section>

      {/* Prototype Sketch Ideas Section */}
      <section className="prototype-sketch">
        <h2>ProCamShare Prototype Sketch Ideas</h2>
        <div className="sketches">
          <div className="sketch">
            <img src="https://placehold.co/300x180?text=Landing+Sketch" alt="Landing Page Sketch" />
            <p>Landing page with hero, features, and call-to-action.</p>
          </div>
          <div className="sketch">
            <img src="https://placehold.co/300x180?text=Gallery+Sketch" alt="Gallery Sketch" />
            <p>Gallery grid with filter and sort options.</p>
          </div>
          <div className="sketch">
            <img src="https://placehold.co/300x180?text=Upload+Sketch" alt="Upload Sketch" />
            <p>Upload form for adding new photos.</p>
          </div>
        </div>
      </section>

      {/* Prototype Section */}
      <section className="prototype">
        <h2>Prototype</h2>
        <ul>
          <li>Responsive design for all devices</li>
          <li>Accessible color contrast</li>
          <li>Fast and intuitive navigation</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span>📷 ProCamShare</span>
          </div>
          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#flows">User Flows</a>
            <a href="#prototype">Prototype</a>
          </div>
          <div className="footer-social">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="mailto:info@procamshare.com">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} ProCamShare. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;