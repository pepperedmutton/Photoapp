import React, { useState } from 'react';
import Tag from './Tag';

interface TagManagementProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

const TagManagement: React.FC<TagManagementProps> = ({ tags, onAddTag, onRemoveTag }) => {
  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    const trimmed = newTag.trim();
    if (trimmed && !tags.includes(trimmed)) {
      onAddTag(trimmed);
      setNewTag('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <div className="tag-management">
      <div className="tag-input-wrapper" style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Add tag..."
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onKeyDown={handleKeyDown}
          className="input-field"
        />
        <button className="button" type="button" onClick={handleAddTag}>
          Add
        </button>
      </div>
      <div className="tag-list">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} removable onRemove={() => onRemoveTag(tag)} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default TagManagement;