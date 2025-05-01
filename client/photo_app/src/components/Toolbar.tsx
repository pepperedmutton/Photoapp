import React from 'react';
import Login from './Login';
import { Status } from './Status';
import './Toolbar.css';

interface ToolbarProps {
  // onSortChange: (sortBy: string) => void;
  // onFilterChange: (filter: string) => void;
  // onToggleDarkMode: () => void;
  // currentSort: string;
  // currentFilter: string;
  setStatusMessage: (message: string) => void;
  setLoginToken: (token: string) => void;
  loginToken: string;
  statusMessage: string;
  handleToggleDarkMode: () => void;
  handleFilterChange: (filterBy: string) => void;
  handleSortChange: (sortBy: string) => void;
  currentSort: string;
  currentFilter: string;
}

const Toolbar: React.FC<ToolbarProps> = ({
  // onSortChange,
  // onFilterChange,
  // onToggleDarkMode,
  // currentSort,
  // currentFilter,
  handleToggleDarkMode,
  handleFilterChange,
  handleSortChange,
  setStatusMessage,
  setLoginToken,
  loginToken,
  statusMessage,
  currentSort,
  currentFilter,
}) => {
  return (
    <>
      <div className="toolbar-top">
          <span className="toolbar-logo">📷 ProCamShare</span>

          <select
            value={currentSort}
            onChange={(e) => handleSortChange(e.target.value)}
            className="toolbar-sort"
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
            className="toolbar-filter"
          />

          <div className="sort-filter-group">
            {/* <select
              value={currentSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="input-field"
            >
              <option value="date">Sort by Date</option>
              <option value="name">Sort by Name</option>
              <option value="camera">Sort by Camera</option>
            </select> */}

            {/* <input
              type="text"
              placeholder="Filter by tag or camera..."
              value={currentFilter}
              onChange={(e) => onFilterChange(e.target.value)}
              className="input-field"
            /> */}
          </div>

 
      </div>

      <div className="toolbar-middle">
        <Login
          setStatusMessage={setStatusMessage}
          setLoginToken={setLoginToken}
          loginToken={loginToken}
        />
        <button className="light-mode-btn" onClick={handleToggleDarkMode}>
        🌙
        </button>
      </div>

      <div className="toolbar-bottom">
        <Status
          statusMessage={statusMessage}
        />
      </div>
    </>
  );
};

export default Toolbar;
