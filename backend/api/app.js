import express from 'express';
import cors from 'cors';
import debug from 'debug';
import session from 'express-session';
import passport from 'passport';
import models from './models/index.js';
import routes from './routes/index.js';

const app = express();
const log = debug('app:log');
const error = debug('app:error');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));

// Initialize passport middleware
app.use(passport.initialize());
// Use passport session middleware
app.use(passport.session());

routes(app);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE'
    );
    next();
});

export default app;