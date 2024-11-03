'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import temples from '../data/temples.json'; // Adjust the path if necessary
import TempleCard from '../components/TempleCard'; // Import the TempleCard component

const StatePage = () => {
  const router = useRouter();
  const { state } = router.query; // Get the state name from the URL
  const [filteredTemples, setFilteredTemples] = useState([]);

  // Use useEffect to wait until the router is ready and state is available
  useEffect(() => {
    if (state) {
      // Filter the temples by the state selected
      const filtered = temples.filter(temple => {
        if (!temple.state) return false; // Handle undefined state in temple
        // If temple.state is an array, compare each state
        if (Array.isArray(temple.state)) {
          return temple.state.some(s => s.toLowerCase() === state.toLowerCase());
        }
        // If temple.state is a string, compare directly
        return temple.state.toLowerCase() === state.toLowerCase();
      });
      setFilteredTemples(filtered);
    }
  }, [state]); // Only run when state changes

  if (!state) {
    // Return a loading state if state is not yet available
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="title">{`Temples in ${state}`}</h1>

      {filteredTemples.length > 0 ? (
        <div className="temple-grid">
          {filteredTemples.map(temple => (
            <TempleCard key={temple.id} temple={temple} />
          ))}
        </div>
      ) : (
        <p>No temples found in this state.</p>
      )}

      <style jsx>{`
        .container {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 50px auto;
        }
        .title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.5rem;
        }
        .temple-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
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

export default StatePage;