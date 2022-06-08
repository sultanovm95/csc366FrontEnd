import { useState, useEffect } from 'react';
import { TextField, List, ListItem, Typography, Popover } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import { ValueSlider } from './ValueSlider';
import { ImportanceSlider } from './ImportanceSlider';
import { criterias } from './mock';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export function CreateProfiles() {
    const [criteria_bindings, setCriteriaBindings] = useState([]);
    const [PName, setPName] = useState('');
    const [anchorEl, setAnchorEl] = useState(null); //for popup
    const [openedPopoverId, setOpenedPopoverId] = useState(null); //for popup

    useEffect(() => {
        makeCriteriaBindings().then((criteriaBindings) => {
            if (criteriaBindings) {
                setCriteriaBindings(criteriaBindings);
            }
        });
    }, []);

    async function makeCriteriaBindings() {
        // const response = await axios.get(
        //   "http://localhost:5000/criteria_values"
        // );

        // return response.data.criteria;

        return criterias.criteria;
    }

    function resetOnValueChange(cName, value) {
        setCriteriaBindings(
            criteria_bindings.map((binding) => {
                if (binding.cName === cName)
                    return { ...binding, cValue: value };
                else return binding;
            })
        );
    }

    function resetOnImportanceChange(cName, value) {
        setCriteriaBindings(
            criteria_bindings.map((binding) => {
                if (binding.cName === cName)
                    return { ...binding, importanceRating: value };
                else return binding;
            })
        );
    }

    const icon_sym = '\u24D8';

    const handlePopoverOpen = (event) => {
        setOpenedPopoverId(event.currentTarget.id);
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setOpenedPopoverId(null);
        setAnchorEl(null);
    };

    const clickHandler = () => {
        console.log(criteria_bindings);
    };

    function handleTextChange(e) {
        setPName(e.target.value);
    }

    //make post call here
    const handleSubmit = (event) => {
        event.preventDefault();
        //what is AId
        console.log({
            PName: PName,
            PType: 'Desired',
            criteria: criteria_bindings
        });
    };

    return (
        <Box>
            <Typography variant="h3" style={{ marginBottom: '10px' }}>
                Adding Criteria
            </Typography>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '70%',
                    margin: 'auto',
                    marginTop: '20px',
                    marginBottom: '20px'
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    onChange={handleTextChange}
                    placeholder="Please name your profile here"
                />
                <Button variant="outlined" type="submit" onClick={handleSubmit}>
                    Create
                </Button>
            </Paper>

            <TableContainer component={Paper}>
                <Table aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell align="left">Value</TableCell>
                            <TableCell align="left">Importance</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {criteria_bindings.map((c_binding) => (
                            <TableRow key={c_binding.CId}>
                                <TableCell component="th" scope="row">
                                    {c_binding.cName}
                                </TableCell>
                                <TableCell>
                                    <ValueSlider
                                        resetOnValueChange={resetOnValueChange}
                                        cName={c_binding.cName}
                                    />
                                </TableCell>
                                <TableCell>
                                    <ImportanceSlider
                                        resetOnImportanceChange={
                                            resetOnImportanceChange
                                        }
                                        cName={c_binding.cName}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
