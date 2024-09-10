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

  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState('about');

  if (!temple) return <div>Loading...</div>;

  const handleNextImage = () => setCurrentImage((prevIndex) => (prevIndex + 1) % temple.images.length);
  const handlePrevImage = () => setCurrentImage((prevIndex) => (prevIndex === 0 ? temple.images.length - 1 : prevIndex - 1));

  return (
    <div className="temple-detail-container">
      {/* Big Attractive Heading */}
      <h1 className="temple-name">{temple.name}</h1>

      {/* Carousel */}
      <div className="carousel">
        <button onClick={handlePrevImage} className="carousel-btn left">◀</button>
        <Image
          src={temple.images[currentImage]}
          alt={`${temple.name} image`}
          width={800}
          height={500}
          className="temple-image"
        />
        <button onClick={handleNextImage} className="carousel-btn right">▶</button>
      </div>

      <div className="content-section">
        {/* Left Column: Temple Overview */}
        <div className="overview-section">
          <h2>Overview</h2>
          <p className='location-header'>{temple.location}</p>
          <div className="overview-box">
            <p><strong>Best time to visit:</strong> {temple.bestTimeToVisit}</p>
            <p><strong>Located in:</strong> {temple.location}</p>
            <p><strong>Nearest Railway Station:</strong> {temple.nearestRailwayStation}</p>
            <p><strong>Nearest Airport:</strong> {temple.nearestAirport}</p>
            <p><strong>Famous for:</strong> {temple.famousFor}</p>
          </div>
          <Link href="/temples">
            <button className="back-btn">Back to Temples</button>
          </Link>
        </div>

        {/* Right Column: Tabbed Content */}
        <div className="tabbed-section">
          <div className="tabs">
            <button onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'active' : ''}>About Temple</button>
            <button onClick={() => setActiveTab('history')} className={activeTab === 'history' ? 'active' : ''}>History</button>
            <button onClick={() => setActiveTab('weather')} className={activeTab === 'weather' ? 'active' : ''}>Weather/Climate</button>
            <button onClick={() => setActiveTab('howToReach')} className={activeTab === 'howToReach' ? 'active' : ''}>How to Reach</button>
            <button onClick={() => setActiveTab('pujas')} className={activeTab === 'pujas' ? 'active' : ''}>Pujas Offered</button>
            {/* Add more tabs as needed */}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'about' && <p>{temple.description}</p>}
            {activeTab === 'history' && <p>{temple.history}</p>}
            {activeTab === 'weather' && <p>{temple.weather}</p>}
            {activeTab === 'howToReach' && <p>{temple.howToReach}</p>}
            {activeTab === 'pujas' && <p>{temple.pujasOffered}</p>}
            {/* Add more content based on the tab */}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <h2>Location Map</h2>
        <iframe
          src={`https://maps.google.com/maps?q=${temple.lat},${temple.lng}&z=15&output=embed`}
          width="100%"
          height="400"
          style={{ border: 0 }}
          // allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <style jsx>{`
        .temple-detail-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          margin-top: 60px; /* Adjusted to prevent collision with navbar */
        }
        .location-header{
        align-items: center;
        }
        .temple-name {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 20px;
          font-family: sans-sariff;
          text-align: center;
        }
        .carousel {
          position: relative;
          margin-bottom: 20px;
        }
        .temple-image {
          border-radius: 8px;
        }
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          cursor: pointer;
          font-size: 2rem;
          padding: 10px;
          border-radius: 50%;
        }
        .carousel-btn.left {
          left: 10px;
        }
        .carousel-btn.right {
          right: 10px;
        }
        .content-section {
          display: flex;
          flex-direction: row;
          width: 100%;
          max-width: 1200px;
        }
        .overview-section {
          flex: 1;
          padding: 20px;
          margin-right: 20px;
          border-right: 1px solid #ddd;
        }
        .overview-box {
          padding: 15px;
          background-color: #f9f9f9;
          border-radius: 8px;
        }
        .tabbed-section {
          flex: 2;
          padding: 20px;
        }
        .tabs {
          display: flex;
          margin-bottom: 20px;
        }
        .tabs button {
          padding: 10px 15px;
          margin-right: 5px;
          cursor: pointer;
          background-color: #eee;
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
        .map-section {
          width: 100%;
          max-width: 1200px;
          margin-top: 30px;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
        }
        .back-btn {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default TempleDetail;
