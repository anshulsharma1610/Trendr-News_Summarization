import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsCard from '../NewsCard/NewsCard.js';
import { fetchNewsbyPreference, fetchNews } from '../../../services/newsService';
import userService from 'services/userService'
import { Box, CircularProgress } from '@mui/material';
import '../../../assets/scss/NewsFeed.scss';
import '../../../assets/scss/NewsCardStyles.scss';
import TwitterFeed from 'views/Twitter/TwitterFeed.js';
import MainCard from 'components/cards/MainCard.js';
const NewsFeed = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const isLoggedIn = useSelector((state) => {
        return state.user.isLoggedIn;
    });
    let userId
    if (isLoggedIn) {
        userId = useSelector((state) => state.user.user.user._id);
    }
    useEffect(() => {
        const fetchData = async () => {
            let userdetails = await userService.getUserDetail(userId);
            let preferenceIds = userdetails.data.preferences
            //console.log(userdetails)
            let response;
            if (preferenceIds.length > 0) {
                // Fetch news based on preferences if preferences are not empty
                let allPreferences = await userService.getAllPrefernce();
                const selectedPreferenceNames = preferenceIds.map(id => {
                    // Find the preference object that matches the current ID
                    const preference = allPreferences.data.find(pref => pref._id === id);
                    // Return the preference name if the preference object was found, otherwise return undefined
                    return preference ? preference.prefernceName : undefined;
                }).filter(Boolean);
                response = await fetchNewsbyPreference(selectedPreferenceNames);
            } else {
                // Fetch general news if preferences are empty
                response = await fetchNews();
            }
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
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <h2>Your Personalized Feed</h2>
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
        </Box>
    );
};

export default NewsFeed;