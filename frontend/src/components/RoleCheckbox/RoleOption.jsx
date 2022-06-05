import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const RoleOption = (props) => {
    const [userRole, setUserRole] = React.useState('Client');

    const handleChange = (event) => {
        setUserRole(event.target.value);
        console.log(event.target.value);
        props.updateRole(event.target.value);
    };

    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
                {props.value} as
            </FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={userRole}
                onChange={handleChange}
            >
                <FormControlLabel
                    value="Client"
                    control={<Radio />}
                    label="User"
                />
                <FormControlLabel
                    value="Doctor"
                    control={<Radio />}
                    label="Admin"
                />
            </RadioGroup>
        </FormControl>
    );
};
