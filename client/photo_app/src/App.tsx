import './App.css'; 
import { useState } from 'react';

function App() {
  const [currentSort, setCurrentSort] = useState('date');
  const [currentFilter, setCurrentFilter] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleSortChange = (sortBy: string) => {
    setCurrentSort(sortBy);
  };
  const handleFilterChange = (filterBy: string) => {
    setCurrentFilter(filterBy);
  };
  const handleToggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? 'darkmode' : 'light-mode'}>
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
      </header>
      {/* Add your main content here */}
    </div>
  );
}

export default App;