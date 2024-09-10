// pages/blogs/[slug].js

'use client';
import { useRouter } from 'next/router';
import Image from 'next/image';
import blogs from '../../data/blogs.json';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the blog post based on the slug
  const blog = blogs.find((blog) => blog.slug === slug);

  // If the blog is not found, show a loading state
  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-post-container">
      <h1 className="blog-title">{blog.title}</h1>
      <Image src={blog.image} alt={blog.title} width={1200} height={600} className="blog-main-image" />

      <div className="blog-content">
        <p className="blog-introduction">{blog.introduction}</p>

        {/* Blog Body Content */}
        {blog.content.map((section, index) => (
          <div key={index} className="blog-section">
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
            {section.image && <Image src={section.image} alt={section.heading} width={800} height={400} />}
          </div>
        ))}

        <div className="blog-footer">
          <p>Author: {blog.author}</p>
          <p>Published on: {blog.date}</p>
        </div>
      </div>

      <style jsx>{`
        .blog-post-container {
          max-width: 800px;
          margin: auto;
          padding: 20px;
        }
        .blog-title {
          text-align: center;
          margin: 20px 0;
          color: #0070f3;
        }
        .blog-main-image {
          border-radius: 8px;
          margin-bottom: 20px;
        }
        .blog-content {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #333;
        }
        .blog-introduction {
          margin-bottom: 20px;
          font-style: italic;
          color: #555;
        }
        .blog-section {
          margin-bottom: 30px;
        }
        .blog-section h2 {
          color: #0070f3;
          margin-bottom: 10px;
        }
        .blog-footer {
          margin-top: 40px;
          padding-top: 10px;
          border-top: 1px solid #ddd;
          text-align: center;
          color: #777;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
