'use client';

import { useState } from 'react';
import temples from '../../data/temples.json';
import Image from 'next/image';
import Link from 'next/link';

type TempleDetailParams = {
  params: {
    id: string;
  };
};

const TempleDetail = ({ params }: TempleDetailParams) => {
  const { id } = params;
  const temple = temples.find((temple) => temple.id === id);

  const [activeTab, setActiveTab] = useState('about');

  if (!temple) return <div>Loading...</div>;

  return (
    <div className="temple-detail-container">
      {/* Big Attractive Heading */}
      <h1 className="temple-name">{temple.name}</h1>

      {/* Three Card Section */}
      <div className="three-card-layout">
        {/* First Card: Temple Image */}
        <div className="card image-card">
          <Image
            src={temple.images[0]} // Assuming you have a main image field in your JSON
            alt={`${temple.name} image`}
            width={400}
            height={300}
            className="temple-image"
          />
        </div>

        {/* Second Card: Temple Description */}
        <div className="card description-card">
          <h2>About the Temple</h2>
          <p>{temple.description}</p>
          {/* <p>Thanks to {temple.devotionalSongContributor} for the devotional song being played in the background.</p> */}
          {/* <Link href="/puja-booking">
            <a className="puja-link">Click here to Book Puja/ Make Donation</a>
          </Link> */}
        </div>

        {/* Third Card: Overview */}
        <div className="card overview-card">
          <h2>Overview</h2>
          <p><strong>Best time to visit:</strong> {temple.bestTimeToVisit}</p>
          <p><strong>Location:</strong> {temple.location}</p>
          {/* <p><strong>Recommended stay:</strong> {temple.recommendedStay}</p> */}
          <p><strong>Nearest Railway Station:</strong> {temple.nearestRailwayStation}</p>
          <p><strong>Nearest Airport:</strong> {temple.nearestAirport}</p>
          <p><strong>Famous for:</strong> {temple.famousFor}</p>
        </div>
      </div>

      {/* Tabbed Section */}
      <div className="tabbed-section">
        {/* Tab buttons */}
        <div className="tabs">
          <button onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'active' : ''}>About Temple</button>
          <button onClick={() => setActiveTab('history')} className={activeTab === 'history' ? 'active' : ''}>History</button>
          <button onClick={() => setActiveTab('weather')} className={activeTab === 'weather' ? 'active' : ''}>Weather/Climate</button>
          <button onClick={() => setActiveTab('howToReach')} className={activeTab === 'howToReach' ? 'active' : ''}>How to Reach</button>
          <button onClick={() => setActiveTab('pujas')} className={activeTab === 'pujas' ? 'active' : ''}>Pujas Offered</button>
          <button onClick={() => setActiveTab('map')} className={activeTab === 'map' ? 'active' : ''}>Map</button> {/* New Map Tab */}
        </div>

        {/* Tab content */}
        <div className="tab-content">
          {activeTab === 'about' && <p>{temple.description}</p>}
          {activeTab === 'history' && <p>{temple.history}</p>}
          {activeTab === 'weather' && <p>{temple.weather}</p>}
          {activeTab === 'howToReach' && <p>{temple.howToReach}</p>}
          {activeTab === 'pujas' && <p>{temple.pujasOffered}</p>}
          
          {/* Map tab content */}
          {activeTab === 'map' && (
            <div className="map-tab-content">
              <h2>Location Map</h2>
              <iframe
                src={`https://maps.google.com/maps?q=${temple.lat},${temple.lng}&z=15&output=embed`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .temple-detail-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 100px;
        }

        .temple-name {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
        }

        .three-card-layout {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 1200px;
          margin-bottom: 40px;
        }

        .card {
          width: 32%;
          background: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 20px;
        }

        .image-card {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .temple-image {
          border-radius: 8px;
        }

        .description-card {
          font-family: sans-serif;
        }

        .puja-link {
          display: block;
          margin-top: 10px;
          color: #0070f3;
          font-weight: bold;
          text-decoration: underline;
        }

        .overview-card {
          font-size: 1rem;
          line-height: 1.5;
        }

        .tabbed-section {
          width: 100%;
          max-width: 1200px;
        }

        .tabs {
          display: flex;
          margin-bottom: 20px;
          justify-content:center;
        }

        .tabs button {
          padding: 10px 15px;
          margin-right: 5px;
          cursor: pointer;
          background-color: yellow;
          border: none;
          border-radius: 5px;
          transition: background-color 0.3s;
        }

        .tabs button.active {
          background-color: #0070f3;
          color: white;
        }

        .tab-content {
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default TempleDetail;
