// SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import NewsCard from 'views/NewsFeed/NewsCard/NewsCard';

const SearchResults = () => {
    const location = useLocation(); // Get the location object
    const news = location.state || []; // Get the search results from the route state
    return (
        <div className='news-feed'>
            <h2>Search Results</h2>
            {news.length === 0 ? (
                <p>No results found</p>
            ) : (
                news.map((article) => (
                    <NewsCard key={article._id} article={article} />
                ))
            )}
        </div>
    );
};

export default SearchResults;
