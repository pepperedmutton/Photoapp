import "./App.css";
import { useState } from "react";
import cameraBanner from "./assets/cameraBanner.jpg";
import Toolbar from "./components/Toolbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import UploadPhoto from "./components/Upload";
import Persona from "./components/Persona";
import Gallery from "./components/Gallery";
import Comment from "./components/Comment";
import Footer from "./components/Footer";
import samplePhotos from "./sample_data/sample_photos";
import initialComments from "./sample_data/initial_comments";

function HomePage(props: {
  currentSort: string;
  currentFilter: string;
  darkMode: boolean;
  loginToken: string;
  statusMessage: string;
  setStatusMessage: (msg: string) => void;
  setLoginToken: (token: string) => void;
  handleToggleDarkMode: () => void;
  handleSortChange: (sortBy: string) => void;
  handleFilterChange: (filterBy: string) => void;
  comments: {
    id: number;
    photoId: number;
    author: string;
    text: string;
    timestamp: string;
  }[];
  onAddComment: (
    photoId: number,
    comment: { author: string; text: string }
  ) => void;
}) {
  const navigate = useNavigate();

  return (
    <div className={props.darkMode ? "dark" : "light"}>
      {/* Navbar */}
      <header>
        <nav className="navbar">
          <Toolbar
            setStatusMessage={props.setStatusMessage}
            setLoginToken={props.setLoginToken}
            statusMessage={props.statusMessage}
            handleToggleDarkMode={props.handleToggleDarkMode}
            handleSortChange={props.handleSortChange}
            handleFilterChange={props.handleFilterChange}
            currentSort={props.currentSort}
            currentFilter={props.currentFilter}
            loginToken={props.loginToken}
          />
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${cameraBanner})` }}
      >
        <div className="hero-content">
          <h1>Welcome to ProCamShare</h1>
          <p>
            Discover, share, and manage your best photography moments.
            <br />
            Sort, filter, and upload your photos with ease!
          </p>
          <a href="#features" className="cta-button">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div
            className="feature"
            onClick={() => navigate("/upload")}
            style={{ cursor: "pointer" }}
          >
            <h3>📸 Upload Photos</h3>
            <p>Share your favorite shots with the community.</p>
          </div>
          <div
            className="feature"
            onClick={() => navigate("/gallery")}
            style={{ cursor: "pointer" }}
          >
            <h3>🔍 Manage Gallery</h3>
            <p>Edit, update, or delete your uploads.</p>
          </div>
          <div className="feature">
            <h3>View & Sort Photos</h3>
            <p>Dynamic gallery with filters and sorting.</p>
          </div>
          <div className="feature">
            <h3>Device Library</h3>
            <p>Explore and link devices to your photos.</p>
          </div>
          <div className="feature">
            <h3>Comment Section</h3>
            <p>Discuss and share feedback on photos.</p>

            <Comment
              photoId={1}
              comments={props.comments.filter((c) => c.photoId === 1)}
              onAddComment={props.onAddComment}
            />
          </div>
          <div
            className="feature"
            onClick={() => navigate("/persona")}
            style={{ cursor: "pointer" }}
          >
            <h3>Persona User</h3>
            <p>Example of persona user.</p>
            <p>
              {" "}
              Profiles that may be interested in this type of web application.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// CommentPage component to show full comment UI for a given photoId from query string
function CommentPage(props: {
  comments: {
    id: number;
    photoId: number;
    author: string;
    text: string;
    timestamp: string;
  }[];
  onAddComment: (
    photoId: number,
    comment: { author: string; text: string }
  ) => void;
}) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const photoId = Number(params.get("photoId")) || 1;

  return (
    <Comment
      photoId={photoId}
      comments={props.comments.filter((c) => c.photoId === photoId)}
      onAddComment={props.onAddComment}
      standalone
    />
  );
}

function App() {
  const [currentSort, setCurrentSort] = useState("date");
  const [currentFilter, setCurrentFilter] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [loginToken, setLoginToken] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [comments, setComments] = useState(initialComments);

  // Handler for selecting a photo (can be expanded)
  const handleSelectPhoto = (photoId: number) => {
    alert(`Photo ${photoId} selected!`);
  };

  // Handler to add a comment
  const handleAddComment = (
    photoId: number,
    comment: { author: string; text: string }
  ) => {
    setComments((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        photoId,
        author: comment.author,
        text: comment.text,
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              currentSort={currentSort}
              currentFilter={currentFilter}
              darkMode={darkMode}
              loginToken={loginToken}
              statusMessage={statusMessage}
              setStatusMessage={setStatusMessage}
              setLoginToken={setLoginToken}
              handleToggleDarkMode={() => setDarkMode((prev) => !prev)}
              handleSortChange={setCurrentSort}
              handleFilterChange={setCurrentFilter}
              comments={comments}
              onAddComment={handleAddComment}
            />
          }
        />
        <Route path="/upload" element={<UploadPhoto />} />
        <Route path="/persona" element={<Persona />} />
        <Route
          path="/gallery"
          element={
            <Gallery
              photos={samplePhotos}
              onSelectPhoto={handleSelectPhoto}
              onBack={() => window.history.back()}
            />
          }
        />
        {/* Comment page route */}
        <Route
          path="/comments"
          element={
            <CommentPage comments={comments} onAddComment={handleAddComment} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
