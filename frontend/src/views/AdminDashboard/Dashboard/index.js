import { useState } from 'react';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography
} from '@mui/material';

// project import
import MainCard from "components/cards/MainCard";
import GrowthLineColoumn from './GrowthLineColoumn';
import OrdersColoumnChart from './OrdersColoumnChart';
import OrdersPieChart from './OrdersPieChart';
import RecentPurchases from './RecentPurchases';
import SalesLineChart from './SalesLineChart';
import AnalyticEcommerce from './AnalyticsCard';
import { useEffect } from 'react';
import { getAnalytics } from 'services/adminService';

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

// sales report status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //
// let analytics = [];
const Dashboard = () => {
    const [analytics, setAnalytics] = useState([]);


    const [articles, setArticles] = useState(0);
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);

    useEffect(() => {
        const fetchAnalytics = async () => {
            const temp = [];
            const data = await getAnalytics();
            data.forEach(element => {
                temp.push(element)
            });
            setAnalytics(temp);
            // dataArray = data;
            console.log('----recent purc analytics', typeof data, temp, analytics)

            // Update likes, comments, and articles after analytics state has been updated
            setArticles(data[0].analyticsCard.totalNews);
            setLikes(data[0].analyticsCard.totalLikes);
            setComments(data[0].analyticsCard.totalComments);
        };
        fetchAnalytics();

    }, []);

    return (
        // <div>
        //     {analytics[0]?.analyticsCard?.userCount?.currentUserCount}</div>
        <Grid container rowSpacing={4.5} columnSpacing={2.75} >
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }
            }>
                <Typography variant="h5">Dashboard</Typography>
            </Grid >
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Total Users"
                    count={analytics[0]?.analyticsCard?.userCount?.currentUserCount}
                    percentage={analytics[0]?.analyticsCard?.userCount?.percentIncreaseUser}
                    extra={analytics[0]?.analyticsCard?.userCount?.currentUserCount - analytics[0]?.analyticsCard?.userCount?.previousUserCount} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Active Subscribers"
                    count={analytics[0]?.analyticsCard?.activeSubscribers?.currentCountUnique}
                    percentage={analytics[0]?.analyticsCard?.activeSubscribers?.percentIncreaseUnique}
                    extra={analytics[0]?.analyticsCard?.activeSubscribers?.currentCountUnique - analytics[0]?.analyticsCard?.activeSubscribers?.previousCountUnique} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Total Purchases"
                    count={analytics[0]?.analyticsCard?.purchaseCount?.currentCountAll}
                    percentage={analytics[0]?.analyticsCard?.purchaseCount?.percentIncreaseAll}
                    extra={analytics[0]?.analyticsCard?.purchaseCount?.currentCountAll - analytics[0]?.analyticsCard?.purchaseCount?.previousCountAll}
                    color="warning" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Total Sales"
                    count={analytics[0]?.analyticsCard?.salesCount?.currentCountSales}
                    percentage={analytics[0]?.analyticsCard?.salesCount?.percentIncreaseSales}
                    extra={analytics[0]?.analyticsCard?.salesCount?.currentCountSales - analytics[0]?.analyticsCard?.salesCount?.previousCountSales}
                    color="warning" />
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

            {/* row 2 */}
            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Sales</Typography>
                    </Grid>
                </Grid>
                <MainCard content={false} sx={{ mt: 1.5 }}>
                    <Box sx={{ pt: 1, pr: 2 }}>
                        <SalesLineChart data={analytics[3]?.monthlySales} />
                    </Box>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
                <Grid sx={{ mt: 0 }} container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Analytics Report (This Month)</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
                        <ListItemButton divider>
                            <ListItemText primary="Total Articles" />
                            <Typography variant="h5">{articles}</Typography>
                        </ListItemButton>
                        <ListItemButton divider>
                            <ListItemText primary="Total Likes" />
                            <Typography variant="h5">{likes}</Typography>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Total Comments" />
                            <Typography variant="h5">{comments}</Typography>
                        </ListItemButton>
                    </List>
                </MainCard>
            </Grid>
            {/* <Grid item xs={12} md={5} lg={4} sx={{ mt: 1 }}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item >
                        <Typography variant="h5">Income Overview</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <Box sx={{ p: 3, pb: 2 }}>
                        <Stack spacing={2}>
                            <Typography variant="h6" color="textSecondary">
                                This Week Statistics
                            </Typography>
                            <Typography variant="h3">$7,650</Typography>
                        </Stack>
                    </Box>
                    <OrdersPieChart data={analytics[4]?.pieChart} />
                </MainCard>
            </Grid> */}

            {/* row 3 */}
            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Sales Report</Typography>
                    </Grid>
                </Grid>
                <MainCard content={false} sx={{ mt: 1.5 }}>
                    <Box sx={{ pt: 1 }}>
                        <GrowthLineColoumn data={analytics[5]?.getSalesAndGrowth} />
                    </Box>
                </MainCard>
            </Grid>


            <Grid item xs={12} md={5} lg={4} sx={{ mt: 1 }}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Transaction History</Typography>
                    </Grid>
                </Grid>
                {analytics[2]?.prevPurchases.map((item, index) => {
                    return <RecentPurchases key={index} item={item} />
                })}
            </Grid>
            {/* row 4 */}
            <Grid item xs={12} md={12} lg={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Sales Report</Typography>
                    </Grid>

                </Grid>
                <MainCard content={true} sx={{ mt: 1.5 }}>
                    <Box sx={{ pt: 1 }}>
                        <OrdersColoumnChart data={analytics[1]?.coloumnChart} />
                    </Box>
                </MainCard>
            </Grid>
        </Grid >
    );
};

export default Dashboard;