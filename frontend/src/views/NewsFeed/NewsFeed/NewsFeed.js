import React, { useEffect, useState } from 'react';
import NewsCard from '../NewsCard/NewsCard.js';
import { fetchNews } from '../../../services/newsService';
import { Box, CircularProgress } from '@mui/material';
import '../../../assets/scss/NewsFeed.scss';
import '../../../assets/scss/NewsCardStyles.scss';
import TwitterFeed from 'views/Twitter/TwitterFeed.js';
import MainCard from 'components/cards/MainCard.js';
const NewsFeed = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchNews();
            setArticles(response);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box className="news-feed" display="flex" height="100%">
            <Box className="news-feed__articles" style={{ flex: 6, flexDirection: 'row' }}>
                {articles.map((article) => (
                    <NewsCard key={article._id} article={article} />
                ))}
            </Box>

            <Box className="news-feed__twitter" style={{ flex: 4, flexDirection: 'row' }}>
                <TwitterFeed />
            </Box>
        </Box>
    );
};

export default NewsFeed;