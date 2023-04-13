import React, { useState, useEffect } from 'react';
import MainCard from 'components/cards/MainCard';
import { getTopNews } from './fetch.js';
import { Typography, List, ListItem, Link, Grid } from '@mui/material';
import './trendingNews.scss';


const TrendingNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      const newsData = await getTopNews();
      setNews(newsData);
    };
    fetchNewsData();
  }, []);

  return (
    <MainCard>
      <div>
        <Typography variant="h4" gutterBottom>
          Headlines
        </Typography>
        <List>
          {news.map((item) => (
            <ListItem key={item.link}>
              <Link href={item.link}>
                <Grid container alignItems="center">
                  <Grid item>
                    <img
                      src={item.image_url}
                      alt={item.title}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      noWrap
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                    >
                      {item.pubDate}
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    </MainCard>
  );
};

export default TrendingNews;
