import React, { useState } from 'react';
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
import '../../../assets/scss/NewsCard.scss'
import {
    likeNewsArticle,
    commentOnNewsArticle,
    shareNewsArticle,
} from '../../../services/newsService.js';
const NewsCard = ({ article }) => {
    const [commentDialogOpen, setCommentDialogOpen] = useState(false);
    const [shareDialogOpen, setShareDialogOpen] = useState(false);
    const [likes, setLikes] = useState(article.likes);
    const [comments, setComments] = useState(article.comments);
    const [shares, setShares] = useState(article.shares);

    const handleLike = async () => {
        setLikes((prevLikes) => prevLikes + 1);
        await likeNewsArticle(article._id);
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

    return (
        <Card className="news-card">
            <CardContent className="card-content">
                {article.image_url && <Box className='imageBox'> <img src={article.image_url} alt={article.title} /></Box>}
                <Typography variant="h5" component="div" className="title">
                    <Link href={article.link} target="_blank" rel="noopener noreferrer">
                        {article.title}
                    </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary" className="summary">
                    {article.summary}
                </Typography>
            </CardContent>
            <CardActions className="card-actions">
                <Button onClick={handleLike}>Like ({likes})</Button>
                <Button onClick={() => setCommentDialogOpen(true)}>
                    Comment ({comments.length})
                </Button>
                <Button onClick={() => setShareDialogOpen(true)}>Share</Button>
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
