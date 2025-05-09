import React, { useEffect } from 'react';
import './Persona.css';

const personas = [
  {
    img: '/Lisa.png',
    alt: 'Lisa',
    name: 'Lisa the Landscape Pro',
    details: [
      { label: 'Age', value: '29' },
      { label: 'Location', value: 'Vancouver, Canada' },
      { label: 'Profession', value: 'Full-time Landscape Photographer' },
      { label: 'Camera of choice', value: 'Canon R5 with a 24-70mm f/2.8' },
      { label: 'Comment', value:'I’ll spend hours in the cold just to get the right morning light — I want a place that treats that work with respect.' },
      { label: 'Motivations', value: 'Spend most of the time outdoors, chasing light in remote places.' },
      { label: 'Frustrations', value: 'Frustrated by social platforms that compress images and ignore technical work.' },
      { label: 'Enjoy', value: 'Love exchanging shooting techniques and gear tips with fellow pros.'},
      { label: 'Wants', value: 'Wish there was a slower, more thoughtful platform focused on the craft. Want to be able to explain settings, gear, and story behind each shot.'},
    ],
  },
  {
    img: '/Raj.png',
    alt: 'Raj',
    name: 'Raj the Gear Enthusiast',
    details: [
      { label: 'Age', value: '34' },
      { label: 'Location', value: 'Tokyo, Japan' },
      { label: 'Profession', value: 'Software Engineer / Hobbyist Photographer' },
      { label: 'Camera of choice', value: 'Fujifilm X-T5' },
      { label: 'Comment', value: 'Half the fun is comparing how different lenses render the same scene. I like talking shop just as much as taking photos.' },
      { label: 'Motivations', value : 'Treats photography like a playground for tech experimentation'},
      { label: 'Frustrations', value: 'Wants to follow users by camera model, not just style or popularity' },
      { label: 'Enjoy', value: 'Loves tinkering with vintage lenses and adapting them to mirrorless bodies' },
      { label: 'Wants', value: 'Look for a platform where gear matters — not just the final image. Want to follow users by camera model, not just style or popularity.' },
    ],
  },
  {
    img: '/Emily.png',
    alt: 'Emily',
    name: 'Emily the Event Shooter',
    details: [
      { label: 'Age', value: '42' },
      { label: 'Location', value: 'Austin, USA' },
      { label: 'Profession', value: 'Wedding & Event Photographer' },
      { label: 'Camera of choice', value: 'Sony A7 IV with a 70-200mm'},
      { label: 'Comment', value: 'When I shoot a wedding, I’m not just capturing images — I’m capturing moments that mean everything to someone.' },
      { label: 'Motivations', value: 'Works long hours and needs to deliver photos quickly and cleanly' },
      { label: 'Frustrations', value: 'Finds typical platforms too chaotic for professional presentation' },
      { label: 'Enjoy', value: 'Loves the thrill of capturing candid moments and the joy of seeing clients react to their photos.' },
      { label: 'Wants', value: 'Would love a way to collect feedback from other pros, quietly and privately. Wants to organize shoots by event, and keep client-facing galleries polished.' },
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