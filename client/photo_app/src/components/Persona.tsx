import React, { useEffect } from 'react';
import './Persona.css';

const personas = [
  {
    img: '/Lisa.jpg',
    alt: 'Lisa',
    name: 'Lisa the Landscape Pro',
    details: [
      { label: 'Age', value: '29' },
      { label: 'Profession', value: 'Full-time Landscape Photographer' },
      { label: 'Location', value: 'Vancouver, Canada' },
      { label: 'Goals', value: 'Showcase portfolio, share metadata, engage with community.' },
      { label: 'Frustrations', value: 'Slow uploads, limited metadata support.' },
      { label: 'Wants', value: 'Professional interface, filter by device/settings, constructive feedback.' },
    ],
  },
  {
    img: '/Raj.jpg',
    alt: 'Raj',
    name: 'Raj the Gear Enthusiast',
    details: [
      { label: 'Age', value: '34' },
      { label: 'Profession', value: 'Software Engineer / Hobbyist Photographer' },
      { label: 'Location', value: 'Tokyo, Japan' },
      { label: 'Goals', value: 'Compare gear results, discuss settings, follow gear-based photographers.' },
      { label: 'Frustrations', value: 'Lack of device tagging, no tech-specific community.' },
      { label: 'Wants', value: 'Device library, gear discussions, smart filters.' },
    ],
  },
  {
    img: '/Emily.jpg',
    alt: 'Emily',
    name: 'Emily the Event Shooter',
    details: [
      { label: 'Age', value: '42' },
      { label: 'Profession', value: 'Wedding & Event Photographer' },
      { label: 'Location', value: 'Austin, USA' },
      { label: 'Goals', value: 'Showcase work to clients, quick uploads, manage comments.' },
      { label: 'Frustrations', value: 'Complex interfaces, photo management issues.' },
      { label: 'Wants', value: 'Easy uploads, event organization, client-friendly viewing.' },
    ],
  },
];

const Persona: React.FC = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const btn = document.getElementById('toggle-dark-mode');
    const toggle = () => {
      document.body.classList.toggle('dark');
    };
    btn?.addEventListener('click', toggle);
    return () => {
      btn?.removeEventListener('click', toggle);
    };
  }, []);

  return (
    <div>
      <header>
        <a href="/" className="home-link">🏠 Home</a>
        <h1>ProCamShare - User Personas</h1>
        <button id="toggle-dark-mode" aria-label="Toggle dark mode">🌙</button>
      </header>

      <section className="container">
        {personas.map((persona, idx) => (
          <div className="persona" key={idx}>
            <img src={persona.img} alt={persona.alt} />
            <div className="persona-content">
              <h2>{persona.name}</h2>
              {persona.details.map((d, i) => (
                <p key={i}>
                  <strong>{d.label}:</strong> {d.value}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer>
        <p>
          Made with ❤️ for photographers. &copy; 2025 ProCamShare / Code Chrysalis
        </p>
      </footer>
    </div>
  );
};

export default Persona;