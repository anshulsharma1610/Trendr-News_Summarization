import React, { useState, useEffect } from 'react';
import MainCard from 'components/cards/MainCard';
// import { getNews } from '../../../backend/api/controllers/fetchNews-controller.js';


const TrendingNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      const newsData = await getNews(); // call getNews to fetch the news data
      setNews(newsData);
    };

    fetchNewsData();
  }, []);

  return (
    <MainCard>
      <h1>Headlines</h1>
      {/* display the news data here */}
    </MainCard>
  );
};

export default TrendingNews;

