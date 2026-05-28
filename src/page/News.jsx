import React, { useState } from 'react';
import thailandImage from '../components/thailandImage.webp';

// Mock list of beautiful travel blog posts
const BLOG_POSTS = [
  {
    id: 1,
    title: 'Discover the Majestic Beauty of Thailand',
    author: 'Somchai Prasert',
    date: 'May 24, 2026',
    category: 'EXPLORE',
    tagClass: 'explore-badge',
    image: thailandImage,
    isLocalImage: true,
    excerpt: 'Thailand, famously known as the "Land of Smiles", is a tropical paradise waiting to be explored. Discover mountains, ancient ruins, and stunning islands.',
    content: `Thailand, famously known as the "Land of Smiles", is a paradise waiting to be explored. Its diverse offerings include breathtaking natural landscapes, rich cultural heritage, and world-class cuisine.

    From the pristine beaches of Phuket to the vibrant streets of Bangkok, every destination in Thailand tells a unique story. Stroll through the ancient temples of Chiang Mai, savor the bustling street food markets, or escape to the serene beauty of Krabi.

    Plan your adventure now! Experience the legendary Thai hospitality and create memories that will last a lifetime. Whether you seek relaxation, adventure, or cultural immersion, Thailand has it all.`,
    quote: '"Thailand is not just a destination; it’s an experience you’ll never forget."'
  },
  {
    id: 2,
    title: 'The Ultimate Bangkok Street Food Safari',
    author: 'Nisha Rungrueang',
    date: 'May 20, 2026',
    category: 'CUISINE',
    tagClass: 'cuisine-badge',
    gradient: 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
    excerpt: 'Explore Yaowarat Road (Chinatown) and discover legendary noodle stalls, spicy Tom Yum, and sweet Mango Sticky Rice in Bangkok\'s finest street spots.',
    content: `Bangkok is widely considered the street food capital of the world. As the sun sets, streets transform into bustling open-air kitchens filled with the tempting aromas of sizzling woks, fresh herbs, and grilling meats.

    A food safari in Yaowarat Road (Chinatown) is an essential Thai experience. Here you can sample Michelin-recognized Guay Tiew Kua Gai (stir-fried chicken noodles), sizzling seafood dishes, spicy green papaya salads, and finish with decadent Mango Sticky Rice.

    Remember, the best street food is often found where the local crowds gather. Be adventurous and let your taste buds guide you through the culinary wonders of the capital.`,
    quote: '"To eat street food in Bangkok is to taste the real heartbeat of the city."'
  },
  {
    id: 3,
    title: 'Secret Islands of Krabi: Top Unspoiled Escapes',
    author: 'David Hunter',
    date: 'May 15, 2026',
    category: 'ISLANDS',
    tagClass: 'island-badge',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    excerpt: 'Bypass the packed beaches and set sail for Krabi\'s hidden shores, sheer limestone cliffs, dense mangrove sanctuaries, and glowing lagoons.',
    content: `Krabi is home to some of the most striking coastlines in the world. While Railay Beach and Phi Phi are world-renowned, there are countless hidden bays and lesser-known islands that offer quiet, untouched beauty.

    Islands like Koh Hong, with its secret hidden lagoon surrounded by towering limestone cliffs, and Koh Lao Lading, provide quiet spots to snorkel in crystalline waters amongst coral gardens and tropical fish.

    Renting a traditional long-tail boat early in the morning lets you arrive before any crowds. You will find yourself standing on white sand beaches facing a calm turquoise sea, feeling like you are the first to discover the island.`,
    quote: '"In Krabi, every hidden lagoon feels like a private gateway to paradise."'
  }
];

function News() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="blog-section">
      <div className="blog-header">
        <h1>Travel Insights & Stories</h1>
        <p>Stay up to date with the latest travel articles, culinary secrets, and hidden gems from across Thailand.</p>
      </div>

      <div className="blog-grid">
        {BLOG_POSTS.map((post) => {
          const isExpanded = expandedId === post.id;
          return (
            <article key={post.id} className={`blog-card ${isExpanded ? 'blog-expanded' : ''}`}>
              <div 
                className="blog-image-box" 
                style={post.isLocalImage ? { backgroundImage: `url(${post.image})` } : { background: post.gradient }}
              >
                <span className={`blog-category-badge ${post.tagClass}`}>{post.category}</span>
              </div>

              <div className="blog-body">
                <div className="blog-meta">
                  <span>✍️ By {post.author}</span>
                  <span>•</span>
                  <span>📅 {post.date}</span>
                </div>
                
                <h3 className="blog-title">{post.title}</h3>
                
                <p className="blog-excerpt">{post.excerpt}</p>

                {isExpanded && (
                  <div className="blog-full-content">
                    <p className="blog-text-paragraph">{post.content}</p>
                    <blockquote className="blog-quote-block">
                      <p>{post.quote}</p>
                    </blockquote>
                  </div>
                )}

                <button 
                  className="blog-read-btn" 
                  onClick={() => toggleExpand(post.id)}
                >
                  {isExpanded ? 'Read Less ▲' : 'Read Full Article ▼'}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default News;
