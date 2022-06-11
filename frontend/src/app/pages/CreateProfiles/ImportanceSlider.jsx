import { Slider } from '@mui/material';
export function ImportanceSlider(props) {
    const importanceSliderChange = (event, value) => {
        props.resetOnImportanceChange(props.cName, value);
    };

    function valuetext(value) {
        return `${value}`;
    }

    var val = 4
    if (props.value !== undefined) {
        val = props.value
    }

    return (
        <Slider
            style={{ width: '110px' }}
            aria-label="Temperature"
            defaultValue={4}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            value={val}
            step={1}
            marks
            min={0}
            max={7}
            onChangeCommitted={importanceSliderChange}
        ></Slider>
    );
}
