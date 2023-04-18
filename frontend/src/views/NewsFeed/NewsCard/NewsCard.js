import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentDialog from '../CommentDialog/CommentDialog.js';
import ShareDialog from '../ShareDialog/ShareDialog.js';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box,
    Link,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import '../../../assets/scss/NewsCardStyles.scss'
import {
    likeOrUnlikeArticle,
    commentOnNewsArticle,
    shareNewsArticle,
    // bookmarkNewsArticle,
    // unbookmarkNewsArticle,
    // bookmarkOrUnbookmarkArticle,
    toggleBookmark
} from '../../../services/newsService.js';
const NewsCard = ({ classname, article }) => {
    const isLoggedIn = useSelector((state) => {
        return state.user.isLoggedIn;
    });
    const dispatch = useDispatch();
    let userId;
    if (isLoggedIn) {
        userId = useSelector((state) => state.user.user.user._id);
    }
    const [commentDialogOpen, setCommentDialogOpen] = useState(false);
    const [shareDialogOpen, setShareDialogOpen] = useState(false);
    const [likes, setLikes] = useState(article.likes);
    const [comments, setComments] = useState(article.comments);
    const [shares, setShares] = useState(article.shares);
    const [isLiked, setIsLiked] = useState(article.likedBy.includes(userId));
    //const [bookmarked, setBookmarked] = useState(false); // Initial state of bookmark
    const [bookmarked, setBookmarked] = useState(article.bookmarkedBy.includes(userId));

    const handleLike = async () => {
        const updatedArticle = await likeOrUnlikeArticle(article._id, userId);
        if (updatedArticle) {
            setLikes(updatedArticle.likes);
            setIsLiked(updatedArticle.likedBy.includes(userId));
        }
    };

    const handleBookmark = async () => {
        const result = await toggleBookmark(article._id, userId);
        setBookmarked(result.bookmarkAdded);
    };

    const handleAddComment = async (newCommentObj) => {
        const updatedArticle = await commentOnNewsArticle(article._id, newCommentObj);
        if (updatedArticle) {
            setComments(updatedArticle.comments);
        } else {
            setComments((prevComments) => [...prevComments, newCommentObj]);
        }
    };

    const handleShare = async () => {
        setShares((prevShares) => prevShares + 1);
        await shareNewsArticle(article._id);
    };
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <Card className={`news-card ${classname}`}>
            <CardContent className="card-content">
                {article.image_url && <Box className='imageBox'> <img src={article.image_url} alt={article.title} /></Box>}
                <Typography variant="h5" component="div" className="title">
                    <Link href={article.link} target="_blank" rel="noopener noreferrer">
                        {article.title}
                    </Link>
                </Typography>
                <Box className='info-container'>
                    {/* Display the article's published date */}
                    <Typography variant="caption" color="text.secondary" className="pubDate">
                        {article.pubDate}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" className="separator">
                        {' \u2022 '}
                    </Typography>
                    {/* Display the article's categories */}
                    <Typography variant="caption" color="text.secondary" className="categories">
                        {article.category.map((cat, index) => capitalizeFirstLetter(cat)).join(', ')}
                    </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" className="summary">
                    {article.summary}
                </Typography>
            </CardContent>
            <CardActions className="card-actions">
                <Button onClick={handleLike}>
                    {isLiked ? (
                        <FavoriteIcon color="error" /> // Filled heart icon
                    ) : (
                        <FavoriteBorderIcon /> // Outlined heart icon
                    )}
                    <span className="card-action-text hide-on-mobile">Like ({likes})</span>
                </Button>
                <Button onClick={() => setCommentDialogOpen(true)}>
                    <CommentIcon />
                    <span className="card-action-text hide-on-mobile">Comment ({comments.length}) </span>
                </Button>
                <Button onClick={() => setShareDialogOpen(true)}><ShareIcon /> <span className="card-action-text"> Share </span></Button>
                <Button onClick={handleBookmark}>
                    {bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </Button>
            </CardActions>
            <CommentDialog
                open={commentDialogOpen}
                onClose={() => setCommentDialogOpen(false)}
                comments={comments}
                onAddComment={handleAddComment}
            />
            <ShareDialog
                open={shareDialogOpen}
                onClose={() => setShareDialogOpen(false)}
                article={article}
                onShare={handleShare}
            />
        </Card>
    );
};

export default NewsCard;
