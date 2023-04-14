import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import '../../../assets/scss/CommentDialog.scss'
const CommentDialog = ({ open, onClose, comments, onAddComment }) => {
    const [newComment, setNewComment] = useState('');
    const [localComments, setLocalComments] = useState(comments);

    useEffect(() => {
        setLocalComments(comments);
    }, [comments]);

    const handleAddCommentClick = () => {
        const newCommentObj = { comment: newComment }; // Create a new comment object
        setLocalComments((prevComments) => [...prevComments, newCommentObj]); // Update local comments
        onAddComment(newCommentObj); // Pass the new comment to the parent component
        setNewComment(''); // Clear the input field
    };

    return (
        <Dialog open={open} onClose={onClose} className="comment-dialog">
            <DialogTitle>Comments</DialogTitle>
            <DialogContent>
                <List className="comment-list">
                    {localComments.map((comment, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={comment.content} />
                        </ListItem>
                    ))}
                </List>
                <TextField
                    className="comment-input"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    fullWidth
                    multiline
                />
            </DialogContent>
            <DialogActions className="comment-actions">
                <Button onClick={handleAddCommentClick}>Add Comment</Button>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CommentDialog;
