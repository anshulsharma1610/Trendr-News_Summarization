import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
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
        <Dialog open={open} onClose={onClose} className="share-dialog">
            <DialogTitle>Share Article</DialogTitle>
            <DialogContent>
                <div className="share-buttons">
                    <FacebookShareButton url={article.link} quote={article.title}>
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton url={article.link} title={article.title}>
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <WhatsappShareButton url={article.link} title={article.title}>
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                </div>
                <div className="copy-link">
                    <Button onClick={handleCopyLink}>
                        {copied ? 'Link Copied!' : 'Copy Link'}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ShareDialog;
