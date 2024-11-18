'use client';

const DosAndDontsPage = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>Dos and Donts for Fasts (Vrats)</h1>
        <p>Guidelines for Observing Fasts in Hinduism</p>
      </header>

      {/* Introduction Section */}
      <section className="introduction">
        <h2>Introduction</h2>
        <p>
          Fasting, or *Vrat*, is an integral part of Hindu spirituality and culture. Observed to seek blessings, spiritual growth, and self-discipline, vrats come with specific guidelines to enhance their sanctity and benefits. Here is a concise guide to the Dos and Donts to observe during fasts.
        </p>
      </section>

      {/* Dos Section */}
      <section className="dos">""
        <h2>Dos</h2>
        <ul>
          <li><strong>Purify the Mind and Body:</strong> Begin your fast with a pure heart and clean surroundings, taking a bath before sunrise.</li>
          <li><strong>Pray and Meditate:</strong> Dedicate time to prayers, chanting, and meditation to strengthen your connection with the divine.</li>
          <li><strong>Eat Satvik Food:</strong> If the fast permits food, consume light, easily digestible, and satvik (pure) meals like fruits, nuts, and milk.</li>
          <li><strong>Maintain Positivity:</strong> Focus on positive thoughts, spiritual activities, and helping others during your fast.</li>
          <li><strong>Follow Rituals:</strong> Observe specific rituals associated with the fast, such as lighting lamps, offering flowers, and reading scriptures.</li>
        </ul>
      </section>

      {/* Donts Section */}
      <section className="donts">
        <h2>Donts</h2>
        <ul>
          <li><strong>Avoid Anger and Negativity:</strong> Stay calm and avoid negative emotions like anger, jealousy, or greed during the fast.</li>
          <li><strong>Refrain from Non-Vegetarian Food:</strong> Avoid consuming meat, eggs, or other non-vegetarian items.</li>
          <li><strong>Limit Physical Exertion:</strong> Avoid heavy physical work or excessive exercise that can strain your body during the fast.</li>
          <li><strong>Dont Overeat Post-Fast:</strong> Break your fast gradually with light meals to prevent indigestion or discomfort.</li>
          <li><strong>Avoid Addictions:</strong> Stay away from habits like smoking, alcohol, or unnecessary indulgences that detract from the sanctity of the fast.</li>
        </ul>
      </section>

      {/* Conclusion Section */}
      <section className="conclusion">
        <h2>Conclusion</h2>
        <p>
          Fasting is a sacred practice that connects you to the divine and helps purify the mind and body. By adhering to these Dos and Donts, you can make your fasts more meaningful and spiritually rewarding.
        </p>
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

        ul {
          list-style-type: disc;
          padding-left: 20px;
        }

        ul li {
          margin-bottom: 10px;
          line-height: 1.6;
        }

        .dos, .donts {
          background-color: #f4e1d2;
          padding: 20px;
          border-radius: 8px;
        }

        .conclusion {
          background-color: #f9f3e7;
          padding: 20px;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default DosAndDontsPage;
