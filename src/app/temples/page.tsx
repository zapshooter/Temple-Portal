'use client';

import { useState, useEffect } from 'react';
import temples from '../data/temples.json'; // Adjust the path if necessary
import TempleCard from '../components/TempleCard'; // Import the TempleCard component

const TemplesPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating a loading effect (e.g., fetching data from an API)
  useEffect(() => {
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
          <TempleCard
            key={temple.id}
            id={temple.id}
            name={temple.name}
            location={temple.location}
            image={temple.images[0]} // Assuming you use the first image
            index={index}
          />
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
          font-family: sans-serif;
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

        /* Loading State Styles */
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-size: 1.5rem;
          color: #555;
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
