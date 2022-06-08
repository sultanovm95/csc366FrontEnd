import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { getUser } from '../../utils';
import { SurveyComponent, SurveyJobComponent, SurveyUploader } from '../';

export const FilterSlider = () => {
    const [value, setValue] = useState('URE');

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        getUser().then((user) => {
            setUserId(user._id);
        });
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', backgroundColor: 'white' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                centered
            >
                <Tab value="URE" label="URE SURVEY" />
                <Tab value="UPLOAD" label="UPLOAD URE" />
                <Tab value="JOB" label="JOB SURVEY" />
            </Tabs>

            {value === 'URE' ? <SurveyComponent /> : null}
            {value === 'UPLOAD' ? <SurveyUploader /> : null}
            {value === 'JOB' ? <SurveyJobComponent /> : null}
        </Box>
    );
};
