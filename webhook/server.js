import app from './api/app.js';

const port = process.env.PORT || 4242;
app.listen(port, () => {
    console.log(`Webhook Server is running on port ${port}`);
});