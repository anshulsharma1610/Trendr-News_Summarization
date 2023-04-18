import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TweetCard from './TweetCard.js';
import { getTweets } from 'services/newsService';



const TwitterFeed = () => {
    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(true);
    const isLoggedIn = useSelector((state) => {
        return state.user.isLoggedIn;
    });
    let userId;
    if (isLoggedIn) {
        userId = useSelector((state) => state.user.user.user._id);
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await getTweets(userId);
            setTweets(response.statuses);
            setLoading(false);
        };
        fetchData();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log('Rendering TwitterFeed'); // Debugging log
    console.log(tweets); // Debugging log

    return (
        <>
            {tweets.map((tweet) => {
                console.log('Rendering TweetCard for:', tweet.userHandle); // Debugging log
                const tweetText = tweet.retweeted_status ? tweet.retweeted_status.text : tweet.text;
                return (
                    <TweetCard
                        key={tweet.id_str}
                        userAvatarUrl={tweet.user.profile_image_url_https}
                        userName={tweet.user.name}
                        userHandle={tweet.user.screen_name}
                        tweetText={tweetText}
                    />
                );
            })}
        </>
    );
};

export default TwitterFeed;
