import React, { useEffect, useState } from 'react';
import NewsCard from '../NewsCard/NewsCard.js';
import { fetchNews } from '../../../services/newsService';
import { Box, CircularProgress } from '@mui/material';
import '../../../assets/scss/NewsFeed.scss'
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
        <Box className="news-feed">
            {articles.map((article) => (
                <NewsCard key={article._id} article={article} />
            ))}
        </Box>
    );
};

export default NewsFeed;
