import express from 'express';
import cors from 'cors';
import debug from 'debug';
import models from './models/index.js';
import routes from './routes/index.js';

const app = express();
const log = debug('app:log');
const error = debug('app:error');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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