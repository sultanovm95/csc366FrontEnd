
import {Slider} from '@mui/material';
export function ValueSlider(props) {

  const valueSliderChange = (event, value) => {
    props.resetOnValueChange(props.cName, value)
  };


  return(
      <Slider style={{border: "solid 1px",width: "20%"}} 
              valueLabelDisplay="auto"
              defaultValue={4}
              min={0}
              max={7}
              onChangeCommitted={valueSliderChange}> 
      </Slider>


  )
}

