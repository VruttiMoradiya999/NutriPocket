import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import ProblemStatement from './components/ProblemStatement';
import MessRescue from './components/MessRescue';
import ValueProp from './components/ValueProp';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ProblemStatement />
        <Features />
        <MessRescue />
        <ValueProp />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">NutriPocket</div>
          <p>© 2026 NutriPocket. Built for the Hackathon. Maximum Nutrition. Minimal Rupee.</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
      <style>{`
        .footer {
          padding: 6rem 2rem;
          text-align: center;
          background: #0A0A0A;
          color: white;
          margin-top: 0;
        }
        .footer-logo {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: var(--secondary-pink);
        }
        .footer-content p {
          color: #888;
          font-weight: 500;
          max-width: 400px;
          margin: 0 auto 2rem;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }
        .footer-links a {
          color: #555;
          font-weight: 600;
          transition: color 0.3s;
        }
        .footer-links a:hover {
          color: white;
        }
      `}</style>
    </div>
  );
}

export default App;
