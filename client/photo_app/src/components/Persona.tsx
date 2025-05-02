import React from 'react';

const personaStyles: React.CSSProperties = {
  maxWidth: '600px',
  margin: '40px auto',
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
  padding: '2rem',
  textAlign: 'center',
};

const imgStyles: React.CSSProperties = {
  borderRadius: '50%',
  marginBottom: '1rem',
};

const ulStyles: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: '1rem 0',
};

const liStyles: React.CSSProperties = {
  margin: '0.5rem 0',
};

const Persona: React.FC = () => (
  <div style={personaStyles}>
    <h1>Persona: Jane Doe</h1>
    <img
      src="https://placehold.co/200x200?text=Persona"
      alt="Persona"
      style={imgStyles}
    />
    <ul style={ulStyles}>
      <li style={liStyles}><strong>Age:</strong> 29</li>
      <li style={liStyles}><strong>Occupation:</strong> Hobbyist Photographer</li>
      <li style={liStyles}><strong>Goals:</strong> Share photos, get feedback, organize gallery</li>
      <li style={liStyles}><strong>Pain Points:</strong> Hard to find photos, wants easy upload, values privacy</li>
    </ul>
    <p>
      Jane loves capturing moments on her DSLR and sharing them with friends. She wants a simple, beautiful platform to upload, sort, and discuss her photos.
    </p>
  </div>
);

export default Persona;