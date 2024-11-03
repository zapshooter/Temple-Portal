'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const OriginOfHinduismPage = () => {
  type TabName = 'about' | 'history' | 'beliefs' | 'festivals' | 'scriptures' | 'culturalImpact';

  const [activeTab, setActiveTab] = useState<TabName>('about');

  const tabContent: Record<TabName, JSX.Element> = {
    about: (
      <div>
        <h2>About Hinduism</h2>
        <p>Hinduism is the world's oldest known religion, with a history of more than 4,000 years, and is considered one of the most complex and diverse religious traditions.</p>
        <p>The origins of Hinduism are deeply rooted in the ancient Indus Valley civilization, which flourished around 2500 BCE in what is now Pakistan and northwest India. The spiritual practices, rituals, and beliefs of early Hindus evolved over millennia, absorbing influences from various cultures and civilizations.</p>
        <p>Hinduism is not just a religion but a way of life, encompassing various philosophies, rituals, and customs. It is characterized by a belief in a supreme reality, Brahman, from which all existence arises, and acknowledges a multitude of deities representing different aspects of the divine.</p>
      </div>
    ),
    history: (
      <div>
        <h2>History of Hinduism</h2>
        <p>The history of Hinduism spans several millennia, with its origins traced back to the ancient Indus Valley civilization (circa 2500–1500 BCE). As the Aryans migrated into the Indian subcontinent, they brought with them the Vedas, a collection of hymns and religious texts that form the foundation of Hindu philosophy and rituals.</p>
        <p>Over time, various sects and philosophies emerged, including Vedanta, Yoga, and Samkhya, contributing to the rich tapestry of Hindu thought. Major texts like the Mahabharata and the Ramayana, composed between 400 BCE and 400 CE, also played a significant role in shaping Hindu beliefs and practices.</p>
      </div>
    ),
    beliefs: (
      <div>
        <h2>Beliefs in Hinduism</h2>
        <p>Hinduism encompasses a wide array of beliefs, each contributing to its diversity. Here are some core concepts:</p>
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
        <ul>
          <li><strong>Vedas</strong>: The four Vedas (Rig, Sama, Yajur, Atharva) are considered the oldest sacred texts.</li>
          <li><strong>Upanishads</strong>: Philosophical texts that explore the nature of reality, the self, and the ultimate truth.</li>
          <li><strong>Bhagavad Gita</strong>: A key philosophical text that is part of the Mahabharata.</li>
          <li><strong>Ramayana</strong>: The epic story of Lord Rama symbolizing dharma and righteousness.</li>
        </ul>
      </div>
    ),
    culturalImpact: (
      <div>
        <h2>Cultural Impact of Hinduism</h2>
        <p>Hinduism has had a profound influence on Indian art, literature, architecture, and philosophy, shaping the cultural landscape of India and beyond. Its concepts and rituals have been integrated into various aspects of life, from classical dance and music to festivals and culinary traditions.</p>
        <p>The impact of Hindu philosophy can be seen in various movements around the world, promoting values of non-violence, tolerance, and respect for all living beings.</p>
      </div>
    )
  };

  return (
    <div className="container">
      <h1 className="heading">Origin Of Hinduism</h1>

      <div className="main-section">
        <div className="image-container">
          <Image src="/img/kedarnath.jpg" alt="Hinduism" width={250} height={330} />
        </div>
        <div className="overview">
          <h1>Origin of Hinduism</h1>
          <p>Hinduism is one of the world's most ancient religions, with roots extending back to the Indus Valley civilization. Its practices and beliefs have evolved over thousands of years, influenced by various cultural and historical contexts.</p>
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

      <div className="tabs">
        <button className={`tab ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>About Hinduism</button>
        <button className={`tab ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>History</button>
        <button className={`tab ${activeTab === 'beliefs' ? 'active' : ''}`} onClick={() => setActiveTab('beliefs')}>Beliefs</button>
        <button className={`tab ${activeTab === 'festivals' ? 'active' : ''}`} onClick={() => setActiveTab('festivals')}>Festivals</button>
        <button className={`tab ${activeTab === 'scriptures' ? 'active' : ''}`} onClick={() => setActiveTab('scriptures')}>Scriptures</button>
        <button className={`tab ${activeTab === 'culturalImpact' ? 'active' : ''}`} onClick={() => setActiveTab('culturalImpact')}>Cultural Impact</button>
      </div>

      <div className="content-section">
        {tabContent[activeTab]}
      </div>

      <style jsx>{`
        .container {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 50px auto;
        }

        .heading {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.5rem;
        }

        .main-section {
          display: flex;
          gap: 20px;
          align-items: start;
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
          margin: 0;
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
          transition: all 0.3s;
        }

        .tab.active {
          border-bottom: 2px solid #f39c12;
        }

        .content-section {
          margin-top: 20px;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        h2 {
          margin-top: 0;
          color: #f39c12;
        }

        ul {
          padding-left: 20px;
          list-style-type: disc;
        }

        ul li {
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
};

export default OriginOfHinduismPage;
