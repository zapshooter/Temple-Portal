'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import temples from '../data/temples.json'; // Adjust the path if necessary

const TemplesPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating a loading effect (e.g., fetching data from an API)
  useEffect(() => {
    // Assuming the data takes 2 seconds to load
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <p>Loading temples...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Top 100 Temple Destinations</h1>
      <div className="temple-grid">
        {temples.map((temple, index) => (
          <Link key={temple.id} href={`/temples/${temple.id}`} legacyBehavior>
            <div className="temple-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <img src={temple.images[0]} alt={temple.name} />
              <h3>{temple.name}</h3>
              <p>{temple.location}</p>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .container {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 50px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        h1 {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.5rem;
        }

        .temple-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          width: 100%;
        }

        .temple-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          padding: 10px;
          height: 350px;
          opacity: 0;
          transform: translateY(20px); /* Starting position for animation */
          animation: fadeInUp 0.6s forwards;
        }

        .temple-card:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transform: scale(1.05); /* Adds a slight zoom-in on hover */
        }

        .temple-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .temple-card h3 {
          margin: 10px;
          font-size: 18px;
        }

        .temple-card p {
          margin: 10px;
          color: #555;
        }

        /* Loading State Styles */
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-size: 1.5rem;
          color: #555;
        }

        /* Fade-in animation */
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Layout */
        @media (max-width: 1024px) {
          .temple-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .temple-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default TemplesPage;
