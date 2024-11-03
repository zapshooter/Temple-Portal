'use client';

const KumbhMelaPage = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>Kumbh Mela</h1>
        <p>A Sacred Gathering of Faith, Unity, and Spiritual Awakening</p>
      </header>

      {/* Introduction Section */}
      <section className="introduction">
        <h2>Introduction</h2>
        <p>
          Kumbh Mela is one of the largest spiritual gatherings in the world, drawing millions of pilgrims, saints, and travelers from all around the globe. Celebrated at the banks of sacred rivers, this grand festival is held at four different locations in India: Prayagraj, Haridwar, Ujjain, and Nashik.
        </p>
      </section>

      {/* Importance Section */}
      <section className="importance">
        <h2>Significance of Kumbh Mela</h2>
        <p>
          The Kumbh Mela holds immense religious significance for Hindus. It is believed that participating in the rituals and taking a holy dip in the river cleanses the soul of sins, leading to liberation (Moksha). The festival symbolizes faith, spirituality, and the unity of humankind.
        </p>
      </section>

      {/* Historical Background */}
      <section className="history">
        <h2>Historical Background</h2>
        <p>
          The origins of Kumbh Mela are rooted in Hindu mythology. It is believed that during the churning of the ocean (Samudra Manthan), drops of the nectar of immortality fell at the four locations where Kumbh Mela is held, making these places sacred.
        </p>
      </section>

      {/* Key Rituals */}
      <section className="rituals">
        <h2>Key Rituals</h2>
        <ul>
          <li><strong>Shahi Snan (Royal Bath):</strong> The most important ritual where saints and pilgrims take a holy dip in the river.</li>
          <li><strong>Kalpavas:</strong> Devotees live on the riverbank for the duration of the Kumbh Mela, practicing austerities.</li>
          <li><strong>Processions of Akharas:</strong> Grand processions led by saints and sadhus from different spiritual orders.</li>
        </ul>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="image-grid">
          <img src="/img/kumbh1.jpg" alt="Kumbh Mela Scene" />
          <img src="/img/kumbh2.jpg" alt="Holy Dip at Kumbh Mela" />
          <img src="/img/kumbh3.jpg" alt="Procession of Saints" />
        </div>
      </section>

      {/* Inline CSS Styling */}
      <style jsx>{`
        .container {
          font-family: 'Georgia', serif;
          color: #4a2c00;
          padding: 20px;
          background-color: #f9f3e7;
          max-width: 1000px;
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
          font-size: 3rem;
          color: #d2691e;
          margin-bottom: 10px;
        }

        .header p {
          font-size: 1.2rem;
          color: #8b4513;
        }

        section {
          margin-bottom: 30px;
        }

        h2 {
          font-size: 2rem;
          color: #d2691e;
          margin-bottom: 10px;
          border-bottom: 2px solid #d2691e;
          display: inline-block;
        }

        p {
          line-height: 1.6;
          font-size: 1.1rem;
          color: #4a2c00;
        }

        .importance, .history, .rituals {
          background-color: #f4e1d2;
          padding: 20px;
          border-radius: 8px;
        }

        .rituals ul {
          list-style-type: disc;
          padding-left: 20px;
        }

        .rituals li {
          margin-bottom: 10px;
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

export default KumbhMelaPage;
