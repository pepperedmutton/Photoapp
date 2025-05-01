import React from 'react';

interface TagProps {
    label: string;
    onRemove: () => void;
    onClick: () => void;
    removable?: boolean;
    active?: boolean;
}

const Tag: React.FC<TagProps> = ({ label, onRemove, onClick, removable = false, active = false }) => {
    return (
        <span
            className={`tag ${active ? 'active' : ''}`}
            onClick={onClick}
            style={{ 
                display: 'inline-flex', 
                alignItems: 'center',
                padding: '0.4rem 0.75rem',
                background: active ? '0077cc' : '#eee',
                color: active ? '#fff' : '#333',
                borderRadius: '999px',
                fontSize: '0.85rem',
                marginRight: '0.5rem',
                cursor: 'pointer'
            }}
            >
            {label}
            {removable && (
                <button
                onClick={(e) => {
                    e.stopPropagation();
                    if (onRemove) onRemove();
                }}
                style={{
                    marginLeft: '0.5rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer'
                    }}
                    >
                        &times;
                      </button>
                    )}
                    </span>
            );
        };


export default Tag;
