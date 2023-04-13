import TrendingNews from '../models/trendingNews.js';
import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';

const API_KEY = 'pub_2046797795d847124b089a7a1a55cbfdbfdb3';
const BASE_URL = 'https://newsdata.io/api/1/news';
// OpenAI API configuration


export const fetchTrendingNews = async (queryParams) => {
    const newsArticles = [];
    let nextPage = null;
    for (let i = 0, j = 0; j < 10 && i < 5; i++) {
        const url = new URL(BASE_URL);
        url.searchParams.append('apikey', API_KEY);
        // Append each query parameter from the client's request to the Newsdata.io API request
        for (const [key, value] of Object.entries(queryParams)) {
            url.searchParams.append(key, value);
        }
        if (nextPage !== null) {
            url.searchParams.append('page', nextPage);
        }
        console.log(url.toString())
        const response = await axios.get(url.toString());
        const data = response.data;
        for (const article of data.results) {
            if (j >= 10) {
                break;
            }
            if (article.image_url != null) {
                newsArticles.push({
                    title: article.title,
                    pubDate: article.pubDate,
                    link: article.link,
                    image_url: article.image_url
                });
                j++;
            }
        }
        nextPage = data.nextPage;
    }
    return newsArticles;
};
