import React from 'react'

const FeaturedNews = ({ featuredNews }) => {
    return (
      <section id="featured-news">
        <h2>Featured News</h2>
        {featuredNews.map((newsItem) => (
          <article key={newsItem.id} className="news-item">
          <div className="news-content">
            <img src={newsItem.image} alt={newsItem.title} className="news-image" />
            <div className="news-summary">
              <h3><a href={newsItem.link}>{newsItem.title}</a></h3>
              <p>{newsItem.summary}</p>
            </div>
          </div>
        </article>
        ))}
      </section>
    );
  };

export default FeaturedNews
