import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserBookmarks } from '../../../src/services/newsService';
import NewsCard from 'views/NewsFeed/NewsCard/NewsCard';
//import '../../assets/scss/NewsCard.scss'
import '../../assets/scss/NewsCardStyles.scss'
import 'assets/scss/BookmarkSearchFeed.scss'
const Bookmarks = () => {
    const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const userId = useSelector((state) => state.user.user.user._id);

    useEffect(() => {
        const fetchBookmarks = async () => {
            if (isLoggedIn) {
                const bookmarks = await getUserBookmarks(userId);
                setBookmarkedArticles(bookmarks.map(bookmark => bookmark.articleId));
            }
        };
        fetchBookmarks();
    }, [isLoggedIn, userId]);

    return (
        <div className='searchbookmark-feed'>
            <h2>Bookmarked Articles</h2>
            {bookmarkedArticles.length === 0 ? (
                <p>No bookmarks found.</p>
            ) : (
                bookmarkedArticles.map((article) => (
                    <NewsCard classname='bookmark' key={article._id} article={article} />
                ))
            )}
        </div>
    );
};

export default Bookmarks;
