import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    Typography,
    Box
} from '@mui/material';
import '../../../assets/scss/CommentDialog.scss'
const CommentDialog = ({ open, onClose, comments, onAddComment }) => {
    const [newComment, setNewComment] = useState('');
    const [localComments, setLocalComments] = useState(comments);

    const isLoggedIn = useSelector((state) => {

        return state.user.isLoggedIn;

    });
    const dispatch = useDispatch();

    let id;
    let firstname;
    let lastname;
    if (isLoggedIn) {
        id = useSelector((state) => state.user.user.user._id);
        firstname = useSelector((state) => state.user.user.user.fname)
        lastname = useSelector((state) => state.user.user.user.lname)
    }
    useEffect(() => {
        setLocalComments(comments);
    }, [comments]);


    const handleAddCommentClick = () => {
        const timestamp = new Date().toISOString(); // Get the current timestamp
        const fullName = `${firstname} ${lastname}`; // Get the user's full name
        const newCommentObj = {
            userId: id,
            userFullName: fullName, // Include the user's full name
            content: newComment, // Include the comment content
            timestamp: timestamp, // Include the timestamp
        };
        setLocalComments((prevComments) => [...prevComments, newCommentObj]); // Update local comments
        onAddComment(newCommentObj); // Pass the new comment to the parent component
        setNewComment(''); // Clear the input field
    };

    return (
        <Dialog open={open} onClose={onClose} className="comment-dialog">
            <DialogTitle className="dialog-title">Comments</DialogTitle>
            <DialogContent className="dialog-content">
                <List className="comment-list">
                    {localComments.map((comment, index) => (
                        <ListItem key={index} className="comment-item">
                            <ListItemText
                                primary={
                                    <Typography // Display the user's full name
                                        component="span"
                                        variant="subtitle1"
                                        className="user-fullname">
                                        {comment.userFullName}
                                    </Typography>
                                }
                                secondary={
                                    <>
                                        <Typography component="span" variant="body2" color="textPrimary">
                                            {comment.content} {/* Display the comment content */}
                                        </Typography>
                                        <br />
                                        {new Date(comment.timestamp).toLocaleString()} {/* Display the timestamp */}
                                    </>
                                }
                                className="comment-content"
                            />
                        </ListItem>
                    ))}
                </List>

            </DialogContent>
            <DialogActions className="comment-actions">
                <Box display="flex" flexDirection="column" width="100%">
                    <TextField
                        className="comment-input"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Write a comment..."
                        fullWidth
                        multiline
                    />
                    <Box display="flex" justifyContent="flex-end" mt={1}>
                        <Button onClick={handleAddCommentClick}>Add Comment</Button>
                        <Button onClick={onClose}>Close</Button>
                    </Box>
                </Box>
            </DialogActions>
        </Dialog>
    );
};

export default CommentDialog;
