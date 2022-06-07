import { FilterSlider } from '../../../components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Posts = () => {
    return (
        <Box>
            <Typography variant="h3" style={{ marginBottom: '10px' }}>
                Dashboard
            </Typography>
            <FilterSlider />
        </Box>
    );
};
