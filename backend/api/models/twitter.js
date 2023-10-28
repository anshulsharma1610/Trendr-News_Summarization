import mongoose from 'mongoose';

const TweetSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    id_str: String,
    user: {
        name: String,
        screen_name: String,
        location: String,
        description: String,
        followers_count: Number,
        friends_count: Number,
        profile_image_url_https: String,
    },
    text: String,
    timestamp: Date,
});

const TweetModel = mongoose.model('Tweet', TweetSchema);

export default TweetModel;
