import React, { useState, useEffect } from 'react';
import MainCard from 'components/cards/MainCard';
import { getTopNews } from './fetch.js';
import { Typography, List, ListItem, Link, Grid, Box, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import 'assets/scss/trendingNews.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';

const useStyles = styled((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

const TrendingNews = () => {
  const theme = useTheme();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      const newsData = await getTopNews();
      setNews(newsData);
    };
    fetchNewsData();
  }, []);

  return (
    <>
      <Typography variant="h2">
        Trending Headlines
      </Typography>

      <List className={theme.root}>
        {news.map((item, index) => (
          <MainCard sx={{ mt: 2 }} key={index}>
            <ListItem sx={{ m: -2 }} key={index} id="ListItem" className={theme.listItem}>
              <Link href={item.link} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                <ListItemAvatar>
                  <Avatar
                    className={theme.avatar}
                    variant="square"
                    sx={{ height: 140, width: 160, backgroundColor: 'transparent', borderRadius: 2 }}
                    src={item.image_url}
                    alt={item.title}
                  />
                </ListItemAvatar>
                <ListItemText
                  sx={{ ml: 2 }}
                  primary={
                    <Typography variant="h3" color="textSecondary">
                      {item.title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="caption" color="textSecondary">
                      {item.pubDate}
                    </Typography>
                  }
                />
              </Link>
            </ListItem>
          </MainCard>
        ))}
        {news.length === 0 && (
          <Typography variant="h4">No News Found!</Typography>
        )}
      </List>
    </>
  );
};

export default TrendingNews;
