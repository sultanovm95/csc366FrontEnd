import React from 'react';
import { makeStyles } from '@mui/styles';
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

function createJob(name, id) {
    return { name, id };
}

const matches = [
    createJob('Software Engineering', '123AB'),
    createJob('Data Analyst', '231AS')
];

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto'
    },
    table: {
        minWidth: 650
    }
});

function createData(name, date, matchings) {
    return { name, date, matchings };
}

const JobMatching = () => {
    let jobListings = matches.map((job) => (
        <TableRow>
            <TableCell padding="checkbox" />
            <TableCell>{job.name}</TableCell>
            <TableCell align="right">{job.id}</TableCell>
            <TableCell align="right">
                <InsertLinkOutlinedIcon color="secondary" />
            </TableCell>
        </TableRow>
    ));

    return jobListings;
};

const rows = [
    createData('Custome 1', 'June 3rd, 2022', matches),
    createData('Test 2', 'June 3rd, 2022', matches),
    createData('Test 4', 'June 3rd, 2022', matches)
];

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
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
                    {JobMatching(rows.matchings)}
                </>
            )}
        </>
    );
};

export const SurveyProfileTable = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox" />
                        <TableCell>Survey Profiles</TableCell>
                        <TableCell align="right">Date Completed</TableCell>
                        <TableCell align="right">
                            <AddCircleOutlineIcon color="primary" />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <ExpandableTableRow
                            key={row.name}
                            expandComponent={JobMatching(matches)}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
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
