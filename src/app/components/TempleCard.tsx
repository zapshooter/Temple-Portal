'use client';

import Link from 'next/link';
import Image from 'next/image'; // Optional for optimized images

type TempleCardProps = {
  id: string;
  name: string;
  location: string;
  image: string;
  index: number;
};

const TempleCard: React.FC<TempleCardProps> = ({ id, name, location, image, index }) => {
  return (
    <Link href={`/temples/${id}`} legacyBehavior>
      <div className="temple-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
        <div className="image-container">
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </div>
        <h3>{name}</h3>
        <p>{location}</p>
        <style jsx>{`
          .temple-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            transition: box-shadow 0.3s ease, transform 0.3s ease;
            padding: 10px;
            height: 350px;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s forwards;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .temple-card:hover {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            transform: scale(1.05);
          }

          .image-container {
            position: relative;
            width: 100%;
            height: 200px; /* Fixed height for uniformity */
            overflow: hidden;
            border-radius: 8px 8px 0 0; /* Optional: round the top edges */
          }

          .temple-card h3 {
            margin: 10px;
            font-size: 18px;
          }

          .temple-card p {
            margin: 10px;
            color: #555;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </Link>
  );
};

export default TempleCard;
