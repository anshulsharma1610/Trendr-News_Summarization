// material-ui
import { styled } from '@mui/material/styles';
import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

// styles
const CardStyle = styled(Card)(({ theme }) => ({
    background: theme.palette.error.light,
    marginTop: '16px',
    marginBottom: '16px',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: '300px',
        height: '300px',
        border: '19px solid ',
        borderColor: theme.palette.error.main,
        borderRadius: '50%',
        top: '25px',
        right: '-190px'
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: '300px',
        height: '300px',
        border: '3px solid ',
        borderColor: theme.palette.error.main,
        borderRadius: '50%',
        top: '-120px',
        right: '-150px'
    }
}));

// ==============================|| PROFILE MENU - UPGRADE PLAN CARD ||============================== //

const UpgradePlanCard = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const isUserSubbed = useSelector((state) => state.isUserSubbed.isUserSubbed);
    const expiry = useSelector((state) => {
        if (state.user.user && state.user.user.userSubscription
            && isUserSubbed
            && state.user.user.userSubscription.userSub
            && state.user.user.userSubscription.userSub.validTill) {
            return new Date(state.user.user.userSubscription.userSub.validTill).toLocaleDateString();
        }
        return "";
    });
    console.log('====', isUserSubbed, expiry)

    const handleNavigate = () => {
        console.log('-----------------ams')
        navigate("/checkout");
    };

    if (!isUserSubbed) {
        return (
            <CardStyle>
                <CardContent>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Typography variant="h4">Upgrade to Trendr Pro</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" color="black.900" sx={{ opacity: 0.6 }}>
                                Get Unlimited News for 1 Month.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Stack direction="row" spacing={2}>
                                <Button variant="contained" onClick={() => handleNavigate()} color="warning" sx={{ boxShadow: 'none' }}>
                                    Go Pro
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" color="grey.900" sx={{ opacity: 0.6 }}>
                                Trendr Pro features:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <CheckIcon color="primary" />
                                <Typography variant="body2" color="grey.900" sx={{ opacity: 0.6 }}>
                                    Unlimited search results
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <CheckIcon color="primary" />
                                <Typography variant="body2" color="grey.900" sx={{ opacity: 0.6 }}>
                                    Endless news feed
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <CheckIcon color="primary" />
                                <Typography variant="body2" color="grey.900" sx={{ opacity: 0.6 }}>
                                    Access to premium articles and content
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <CheckIcon color="primary" />
                                <Typography variant="body2" color="grey.900" sx={{ opacity: 0.6 }}>
                                    Personalized news recommendations
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" color="grey.900" sx={{ opacity: 0.6 }}>
                                Don't miss out! Non-subscribers only get:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <CloseIcon color="error" />
                                <Typography variant="body2" color="grey.900" sx={{ opacity: 0.6 }}>
                                    Limited search results (only 5 articles displayed)
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <CloseIcon color="error" />
                                <Typography variant="body2" color="grey.900" sx={{ opacity: 0.6 }}>
                                    Limited news feed (only 5 articles displayed)
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardStyle>
        )
    } else {
        return
    }
}

export default UpgradePlanCard;