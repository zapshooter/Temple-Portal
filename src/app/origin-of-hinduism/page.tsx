'use client';

import React, { useState } from 'react';

const OriginOfHinduismPage = () => {
  const [activeTab, setActiveTab] = useState('about');

  // Tab Content
  const tabContent = {
    about: (
      <div>
        <h2>About Hinduism</h2>
        <p>Hinduism is the world's oldest known religion, with a history of more than 4,000 years. It is a way of life rather than a single doctrine, encompassing a vast array of practices, beliefs, and philosophies.</p>
        <p>The term "Hindu" itself is derived from the River Sindhu (Indus), and was used by foreigners to describe the people of the Indian subcontinent. Hinduism is a polytheistic religion, although its underlying philosophy acknowledges a single supreme reality known as Brahman.</p>
      </div>
    ),
    history: (
      <div>
        <h2>History of Hinduism</h2>
        <p>The history of Hinduism spans several millennia. The roots of Hinduism date back to the Indus Valley Civilization (circa 1500 BCE). The Vedic period, which followed, laid the foundation for much of what we now consider classical Hinduism, with the compilation of the Vedas, the oldest religious texts in existence.</p>
        <p>Over time, Hinduism evolved through different periods, including the Upanishadic era, the classical age, and the medieval period, each contributing to its rich philosophical and spiritual heritage. Hinduism has absorbed and assimilated countless influences, making it one of the most diverse religions in the world.</p>
      </div>
    ),
    beliefs: (
      <div>
        <h2>Beliefs in Hinduism</h2>
        <p>Hinduism encompasses a wide array of beliefs, but several core concepts are central to its philosophy:</p>
        <ul>
          <li><strong>Dharma</strong>: The principle of cosmic order and duty, which governs an individual's behavior.</li>
          <li><strong>Karma</strong>: The law of cause and effect, where every action has consequences in this life or the next.</li>
          <li><strong>Moksha</strong>: The ultimate goal of liberation from the cycle of rebirth and attaining union with Brahman.</li>
          <li><strong>Samsara</strong>: The cycle of death and rebirth that every soul goes through until achieving Moksha.</li>
        </ul>
      </div>
    ),
    festivals: (
      <div>
        <h2>Festivals of Hinduism</h2>
        <p>Hinduism is known for its colorful and diverse festivals, many of which are celebrated with great fervor across India and the world:</p>
        <ul>
          <li><strong>Diwali</strong>: The festival of lights, celebrating the return of Lord Rama to Ayodhya after defeating Ravana.</li>
          <li><strong>Holi</strong>: The festival of colors, celebrating the arrival of spring and the victory of good over evil.</li>
          <li><strong>Navaratri</strong>: A nine-night festival dedicated to the worship of the Goddess Durga.</li>
          <li><strong>Raksha Bandhan</strong>: A festival celebrating the bond between brothers and sisters.</li>
        </ul>
      </div>
    ),
    scriptures: (
      <div>
        <h2>Key Scriptures in Hinduism</h2>
        <p>Hinduism has a rich and diverse body of scriptures, with the Vedas being the oldest and most revered:</p>
        <ul>
          <li><strong>Vedas</strong>: The four Vedas (Rig, Sama, Yajur, Atharva) are considered the oldest sacred texts, consisting of hymns, prayers, and rituals.</li>
          <li><strong>Upanishads</strong>: Philosophical texts that explore the nature of reality, the self, and the ultimate truth.</li>
          <li><strong>Bhagavad Gita</strong>: A key philosophical text that is part of the Mahabharata, where Lord Krishna imparts spiritual wisdom to Arjuna.</li>
          <li><strong>Ramayana</strong>: The epic story of Lord Rama and his quest to rescue Sita, symbolizing dharma, duty, and righteousness.</li>
        </ul>
      </div>
    ),
    culturalImpact: (
      <div>
        <h2>Cultural Impact of Hinduism</h2>
        <p>Hinduism has had a profound influence on Indian art, literature, architecture, and philosophy. The religion has inspired some of the world’s greatest monuments, such as the temples of Khajuraho, the Brihadeeswarar Temple, and the sculptures of Ellora and Ajanta caves.</p>
        <p>Hindu philosophy, with its concepts of yoga and meditation, has also gained global recognition, shaping modern spiritual practices and self-help movements across the world.</p>
      </div>
    )
  };

  return (
    <div className="container">
      {/* Main Image and Overview Section */}
      <h1 className="heading">Origin Of Hinduism</h1>

      <div className="main-section">
        <div className="image-container">
          <img src="/img/kedarnath.jpg" alt="Hinduism" />
        </div>
        <div className="overview">
          <h1>Origin of Hinduism</h1>
          <p>Hinduism is one of the world's most ancient religions, with roots going back over 4,000 years.</p>
          <div className="overview-details">
            <ul>
              <li><strong>Belief System:</strong> Polytheistic</li>
              <li><strong>Founded:</strong> Circa 1500 BC</li>
              <li><strong>Main Scriptures:</strong> Vedas, Upanishads, Bhagavad Gita</li>
              <li><strong>Holy Sites:</strong> Varanasi, Haridwar, Ayodhya, etc.</li>
              <li><strong>Famous Festivals:</strong> Diwali, Holi, Navaratri</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="tabs">
        <button className={`tab ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>About Hinduism</button>
        <button className={`tab ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>History</button>
        <button className={`tab ${activeTab === 'beliefs' ? 'active' : ''}`} onClick={() => setActiveTab('beliefs')}>Beliefs</button>
        <button className={`tab ${activeTab === 'festivals' ? 'active' : ''}`} onClick={() => setActiveTab('festivals')}>Festivals</button>
        <button className={`tab ${activeTab === 'scriptures' ? 'active' : ''}`} onClick={() => setActiveTab('scriptures')}>Scriptures</button>
        <button className={`tab ${activeTab === 'culturalImpact' ? 'active' : ''}`} onClick={() => setActiveTab('culturalImpact')}>Cultural Impact</button>
      </div>

      {/* Content Section */}
      <div className="content-section">
        {tabContent[activeTab]}
      </div>

      <style jsx>{`
        .container {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 50px auto;
        }

        .heading{
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.5rem;
        }
        .main-section {
          display: flex;
          gap: 20px;
        }
        .image-container img {
          width: 400px;
          height: auto;
          border-radius: 10px;
        }
        .overview {
          flex: 1;
        }
        .overview-details ul {
          list-style: none;
          padding: 0;
        }
        .overview-details ul li {
          margin-bottom: 10px;
        }
        .tabs {
          display: flex;
          margin: 20px 0;
          border-bottom: 2px solid #ccc;
        }
        .tab {
          padding: 10px 20px;
          cursor: pointer;
          border-bottom: 2px solid transparent;
        }
        .tab.active {
          border-bottom: 2px solid #f39c12;
        }
        .content-section {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default OriginOfHinduismPage;
