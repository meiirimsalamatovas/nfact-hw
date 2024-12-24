import React from 'react';
import NewsCard from './NewsCard';
import './NewsList.css';


const newsData = [

    {
      id: 1,
      title: '7 Practical CSS Tips',
      author: 'Author’s name',
      topic: 'Web Development',
      date: '7 July',
      description: 'You can not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.',
      image: '/image/firstNews.png', 
      tag: 'JavaScript',
      readTime: '12 min read',
      selected: 'Selected for you',
      content: 'How long are you awake in the morning before you go online? Perhaps it’s while you’re still lying in bed, using a news feed or social media as the needed stimulant to push you out from under the covers. Or maybe you wait to open your device until after a warm shower and cup of coffee. If you use sleep tracking apps, you might say you never signed off in the first place. And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with family, or complete entire years of work and/or school remotely. If this sounds familiar, then you live in a part of the world where an internet connection now counts as an essential utility — one that’s as easy to take for granted as the natural gas heating your shower water or the electricity powering your coffee maker. But if you think we’re hyperconnected today, just wait. Globally, just over 55% of today’s households have an internet connection. This gap between the internet haves and have-nots is referred to as the digital divide, and access is skewed toward richer nations. The gap is projected to close in the next decade as billions of homes connect to the internet for the first time and by 2030 it’s estimated that the technology industry could account for 20% of the global electricity demand. This presents a troublesome dichotomy. On one hand, it supports livelihoods, educations, and bolsters the global economy; on the other hand, the increased usage of the apps, websites, and services that we build will place an even greater strain on our already-overloaded power grids.',
    },
    {
      
      id: 2,
      title: '7 Practical CSS Tips',
      author: 'Author’s name',
      topic: 'Web Development',
      date: '7 July',
      description: 'Recently, I’ve been automating tasks more than often due to my lack of time...',
      image: '/image/secondNews.png',
      tag: 'JavaScript',
      readTime: '12 min read',
      selected: 'Selected for you',
      content: 'Full content of the article goes here...',
    },

  
  {
    id: 3,
    title: '7 Practical CSS Tips',
    author: 'Author’s name',
    topic: 'Topics Name',
    date: '7 July',
    description: 'Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...',
    image: '/image/thirdNews.png',
    tag: 'JavaScript',
    readTime: '12 min read',
    selected: 'Selected for you',
    content: 'Full content'
  },
];

const NewsList = () => {
  return (
    <div className="news-list">
      {newsData.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};

export default NewsList;
