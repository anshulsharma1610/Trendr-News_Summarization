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
import SubCard from 'views/NewsFeed/NewsFeed/SubscriptionCard.js';

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
    const isSubbed = useSelector((state) => state.isUserSubbed.isUserSubbed);
    const fetchData = async () => {
        try {
            setLoading(true);
            // Fetch user details and all preferences in parallel
            const [userDetailsResponse, allPreferencesResponse] = await Promise.all([
                userService.getUserDetail(userId),
                userService.getAllPrefernce(),
            ]);

            const preferenceIds = userDetailsResponse.data.preferences;
            const allPreferences = allPreferencesResponse.data;
            let newsResponse;

            if (preferenceIds.length > 0) {
                // Fetch news based on preferences if preferences are not empty
                const selectedPreferenceNames = preferenceIds
                    .map(id => allPreferences.find(pref => pref._id === id)?.prefernceName)
                    .filter(Boolean);
                newsResponse = await fetchNewsbyPreference(selectedPreferenceNames, userId);
            } else {
                // Fetch general news if preferences are empty
                newsResponse = isSubbed ? await fetchNews() : await fetchNewsbyPreference([], userId);
            }

            setArticles(newsResponse);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
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
            <SubCard />
        </Box>
    );
};

export default NewsFeed;