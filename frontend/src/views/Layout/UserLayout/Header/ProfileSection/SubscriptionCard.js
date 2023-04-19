// material-ui
import { styled } from '@mui/material/styles';
import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
        width: '200px',
        height: '200px',
        border: '19px solid ',
        borderColor: theme.palette.error.main,
        borderRadius: '50%',
        top: '65px',
        right: '-150px'
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: '200px',
        height: '200px',
        border: '3px solid ',
        borderColor: theme.palette.error.main,
        borderRadius: '50%',
        top: '145px',
        right: '-70px'
    }
}));

// ==============================|| PROFILE MENU - UPGRADE PLAN CARD ||============================== //

const UpgradePlanCard = () => {
    let navigate = useNavigate();

    const handleNavigate = () => {
        console.log('-----------------ams')
        navigate("/checkout");
    };

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
        </CardStyle>
    );
};

export default UpgradePlanCard;
