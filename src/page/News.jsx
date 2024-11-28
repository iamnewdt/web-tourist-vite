import React from 'react';
import thailandImage from '../components/thailandImage.webp';

function News() {
  return (
    <div className="news-container">
      <h1 className="news-title">Discover the Beauty of Thailand</h1>
      <img
        src={thailandImage}
        alt="Beautiful landscape of Thailand"
        className="news-image"
      />
      <p className="news-text">
        Thailand, famously known as the <strong>"Land of Smiles"</strong>, is a
        paradise waiting to be explored. Its diverse offerings include{" "}
        <span className="highlight">breathtaking natural landscapes</span>,{" "}
        <span className="highlight">rich cultural heritage</span>, and{" "}
        <span className="highlight">world-class cuisine</span>.
      </p>
      <p className="news-text">
        From the <strong>pristine beaches of Phuket</strong> to the{" "}
        <strong>vibrant streets of Bangkok</strong>, every destination in
        Thailand tells a unique story. Stroll through the ancient temples of
        Chiang Mai, savor the bustling street food markets, or escape to the
        serene beauty of Krabi.
      </p>
      <p className="news-text call-to-action">
        <strong>Plan your adventure now!</strong> Experience the legendary
        Thai hospitality and create memories that will last a lifetime. Whether
        you seek <em>relaxation, adventure, or cultural immersion</em>, Thailand
        has it all.
      </p>
      <blockquote className="quote">
        <p>
          "Thailand is not just a destination; it’s an experience you’ll never
          forget."
        </p>
      </blockquote>
    </div>
  );
}

export default News;
