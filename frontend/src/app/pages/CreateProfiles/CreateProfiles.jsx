import { useState, useEffect } from "react";
import {TextField, List, ListItem, Typography, Popover} from '@mui/material';
import axios from "axios";
import {ValueSlider} from "./ValueSlider";
import {ImportanceSlider} from "./ImportanceSlider";
export function CreateProfiles() {

  const [criteria_bindings, setCriteriaBindings] = useState([]);
  const [PName, setPName] = useState("");
  const [anchorEl, setAnchorEl] = useState(null); //for popup
  const [openedPopoverId, setOpenedPopoverId] = useState(null); //for popup

  useEffect(() => {
    makeCriteriaBindings().then((criteriaBindings) => {
      if (criteriaBindings) {
        setCriteriaBindings(criteriaBindings)
        console.log(criteriaBindings)
      }
    });
  }, []);


 
  async function makeCriteriaBindings() {
    const response = await axios.get(
      "http://localhost:5000/criteria_values"
    );
    return response.data.criteria;
  }

  function resetOnValueChange(cName, value)
  {
    setCriteriaBindings(criteria_bindings.map(binding => {
        if (binding.cName === cName) 
          return {...binding, cValue: value};
        else
          return binding;
        }
      ))
  }

  function resetOnImportanceChange(cName, value)
  {
    setCriteriaBindings(criteria_bindings.map(binding => {
        if (binding.cName === cName) 
          return {...binding, importanceRating: value};
        else
          return binding;
        }
      ))
  }





  const icon_sym = "\u24D8"
 
  const handlePopoverOpen = (event) => {
    setOpenedPopoverId(event.currentTarget.id)
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setOpenedPopoverId(null);
    setAnchorEl(null) };

  const clickHandler = () => {console.log(criteria_bindings)}; 

  function handleTextChange(e) {setPName(e.target.value)}





  //make post call here
  const handleSubmit = () => {
    //what is AId
    console.log({"PName": PName, "PType": "Desired", "criteria": criteria_bindings})
  }


  return(
    <body>
      <h1 style={{color: "black"}}>Create Your Custom Profile</h1>
      {/* <button onClick={clickHandler}>Testing console log to store criteria values/ratings</button> */}
      <TextField
                style={{ width: '50%' }}
                variant="outlined"
                label="Please name your profile here"
                onChange={handleTextChange}
            >
                {' '}
      </TextField>
      <List>
        <ListItem>
        <p style={{textAlign: "center",color: "red", width: "23%", height: "0px", fontSize: "20px"}}><b>Job Characteristic</b></p>
        <p style={{textAlign: "center",color: "red", width: "20%", height: "0px", fontSize: "20px"}}><b>Value</b></p>
        <p style={{textAlign: "center",color: "red", width: "20%", height: "0px", fontSize: "20px"}}><b>Importance</b></p>
        </ListItem>
        {criteria_bindings.map(c_binding =>
          (
            <ListItem>
              <Typography id={c_binding.CId} 
                      aria-owns={Boolean(anchorEl) ? 'mouse-over-popover' : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpen}
                      onMouseLeave={handlePopoverClose}
                  style={{color: "blue", width: "3%", fontSize: "20px"}}
                  >{icon_sym}
              </Typography>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={openedPopoverId == c_binding.CId}
                anchorEl={anchorEl}
  

                anchorOrigin={{
                  vertical: -50,
                  horizontal: -10,
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
              <Typography sx={{ p: 1 }}>{c_binding.cDescription}</Typography>
            </Popover>
     

              <p style={{color: "black", width: "20%"}}>{c_binding.cName}</p>
              <ValueSlider resetOnValueChange={resetOnValueChange} cName={c_binding.cName}/>
              <ImportanceSlider resetOnImportanceChange={resetOnImportanceChange} cName={c_binding.cName}/>
            </ListItem>

          )
        
        
        )

        }

      </List>
      <button style={{marginLeft: "50%", borderRadius: "15px",background: "yellow", border: "solid 1px",
                      color: "black", width: "15%", height: "50%", fontSize: "20px"}} 
              onClick={handleSubmit}>Create Profile
      </button>
    </body>


  )
}

