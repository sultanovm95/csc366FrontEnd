import { Slider } from '@mui/material';
export function ValueSlider(props) {
    const valueSliderChange = (event, value) => {
        props.resetOnValueChange(props.cName, value);
    };

    function valuetext(value) {
        return `${value}`;
    }

    return (
        <Slider
            style={{ width: '110px' }}
            aria-label="Temperature"
            defaultValue={4}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={7}
            onChangeCommitted={valueSliderChange}
        ></Slider>
    );
}