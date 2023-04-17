
import React, { useState, useEffect } from 'react';
import MainCard from 'components/cards/MainCard';
import { getTopNews } from './fetch.js';
import { Typography, List, ListItem, Link, Grid } from '@mui/material';
import './trendingNews.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const TrendingNews = () => {
  const [news, setNews] = useState([]);
  const sampleData = [
    {
      image_url:"https://www.oregonlive.com/resizer/E9mzIBRlsi8KDnTu3eEdAzizrrI=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/OHQFJPFPQJDYTLCSRJTUSGGUOA.jpg",
      title: "Damian Lillard says if Portland Trail Blazers can’t make major move,",
      pubDate: "Apr. 13, 2023, 9:35 a.m"
    },
    {
      image_url:"https://media.licdn.com/dms/image/D4E03AQEJC4qi9I0yHw/profile-displayphoto-shrink_800_800/0/1667364095773?e=2147483647&v=beta&t=wAuAQmkcffSi16OhF6WCcuW4ZT7YbCk1J4jooC1jV0E",
      title: "Damian Lillard says if Portland Trail Blazers can’t make major move,",
      pubDate: "Apr. 13, 2023, 9:35 a.m"
    },
    {
      image_url:"https://i1.rgstatic.net/ii/profile.image/422210188910593-1477674161845_Q512/Sai-Kammal-Shetty.jpg",
      title: "Damian Lillard says if Portland Trail Blazers can’t make major move,",
      pubDate: "Apr. 13, 2023, 9:35 a.m"
    }
  ]
  useEffect(() => {
    const fetchNewsData = async () => {
      const newsData = await getTopNews();
      setNews(newsData);
    //  setNews(sampleData);
    };
 //   setNews(sampleData);
    fetchNewsData();
  }, []);

  return (
    // <MainCard>
      <div>
        <Typography variant="h1"  stgutterBottom>
          Headlines
        </Typography>
        <List>
          {news.map((item) => (
            <ListItem key={item.link} id="ListItem">
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <Card sx={{ minWidth: '1100px' }}>
              <Grid container alignItems="center">
              <Grid item xs={3}>
                    <img
                      src={item.image_url}
                      alt={item.title}
                    />
               </Grid>
               <Grid item xs={9}>
                    <Typography
                      variant="h2"
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
              </Card>
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
   
  );
};

export default TrendingNews;

