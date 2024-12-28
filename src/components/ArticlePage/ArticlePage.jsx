import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FaThumbsUp, FaComment, FaBookmark } from 'react-icons/fa'; 
import './ArticlePage.css';

const ArticlePage = () => {
  const { id } = useParams(); 
  const location = useLocation();
  const article = location.state?.news; 

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <p className="article-meta">
        {article.author} in {article.topic} · {article.date}
      </p>
      <img src={article.image} alt={article.title} />
      <p>{article.description}</p>
      <div className="article-content">{article.content}</div>

      <div className="article-actions">
        <button >
          <FaThumbsUp /> 180
        </button>
        <button>
          <FaComment />50 
        </button>
        <button>
          <FaBookmark /> 
        </button>
      </div>
    </div>
  );
};

export default ArticlePage;
