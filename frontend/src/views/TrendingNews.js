import React, { useState, useEffect } from 'react';
import MainCard from 'components/cards/MainCard';
import { getTopNews } from './fetch.js'; // import the getTopNews function from fetch.js

const TrendingNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      const newsData = await getTopNews(); // call getTopNews to fetch the news data
      setNews(newsData);
    };
    fetchNewsData();
  }, []);

  return (
    <MainCard>
      <h1>Headlines</h1>
      <ul>
        {news.map((item) => (
          <div >
          <li key={item.link}>
            <a href={item.link}>
              <h2>{item.title}</h2>
            </a>
            <img src={item.image_url} alt={item.title} />
            <h2>{item.pubDate}</h2>
          </li>
          </div>
        ))}
      </ul>
    </MainCard>
  );
};

export default TrendingNews;
