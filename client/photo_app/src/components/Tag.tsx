// import React from 'react';
import { useState, useEffect } from 'react';
import { APIResult } from '../types.tsx';

// FIXME: we will get that from api
let tags = [
    { id: 1, type: "lens", value: "Canon EF-M 55-200mm f4.5-6.3"},
    { id: 2, type: "lens", value: "Fujifilm XF 150-600mm F5.6-8 R"},
    { id: 3, type: "lens", value: "Canon 28mm F3.5 Macro"},
    { id: 4, type: "lens", value: "Nikon AF-S DX Nikkor 18-55mm f3.5-5.6G VR II"},
    { id: 5, type: "lens", value: "Sony 500mm F4 G SS"},
    { id: 6, type: "lens", value: "Canon EF-M 55-200mm f4.5-6.3"},
    { id: 7, type: "lens", value: "Fujifilm XF 150-600mm F5.6-8 R"},
    { id: 8, type: "lens", value: "Canon 28mm F3.5 Macro"},
    { id: 9, type: "lens", value: "Nikon AF-S DX Nikkor 18-55mm f3.5-5.6G VR II"},
    { id: 10, type: "lens", value: "Sony 500mm F4 G SSM" },
    { id: 11, type: "freeform", value: "public" }
]

const getAllTags = async (): Promise<APIResult> => {
    const r: APIResult = {
        message: "fetch ok",
        code: 1,
        data: tags
    }
    return r;
}

let setStatus = (result: APIResult) {
    console.log(`Status: ${result.code}: ${result.message}`);
}

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
