import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';
import '../../../assets/scss/ShareDialog.scss'

const ShareDialog = ({ open, onClose, article }) => {
    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(article.link);
        setCopied(true);
    };

    return (
        <Dialog open={open} onClose={onClose} className="share-dialog" fullWidth maxWidth="xs">
            <DialogTitle className="share-title">Share Article</DialogTitle>
            <DialogContent>
                <div className="share-buttons">
                    <FacebookShareButton url={article.link} quote={article.title}>
                        <FacebookIcon size={62} round />
                    </FacebookShareButton>
                    <TwitterShareButton url={article.link} title={article.title}>
                        <TwitterIcon size={62} round />
                    </TwitterShareButton>
                    <WhatsappShareButton url={article.link} title={article.title}>
                        <WhatsappIcon size={62} round />
                    </WhatsappShareButton>
                </div>
                <div className="copy-link">
                    <Button onClick={handleCopyLink}>
                        <FileCopyIcon style={{ marginRight: '4px' }} /> {/* Add the icon */}
                        {copied ? 'Link Copied!' : 'Copy Link'} {/* Keep the text */}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ShareDialog;
