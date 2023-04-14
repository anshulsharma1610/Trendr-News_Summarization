import React from 'react';
import TweetCard from './TweetCard';

const tweets = [
    {
        // userAvatarUrl: 'https://example.com/avatar.png',
        userName: 'John Smith',
        userHandle: 'john_smith',
        tweetText: 'Just had the best sandwich ever! #foodie',
    },
    {
        // userAvatarUrl: 'https://example.com/avatar2.png',
        userName: 'Jane Doe',
        userHandle: 'jane_doe',
        tweetText: 'I can\'t believe it\'s already April! Time flies... ',
    },
];

const TwitterFeed = () => (
    <>
        {tweets.map((tweet) => (
            <TweetCard
                key={tweet.userHandle + tweet.tweetText}
                userAvatarUrl={tweet.userAvatarUrl}
                userName={tweet.userName}
                userHandle={tweet.userHandle}
                tweetText={tweet.tweetText}
            />
        ))}
    </>
);

export default TwitterFeed;
