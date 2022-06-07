import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { SurveyComponent } from '../index';

export const TabSlider = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                width: '100%',
                typography: 'body1',
                backgroundColor: 'white'
            }}
        >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                    >
                        <Tab label="Take a Survey" value="1" />
                        <Tab label="Manage Survey" value="2" />
                        <Tab label="Desired Profiles" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <SurveyComponent />
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </Box>
    );
};
