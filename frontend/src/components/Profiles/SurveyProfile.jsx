import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import axios from 'axios';

import {getHeader} from '../../utils'

const JobMatching = ({pid}) => {
    const [rows, setRows] = React.useState([]);
    React.useEffect(() => {
        axios.get(`http://127.0.0.1:5000/profile/match?pid=${pid}`, getHeader())
        .then(res => {
            const results = res.data;
            setRows(results.matches)
        }).catch(err => {
            console.error(err)
        })
    }, [])

    let jobListings = rows.map((job) => (
        <TableRow key={job.ONetId}>
            <TableCell padding="checkbox" />
            <TableCell>{job.ONetJob}</TableCell>
            <TableCell align="right">{job.ONetId}</TableCell>
            <TableCell align="right">
                <InsertLinkOutlinedIcon color="secondary" />
            </TableCell>
        </TableRow>
    ));

    return jobListings;
};

const ExpandableTableRow = ({ children, id, ...otherProps }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <>
            <TableRow {...otherProps}>
                <TableCell padding="checkbox">
                    <IconButton onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                {children}
            </TableRow>
            {isExpanded && (
                <>
                    <TableRow style={{ backgroundColor: '#FAD4D4' }}>
                        <TableCell padding="checkbox" />
                        <TableCell>Recommendation List</TableCell>
                        <TableCell align="right">Job ID</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                    <JobMatching pid={id}/>
                </>
            )}
        </>
    );
};

export const SurveyProfileTable = ({filter}) => {
    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://127.0.0.1:5000/profile/user', getHeader())
        .then(res => {
            const results = res.data;
            setRows(results.profiles.filter(function(data) {
                return data.PType == filter
            }))
        }).catch(err => {
            console.error(err)
        })
    }, [])

    return (
        <Paper>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox" />
                        <TableCell>{filter} Profiles</TableCell>
                        <TableCell align="right">Date Completed</TableCell>
                        <TableCell align="right">
                            <AddCircleOutlineIcon color="primary" />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <ExpandableTableRow
                            key={row.PId}
                            id={row.PId}
                        >
                            <TableCell component="th" scope="row">
                                {row.PName}
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">
                                <DeleteOutlineIcon color="secondary" />
                            </TableCell>
                        </ExpandableTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};
