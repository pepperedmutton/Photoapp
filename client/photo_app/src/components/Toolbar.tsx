import React from 'react';

interface ToolbarProps {
  onSortChange: (sortBy: string) => void;
  onFilterChange: (filter: string) => void;
  onToggleDarkMode: () => void;
  currentSort: string;
  currentFilter: string;
}

const Toolbar: React.FC<ToolbarProps> = ({
  onSortChange,
  onFilterChange,
  onToggleDarkMode,
  currentSort,
  currentFilter,
}) => {
  return (
    <div className="toolbar">
      <div className="sort-filter-group">
        <select
          value={currentSort}
          onChange={(e) => onSortChange(e.target.value)}
          className="input-field"
        >
          <option value="date">Sort by Date</option>
          <option value="name">Sort by Name</option>
          <option value="camera">Sort by Camera</option>
        </select>

        <input
          type="text"
          placeholder="Filter by tag or camera..."
          value={currentFilter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="input-field"
        />
      </div>

      <button className="button" onClick={onToggleDarkMode}>
        🌙 Toggle Dark Mode
      </button>
    </div>
  );
};

export default Toolbar;
