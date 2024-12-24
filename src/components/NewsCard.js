import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ news }) => {
  return (
    <Link to={`/article/${news.id}`} state={{ news }} className="news-card-link">
      <div className="news-card">
        <div className="news-card-content">
          <p className="news-meta">
            {news.author} in {news.topic} · {news.date}
          </p>
          <h2>{news.title}</h2>
          <p>{news.description}</p>
          <div className="news-tags">
            <button className="news-tag-button">{news.tag}</button>
            <span>{news.readTime} · {news.selected}</span>
          </div>
        </div>
        <div className="news-card-image">
          <img src={news.image} alt={news.title} />
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
