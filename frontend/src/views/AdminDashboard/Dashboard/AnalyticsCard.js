import PropTypes from 'prop-types';

// material-ui
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import { IconTrendingUp, IconTrendingDown } from '@tabler/icons';

// project import
import MainCard from 'components/cards/MainCard';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticEcommerce = ({ color, title, count, percentage, isLoss, extra }) => (
    <MainCard contentSX={{ p: 1.5 }}>
        <Stack spacing={0.5}>
            <Typography variant="h6" color="textSecondary">
                {title}
            </Typography>
            <Grid container alignItems="center">
                <Grid item>
                    <Typography variant="h4" color="inherit">
                        {count}
                    </Typography>
                </Grid>
                {percentage && (
                    <Grid item>
                        <Chip
                            variant="combined"
                            color={color}
                            icon={
                                <>
                                    {!isLoss && <IconTrendingUp style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                                    {isLoss && <IconTrendingDown style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                                </>
                            }
                            label={`${percentage}%`}
                            sx={{ ml: 1.25, pl: 1 }}
                            size="small"
                        />
                    </Grid>
                )}
            </Grid>
        </Stack>
        <Box sx={{ pt: 2.25 }}>
            <Typography variant="caption" color="textSecondary">
                You made an extra{' '}
                <Typography component="span" variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
                    {extra}
                </Typography>{' '}
                this month
            </Typography>
        </Box>
    </MainCard>
);

AnalyticEcommerce.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    count: PropTypes.number,
    percentage: PropTypes.number,
    isLoss: PropTypes.bool,
    extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

AnalyticEcommerce.defaultProps = {
    color: 'primary'
};

export default AnalyticEcommerce;