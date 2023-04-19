import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
    Avatar,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    Stack,
    Typography
} from '@mui/material';
import MainCard from 'components/cards/MainCard';

// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};


export default function RecentPurchases({ item }) {
    console.log('-----RecentPurchases', item)
    return (
        <MainCard sx={{ mt: 0.5 }} content={false}>
            <List
                component="nav"
                sx={{
                    px: 0,
                    py: 0,
                    '& .MuiListItemButton-root': {
                        py: 1.5,
                        '& .MuiAvatar-root': avatarSX,
                        '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                    }
                }}
            >
                <ListItemButton divider>
                    <ListItemAvatar>
                        <Avatar
                            sx={{
                                color: 'success.main',
                                bgcolor: 'success.lighter'
                            }}
                        >
                            {/* <GiftOutlined /> */}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="subtitle1" color="blue">Order #{item._id}</Typography>} secondary={item.createdAt} />
                    <ListItemSecondaryAction>
                        <Stack alignItems="flex-end">
                            <Typography variant="subtitle1" noWrap>
                                + ${item.price}
                            </Typography>
                            {/* <Typography variant="h6" color="secondary" noWrap>
                                UserId: {item.userId}
                            </Typography> */}
                        </Stack>
                    </ListItemSecondaryAction>
                </ListItemButton>
            </List>
        </MainCard>
    );
}