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
        width: '100px',
        height: '100px',
        border: '19px solid ',
        borderColor: theme.palette.error.main,
        borderRadius: '50%',
        top: '35px',
        right: '-60px'
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: '100px',
        height: '100px',
        border: '3px solid ',
        borderColor: theme.palette.error.main,
        borderRadius: '50%',
        top: '70px',
        right: '-20px'
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
        navigate("/user/checkout");
    };

    if (isUserSubbed) {
        return (
            <CardStyle>
                <CardContent>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Typography variant="h4">You so PROOO!</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2" color="grey.900" sx={{ opacity: 0.6 }}>
                                You're pro till <br />
                                {expiry}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardStyle>
        );
    }
    else {
        return (
            <CardStyle>
                <CardContent>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Typography variant="h4">Upgrade to Trendr Pro</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2" color="grey.900" sx={{ opacity: 0.6 }}>
                                Unlimited News for <br />
                                1 month.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Stack direction="row">
                                <Button variant="contained" onClick={() => handleNavigate()} color="warning" sx={{ boxShadow: 'none' }}>
                                    Go Pro!
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardStyle >
        );
    }
};

export default UpgradePlanCard;
