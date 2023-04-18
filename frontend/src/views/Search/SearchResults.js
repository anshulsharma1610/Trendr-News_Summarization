// SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import NewsCard from 'views/NewsFeed/NewsCard/NewsCard';
import '../../assets/scss/BookmarkSearchFeed.scss'
import '../../assets/scss/NewsCardStyles.scss'
const SearchResults = () => {
    const location = useLocation(); // Get the location object
    const news = location.state || []; // Get the search results from the route state
    return (
        <div className='searchbookmark-feed'>
            <h2>Search Results</h2>
            {news.length === 0 ? (
                <p>No results found</p>
            ) : (
                news.map((article) => (
                    <NewsCard classname='search' key={article._id} article={article} />
                ))
            )}
        </div>
    );
};

export default SearchResults;
