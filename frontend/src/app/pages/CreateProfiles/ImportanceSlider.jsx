import {Slider} from '@mui/material';
export function ImportanceSlider(props) {


  const importanceSliderChange = (event, value) => {
    props.resetOnImportanceChange(props.cName, value)
  };


  return(
      <Slider style={{border: "solid 1px",width: "20%", marginLeft: "2%"}}  
              valueLabelDisplay="auto"
              defaultValue={4}
              min={0}
              max={7}
              onChangeCommitted={importanceSliderChange}> 
      </Slider>
  )
}

