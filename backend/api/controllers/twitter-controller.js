import Twit from 'twit';
import {
    setSuccessfulResponse,
    setErrorResponse,
    setPostSuccessfulResponse,
    setbodyMissingError,
    setnotFound
} from '../util/statusCodes.js';
import * as preferenceService from '../services/preference-service.js';
import * as userService from '../services/user-service.js';
import { query } from 'express';

const twitter = new Twit({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
})

export const get = async (req, res) => {
    const user = req.query.id;
    console.log(user)
    let preferences = [];
    // get user data from db
    const userData = await userService.getById(user);
    // get user preferences from db

    let query;
    let date = new Date();
    date.setDate(date.getDate() - 5);
    date = date.toISOString().slice(0, 10);

    if (preferences.length > 0) {
        for (let i in userData.preferences) {
            let data = await preferenceService.getById(userData.preferences[i]);
            preferences.push(data.prefernceName);
        }

        const randomIndex1 = Math.floor(Math.random() * preferences.length);
        let randomIndex2;
        do {
            randomIndex2 = Math.floor(Math.random() * preferences.length);
        } while (randomIndex2 === randomIndex1);

        const randomValue1 = preferences[randomIndex1];
        const randomValue2 = preferences[randomIndex2];
        query = 'news for ' + randomValue1 + ' ' + randomValue2 + ' since:' + date;
    } else {
        query = 'latest news on world since:' + date;
    }

    await twitter.get('search/tweets', { q: query, count: 17 }, (err, data, response) => {
        if (err) {
            setErrorResponse(err, res);
        } else {
            setSuccessfulResponse(data, res);
        }
    });

    // await twitter.get('search/tweets', { q: 'latest news on sports since:2023-04-11', count: 20 }, (err, data, response) => {
    //     if (err) {
    //         setErrorResponse(err, res);
    //     } else {
    //         setSuccessfulResponse(data, res);
    //     }
    // });
}
