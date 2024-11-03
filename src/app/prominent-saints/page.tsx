'use client';

import Image from 'next/image';
import saintsData from '../data/saints.json'; // Adjust this path if necessary

const ProminentSaintsPage = () => {
  return (
    <div className="container">
      <h1 className="title">Prominent Saints of India</h1>
      <div className="saintsGrid">
        {saintsData.map((saint) => (
          <div key={saint.id} className="saintCard">
            <Image
              src={saint.profileImage}
              alt={saint.name}
              width={200}
              height={250}
              className="profileImage"
            />
            <h2 className="saintName">{saint.name}</h2>
            <h3 className="saintTitle">{saint.title}</h3>
            <p className="saintDescription">{saint.description}</p>
            <ul className="highlights">
              {saint.highlights.map((highlight, index) => (
                <li key={index} className="highlight">
                  {highlight}
                </li>
              ))}
            </ul>
            <p className="bio">{saint.bio}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          padding: 40px;
        
          color: #333;
        }

        .title {
          font-size: 3rem;
          text-align: center;
          color: #e65100; /* Orange color for title */

          text-align: center;
          margin-bottom: 40px;
          margin-top: 50px;
        }

        .saintsGrid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .saintCard {
          background-color: #fff3e0;
          border: 1px solid #e65100;
          padding: 20px;
          border-radius: 8px;
          max-width: 300px;
          text-align: center;
        }

        .profileImage {
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .saintName {
          font-size: 1.5rem;
          font-weight: bold;
          color: #bf360c;
        }

        .saintTitle {
          font-size: 1.2rem;
          color: #e65100;
        }

        .saintDescription,
        .bio {
          font-size: 1rem;
          color: #5d4037;
        }

        .highlights {
          list-style-type: none;
          padding: 0;
          color: #e65100;
        }

        .highlight {
          background-color: #ffe0b2;
          padding: 5px;
          margin: 5px 0;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default ProminentSaintsPage;
