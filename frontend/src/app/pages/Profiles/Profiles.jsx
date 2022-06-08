import { SurveyProfileTable, CustomProfileTable } from '../../../components';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import Divider from '@mui/material/Divider';

export const Profiles = () => {
    return (
        <Box>
            <Typography variant="h3" style={{ marginBottom: '10px' }}>
                Profiles
            </Typography>
            <SurveyProfileTable filter="Experience"/>
            <Divider style={{ margin: '20px' }} />
            <SurveyProfileTable filter="Desired"/>
        </Box>
    );
};
