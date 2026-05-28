import React, { useState } from 'react';

// Mock data for beautiful destinations in Thailand
const DESTINATIONS = [
  {
    id: 1,
    title: 'Bangkok (กรุงเทพฯ)',
    description: 'The vibrant capital known for its ornate shrines, animated street life, majestic Grand Palace, and world-class street food.',
    category: ['all', 'food', 'temples'],
    rating: '4.9',
    tags: ['Capital', 'Culture', 'Shopping'],
    gradient: 'linear-gradient(135deg, #FF9933 0%, #FF5500 100%)',
    highlight: 'Must visit: Wat Arun, Wat Phra Kaew, and Chatuchak Market.'
  },
  {
    id: 2,
    title: 'Chiang Mai (เชียงใหม่)',
    description: 'A mountainous city in northern Thailand, rich with history, hundreds of elaborate Buddhist temples, and cool mountain breezes.',
    category: ['all', 'mountains', 'temples'],
    rating: '4.8',
    tags: ['Nature', 'Heritage', 'Cafes'],
    gradient: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
    highlight: 'Must visit: Doi Suthep, Night Bazaar, and elephant sanctuaries.'
  },
  {
    id: 3,
    title: 'Phuket (ภูเก็ต)',
    description: 'Thailand\'s largest rainforested island in the Andaman Sea, featuring pristine beaches, emerald waters, and vibrant nightlife.',
    category: ['all', 'beaches'],
    rating: '4.9',
    tags: ['Island', 'Luxury', 'Adventure'],
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    highlight: 'Must visit: Patong Beach, Phi Phi Islands, and Old Phuket Town.'
  },
  {
    id: 4,
    title: 'Krabi (กระบี่)',
    description: 'Famous for its craggy, sheer limestone cliffs, dense mangrove forests, and over a hundred gorgeous offshore islands.',
    category: ['all', 'beaches', 'mountains'],
    rating: '4.9',
    tags: ['Rock Climbing', 'Quiet', 'Lagoon'],
    gradient: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
    highlight: 'Must visit: Railay Beach, Tiger Cave Temple, and Hong Islands.'
  },
  {
    id: 5,
    title: 'Pai (ปาย)',
    description: 'A relaxed valley town in Mae Hong Son province near the Myanmar border, famous for its natural hot springs, gorges, and peaceful vibe.',
    category: ['all', 'mountains'],
    rating: '4.7',
    tags: ['Backpacker', 'Serene', 'Hotsprings'],
    gradient: 'linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)',
    highlight: 'Must visit: Pai Canyon, Bamboo Bridge, and Yun Lai Viewpoint.'
  },
  {
    id: 6,
    title: 'Ayutthaya (อยุธยา)',
    description: 'The ancient historic capital of Siam, featuring archaeological ruins of majestic temples, towering stupas, and Buddha statues.',
    category: ['all', 'temples'],
    rating: '4.8',
    tags: ['History', 'UNESCO', 'Day Trip'],
    gradient: 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
    highlight: 'Must visit: Wat Mahathat, Wat Chaiwatthanaram, and Ayutthaya Historical Park.'
  }
];

// Mock data for key festivals
const FESTIVALS = [
  {
    name: 'Songkran (สงกรานต์)',
    date: 'April 13–15',
    desc: 'The traditional Thai New Year marked by country-wide water fights, cleansing rituals, and visiting temples to pay respect to elders.',
    icon: '💦'
  },
  {
    name: 'Loy Krathong (ลอยกระทง)',
    date: 'November (Full Moon)',
    desc: 'People release decorated floating baskets (Krathongs) onto waterways to pay respect to the water spirits and let go of negative energy.',
    icon: '🕯️'
  },
  {
    name: 'Yi Peng (ยี่เป็ง)',
    date: 'November (Full Moon)',
    desc: 'Northern Thailand lantern festival where thousands of illuminated sky lanterns (Khom Loi) are released into the night sky, creating a sea of lights.',
    icon: '🏮'
  }
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFestival, setSelectedFestival] = useState(null);

  // Filter logic
  const filteredDestinations = DESTINATIONS.filter((dest) => {
    const matchesCategory = dest.category.includes(selectedCategory);
    const matchesSearch = dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home-container">
      {/* Hero Welcome Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h2>Embark on an Unforgettable Journey</h2>
          <p>Discover pristine beaches, sacred temples, flavorful cuisine, and legendary hospitality.</p>
          <div className="hero-search">
            <input
              type="text"
              placeholder="Search destinations, tags, activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-btn" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>
        </div>
      </section>

      {/* Guide & Interactive Categories */}
      <section className="guide-section">
        <div className="section-header">
          <h3>Explore by Interest</h3>
          <p>Find the perfect Thai getaway matched to your favorite activities</p>
        </div>

        <div className="category-tabs">
          <button 
            className={`tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            🗺️ All Regions
          </button>
          <button 
            className={`tab-btn ${selectedCategory === 'beaches' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('beaches')}
          >
            🏝️ Beaches & Islands
          </button>
          <button 
            className={`tab-btn ${selectedCategory === 'temples' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('temples')}
          >
            🛕 Temples & Heritage
          </button>
          <button 
            className={`tab-btn ${selectedCategory === 'mountains' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('mountains')}
          >
            ⛰️ Mountains & Nature
          </button>
          <button 
            className={`tab-btn ${selectedCategory === 'food' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('food')}
          >
            🍲 Food & Markets
          </button>
        </div>

        {/* Destination Grid */}
        <div className="destinations-grid">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((dest) => (
              <div key={dest.id} className="destination-card">
                <div className="card-image-box" style={{ background: dest.gradient }}>
                  <div className="card-rating">⭐ {dest.rating}</div>
                  <div className="card-title-overlay">
                    <h4>{dest.title}</h4>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-desc">{dest.description}</p>
                  <div className="card-highlight">
                    <strong>Tip:</strong> {dest.highlight}
                  </div>
                  <div className="card-tags">
                    {dest.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>😢 No matching destinations found. Try another search query!</p>
            </div>
          )}
        </div>
      </section>

      {/* Dynamic Festival Alerts */}
      <section className="festivals-section">
        <div className="section-header">
          <h3>Thai Cultural Festivals</h3>
          <p>Plan your trip around these spectacular national events</p>
        </div>

        <div className="festivals-grid">
          {FESTIVALS.map((fest, idx) => (
            <div 
              key={idx} 
              className={`festival-card ${selectedFestival === idx ? 'expanded' : ''}`}
              onClick={() => setSelectedFestival(selectedFestival === idx ? null : idx)}
            >
              <div className="fest-header">
                <span className="fest-icon">{fest.icon}</span>
                <div className="fest-meta">
                  <h4>{fest.name}</h4>
                  <span className="fest-date">📅 {fest.date}</span>
                </div>
                <span className="expand-indicator">{selectedFestival === idx ? '▲' : '▼'}</span>
              </div>
              <div className="fest-details">
                <p>{fest.desc}</p>
                <div className="fest-badge">Highly Recommended</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Information Banner */}
      <section className="info-banner">
        <h3>💡 Travel Notice</h3>
        <p>Thailand has officially launched friendly tourist entry schemes. Ensure you check visa-free policies and have valid travel insurance before departure. Sawasdee! 🙏</p>
      </section>
    </div>
  );
}

export default Home;