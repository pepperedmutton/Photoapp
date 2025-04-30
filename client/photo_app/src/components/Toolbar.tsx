import React from 'react';

interface Shortcut {
  label: string;
  action: () => void;
}

interface ToolbarProps {
  onSearch: (query: string) => void;
  shortcuts: Shortcut[];
}

const Toolbar: React.FC<ToolbarProps> = ({ onSearch, shortcuts }) => (
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