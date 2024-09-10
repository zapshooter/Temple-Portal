// src/app/blogs/page.tsx

'use client';

import Head from 'next/head';
import Link from 'next/link';
import blogs from '../data/blogs.json'; // Import your blogs data

const Blogs = () => {
  return (
    <div className="blogs-container">
      <Head>
        <title>Blogs | Your Website Name</title>
        <meta name="description" content="Read our latest blogs and articles." />
      </Head>
      
      <h1 className="blogs-title">Travel Tips</h1>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.slug} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.excerpt}</p>

              {/* Remove the <a> tag; Link handles this internally */}
              <Link href={`/blogs/${blog.slug}`} className="read-more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .blogs-container {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 50px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .blogs-title {
          text-align: center;
          margin-bottom: 20px;
          font-size: 2.5rem;
        }
        .blog-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .blog-card {
          display: flex;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .blog-image {
          width: 200px;
          height: auto;
          object-fit: cover;
        }
        .blog-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .blog-content h2 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }
        .blog-content p {
          margin-bottom: 20px;
          color: #555;
        }
        .read-more {
          color: #0070f3;
          text-decoration: none;
          font-weight: bold;
        }
        .read-more:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Blogs;
