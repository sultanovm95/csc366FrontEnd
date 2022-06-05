import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { getUser } from '../../utils';

export const FilterSlider = () => {
    const [value, setValue] = useState('one');

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
                <Tab value="one" label="URE SURVEY" />
                <Tab value="upload" label="UPLOAD URE" />
                {userId ? <Tab value="two" label="JOB SURVEY" /> : null}
                {userId ? <Tab value="three" label="PROFILES" /> : null}
            </Tabs>
        </Box>
    );
};
