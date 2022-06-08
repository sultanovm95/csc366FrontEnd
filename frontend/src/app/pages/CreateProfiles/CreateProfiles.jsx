import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export function CreateProfiles() {
    const [criteria_bindings, setCriteriaBindings] = useState([]);
    const [PName, setPName] = useState('');

    useEffect(() => {
        makeCriteriaBindings().then((criteriaBindings) => {
            if (criteriaBindings) {
                setCriteriaBindings(criteriaBindings);
            }
        });
    }, []);

    async function makeCriteriaBindings() {
        // const response = await axios.get(
        //     'http://localhost:5000/criteria_values'
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

    function handleTextChange(e) {
        setPName(e.target.value);
    }

    //make post call here
    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log({
            PName: PName,
            PType: 'Desired',
            Criteria: criteria_bindings
        });
        try {
            //what is AId; Need to find AID from login?
            axios.post(
            "http://localhost:5000/profile?aid=0",
            {PName: PName, PType: 'Desired', Criteria: criteria_bindings}
          );
      } catch (err) {
          return err;
      }
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
                                <Tooltip title={c_binding.cDescription} arrow>
                                    <TableCell component="th" scope="row">
                                        {c_binding.cName}
                                    </TableCell>
                                </Tooltip>
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
