'use client';

import Image from "next/image";
import Subscribe from "../components/Subscribe";

const ReligiousTextsPage = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>Religious Texts in Hinduism</h1>
        <p>Discover the foundational scriptures that guide the spiritual and philosophical life of Hindus.</p>
      </header>

      {/* Prominent Texts Section */}
      <section className="texts">
        <h2>Prominent Hindu Texts</h2>

        <div className="text">
          <h3>Rig Veda</h3>
          <p>The oldest of the four Vedas, the Rig Veda is a collection of hymns dedicated to various deities. It is the foundation of Vedic knowledge and Hindu philosophy.</p>
        </div>

        <div className="text">
          <h3>Sama Veda</h3>
          <p>The Sama Veda is primarily a collection of chants and melodies. It holds a special place in Hindu worship, especially for its focus on musical recitation.</p>
        </div>

        <div className="text">
          <h3>Yajur Veda</h3>
          <p>Containing prose mantras and instructions for rituals, the Yajur Veda serves as a guide for conducting various sacrificial rites in Hinduism.</p>
        </div>

        <div className="text">
          <h3>Atharva Veda</h3>
          <p>The Atharva Veda includes hymns, spells, and incantations, reflecting the everyday life and beliefs of ancient Hindus. It is known for its practical and healing-oriented hymns.</p>
        </div>

        <div className="text">
          <h3>Bhagavad Gita</h3>
          <p>A part of the Mahabharata, the Bhagavad Gita is a spiritual dialogue between Lord Krishna and Arjuna. It addresses the concepts of dharma, karma, and the path to liberation.</p>
        </div>

        <div className="text">
          <h3>Ramayana</h3>
          <p>The Ramayana, attributed to the sage Valmiki, tells the story of Lord Rama and his journey to rescue his wife Sita. It symbolizes the triumph of good over evil.</p>
        </div>

        <div className="text">
          <h3>Mahabharata</h3>
          <p>One of the longest epic poems in the world, the Mahabharata recounts the conflict between the Pandavas and the Kauravas, illustrating moral and ethical dilemmas.</p>
        </div>

        <div className="text">
          <h3>Upanishads</h3>
          <p>The Upanishads are philosophical texts that explore the nature of reality, self, and ultimate truth (Brahman). They form the basis of Hindu metaphysical thought.</p>
        </div>

        <div className="text">
          <h3>Puranas</h3>
          <p>The Puranas contain myths, legends, and histories of the Hindu gods and goddesses, including cosmology and moral teachings. They are a rich source of Hindu cultural knowledge.</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="image-grid">
          <Image src="/img/text1.jpg" alt="Kumbh Mela Scene" width={250} height={330}/>
          <Image src="/img/text2.jpg" alt="Holy Dip at Kumbh Mela" width={250} height={330}/>
          <Image src="/img/text3.jpg" alt="Procession of Saints" width={250} height={330}/>
        </div>
      </section>


      <Subscribe />

      {/* Inline CSS Styling */}
      <style jsx>{`
        .container {
          font-family: sans-serif;
          color: #4a2c00;
          padding: 20px;
          background-color: #f9f3e7;
          max-width: 900px;
          margin: auto;
          margin-top: 100px;
        }

        .header {
          text-align: center;
          background-color: #f4e1d2;
          padding: 30px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .header h1 {
          font-size: 2.8rem;
          color: #d2691e;
          margin-bottom: 10px;
        }

        .header p {
          font-size: 1.2rem;
          color: #8b4513;
        }

        .texts h2 {
          font-size: 2rem;
          color: #d2691e;
          margin-bottom: 20px;
          text-align: center;
        }

        .text {
          background-color: #f4e1d2;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 20px;
          text-align: center;
        }

        .text h3 {
          font-size: 1.5rem;
          color: #d2691e;
          margin-bottom: 8px;
        }

        .text p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #4a2c00;
        }

        .gallery {
          text-align: center;
        }

        .gallery .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 10px;
          margin-top: 10px;
        }

        .gallery img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          border: 2px solid #d2691e;
        }
      `}</style>
    </div>
  );
};

export default ReligiousTextsPage;
