import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

// project imports
import MainCard from 'components/cards/MainCard';

// assets
import LinkIcon from '@mui/icons-material/Link';

// styles
const IFrameWrapper = styled('iframe')(({ theme }) => ({
    height: 'calc(100vh - 210px)',
    border: '1px solid',
    borderColor: theme.palette.primary.light
}));

// =============================|| TABLER ICONS ||============================= //

const TablerIcons = () => (
    <MainCard title="Tabler Icons">
        <Card sx={{ overflow: 'hidden' }}>
            <IFrameWrapper title="Tabler Icons" width="100%" />
        </Card>
    </MainCard>
);

export default TablerIcons;
