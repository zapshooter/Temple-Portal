'use client';

import Link from 'next/link';
import temples from '../data/temples.json'; // Adjust the path if necessary

const TemplesPage = () => {
  return (
    <div className="container">
      <h1>Top 100 Temple Destinations</h1>
      <div className="temple-grid">
        {temples.map((temple) => (
          <Link key={temple.id} href={`/temples/${temple.id}`}>
            <div className="temple-card">
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
          grid-template-columns: repeat(3, 1fr); /* Set 3 columns for larger screens */
          gap: 20px;
          width: 100%;
        }
        .temple-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: box-shadow 0.3s ease;
          padding: 10px;
          height: 350px; /* Set a fixed height to ensure uniform card size */
        }
        .temple-card:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        .temple-card img {
          width: 100%;
          height: 200px; /* Set a specific height for the image */
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

        /* For smaller screens (tablets and phones), make it responsive */
        @media (max-width: 1024px) {
          .temple-grid {
            grid-template-columns: repeat(2, 1fr); /* 2 cards in a row for medium screens */
          }
        }
        @media (max-width: 768px) {
          .temple-grid {
            grid-template-columns: repeat(1, 1fr); /* 1 card in a row for smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default TemplesPage;
