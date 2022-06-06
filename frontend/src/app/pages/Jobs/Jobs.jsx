import { useState, useEffect } from "react";
import {TextField, Pagination} from '@mui/material';
import axios from "axios";

export function Jobs() {

  const [all_jobs, setAllJobs] = useState([]);
  const [subset_jobs, setSubsetJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [num_pages, setNumPages] = useState();


  useEffect(() => {
      fetchAllJobs().then((result) => {
        if (result) {
          setAllJobs(result);
          setNumPages(Math.ceil(result.length / 15))
          setSubsetJobs(result.slice(0, 15))
        }
      });
    }, []);


  async function fetchAllJobs() {
        const response = await axios.get(
          "http://localhost:5000/jobs"
        );
        return response.data.jobs;
    }

  async function fetchJobsMatchingSearch(text) {
      const response = fetchAllJobs();
      return response.then((all_jobs) => 
      all_jobs.filter(job => job.ONetJob.toLowerCase().includes(text.toLowerCase())));
  }


  const handlePageChange = (event, value) => {
    setPage(value);
    if (all_jobs.length >= (value * 15))
      setSubsetJobs(all_jobs.slice(((value - 1) * 15), value * 15))  
    else
      setSubsetJobs(all_jobs.slice(((value - 1) * 15), all_jobs.length))    
  };


  function handleJobClick(e) {
    e.preventDefault();
    window.open("https://www.onetonline.org/link/summary/".concat(e.target.id),
                  "_blank",",width=1000,height=800,left=0,top=0,toolbar=0,status=0")
  } 

  function handleTextChange(e) {
    e.preventDefault();
    fetchJobsMatchingSearch(e.target.value).then((new_jobs) =>  {
      if (new_jobs)
      {
        setAllJobs(new_jobs);
        setNumPages(Math.ceil(new_jobs.length / 15));
        setPage(1);
        if (new_jobs.length >= 15)
          setSubsetJobs(new_jobs.slice(0, 15));
        else
          setSubsetJobs(new_jobs.slice(0, new_jobs.length));
      }
    })                                           
  } 


  const row_style = {
    color: "black",
    padding: "30px",
    border: "3px solid black",
    fontSize: "20px"
  }

  const icon_sym = "\u24D8"

  return (
    <body>
        <h1 style={{color: "black"}}>ONET Job Search</h1>
        <TextField style={{width: "50%"}} variant="outlined"  label="Job Search" onChange={handleTextChange}> </TextField>
        <table style={{border: "solid 5px", width: "100%", marginTop: "10px"}}>
            <tr style={row_style} >
              <th>Job Title</th>
              <th>Job Description</th>
            </tr>
            {subset_jobs.map(job => 
              (<tr
                key={job.ONetId} id={job.ONetId}  >
                <td style={{border: "solid 1px",width: "50%", color: "black"}}>{job.ONetJob}</td>
                <td style={{border: "solid 1px", width: "50%", color: "black"}}>{job.ONetDescription}</td>
                <td>
                    <button id={job.ONetId} onClick={handleJobClick} style={{color: "blue",border: "none",background: "none",fontSize: "15px"}}> 
                               {icon_sym} </button>
                </td>
              </tr>))}        
        </table> 
        <Pagination page={page} count={num_pages} shape="rounded" onChange={handlePageChange} />
    </body>
  );
}  