import React from 'react';

const Toolbar = ({ onSearch, shortcuts }) => (
  <div className="toolbar">
    <input
      type="text"
      placeholder="Search..."
      onChange={e => onSearch(e.target.value)}
    />
    {shortcuts.map(sc => (
      <button key={sc.label} onClick={sc.action}>{sc.label}</button>
    ))}
  </div>
);

export default Toolbar;