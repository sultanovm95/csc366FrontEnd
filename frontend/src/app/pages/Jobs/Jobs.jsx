import { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchBar from 'material-ui-search-bar';

import LinkIcon from '@mui/icons-material/Link';

import {
    TextField,
    Pagination,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from '@mui/material';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { getHeader } from '../../../utils';

import { responseJSON } from './mock';

export function Jobs(props) {
    const [all_jobs, setAllJobs] = useState([]);
    const [jobDescriptions, setAllJobDescriptions] = useState([]);
    const [current_jobDescription, setCurrentJobDescription] = useState('All');
    const [subset_jobs, setSubsetJobs] = useState([]);
    const [page, setPage] = useState(1);
    const [num_pages, setNumPages] = useState();

    useEffect(() => {
        fetchAllJobsByType(current_jobDescription).then((result) => {
            if (result) {
                setAllJobs(result);
                setNumPages(Math.ceil(result.length / 15));
                setSubsetJobs(result.slice(0, 15));
            }
        });
    }, []);

    useEffect(() => {
        fetchAllJobDescriptions().then((result) => {
            if (result) setAllJobDescriptions(result);
        });
    }, []);

    async function fetchAllJobsByType(jobType) {
        const response = await axios.get(
            'http://localhost:5000/jobs?jobType=' + jobType,
            getHeader()
        );
        return response.data.jobs;
    }

    async function fetchAllJobDescriptions() {
        const response = await axios.get(
            'http://localhost:5000/jobs/descriptions'
        );
        return response.data.jobDescriptions;
    }

    async function fetchJobsMatchingSearch(text) {
        const response = fetchAllJobsByType(current_jobDescription);
        return response.then((all_jobs) =>
            all_jobs.filter((job) =>
                job.ONetJob.toLowerCase().includes(text.toLowerCase())
            )
        );
    }

    const handlePageChange = (event, value) => {
        setPage(value);
        if (all_jobs.length >= value * 15)
            setSubsetJobs(all_jobs.slice((value - 1) * 15, value * 15));
        else setSubsetJobs(all_jobs.slice((value - 1) * 15, all_jobs.length));
    };

    function handleJobClick(event, link) {
        event.preventDefault();
        window.open(
            'https://www.onetonline.org/link/summary/'.concat(link),
            '_blank',
            ',width=1000,height=800,left=0,top=0,toolbar=0,status=0'
        );
    }

    function handleTextChange(e) {
        fetchJobsMatchingSearch(e).then((new_jobs) => {
            if (new_jobs) {
                setAllJobs(new_jobs);
                setNumPages(Math.ceil(new_jobs.length / 15));
                setPage(1);
                if (new_jobs.length >= 15) setSubsetJobs(new_jobs.slice(0, 15));
                else setSubsetJobs(new_jobs.slice(0, new_jobs.length));
            }
        });
    }

    function handleJobTypeChange(e) {
        setCurrentJobDescription(e.target.value);
        fetchAllJobsByType(e.target.value).then((new_jobs) => {
            if (new_jobs) {
                setAllJobs(new_jobs);
                setNumPages(Math.ceil(new_jobs.length / 15));
                setPage(1);
                if (new_jobs.length >= 15) setSubsetJobs(new_jobs.slice(0, 15));
                else setSubsetJobs(new_jobs.slice(0, new_jobs.length));
            }
        });
    }

    const row_style = {
        color: 'black',
        padding: '30px',
        border: '3px solid black',
        fontSize: '20px'
    };

    const icon_sym = '\u24D8';

    return (
        <body>
            <Typography variant="h3" style={{ marginBottom: '10px' }}>
                ONetJob
            </Typography>

            <FormControl
                style={{
                    width: '100%',
                    backgroundColor: 'white',
                    margin: '10px 0px'
                }}
            >
                <InputLabel>Job Type</InputLabel>
                <Select
                    label="Type"
                    value={current_jobDescription}
                    onChange={handleJobTypeChange}
                >
                    <MenuItem value={'All'}>All</MenuItem>
                    {jobDescriptions.map((jobDescription) => (
                        <MenuItem value={jobDescription.ONetDescription}>
                            {jobDescription.ONetDescription}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Paper>
            <TextField
                    id="outlined-basic"
                    label="Search Job"
                    variant="outlined"
                    style={{ margin: '10px 10px' }}
                    onChange={(e) => {
                        handleTextChange(e.target.value);
                    }}
                />
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Job Title</TableCell>
                                <TableCell align="right">
                                    Job Description
                                </TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {subset_jobs.map((job) => (
                                <TableRow key={job.ONetId}>
                                    <TableCell component="th" scope="row">
                                        {job.ONetJob}
                                    </TableCell>
                                    <TableCell align="right">
                                        {job.ONetDescription}
                                    </TableCell>
                                    <TableCell align="right">
                                        <LinkIcon
                                            onClick={(event) =>
                                                handleJobClick(
                                                    event,
                                                    job.ONetId
                                                )
                                            }
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Pagination
                page={page}
                count={num_pages}
                shape="rounded"
                onChange={handlePageChange}
            />
        </body>
    );
}
