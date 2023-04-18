import React from 'react';
import MainCard from 'components/cards/MainCard';
import Avatar from 'components/extended/Avatar';
import 'assets/scss/TweetCard.scss'
const TweetCard = ({ userAvatarUrl, userName, userHandle, tweetText }) => {
    return (
        <MainCard className="tweet-card">

            {console.log('Rendering TweetCard')}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={userAvatarUrl} />
                <div style={{ marginLeft: '1rem' }}>
                    <h3 style={{ margin: 0 }}>{userName}</h3>
                    <p style={{ margin: 0, color: 'gray', wordWrap: 'break-word' }}>@{userHandle}</p>
                </div>
            </div>
            <p style={{ marginTop: '1rem', wordWrap: 'break-word' }}>{tweetText}</p>
        </MainCard>

    );
};

export default TweetCard;
