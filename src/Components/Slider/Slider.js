import React from "react";
import { Slider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const StyledSlider = styled.div`
    width: 300px;
    margin: 30px;
`;

export default function SliderComponent() {
    const [value, setvalue] = React.useState(0);
    const marks = [
        { value: 0, label: "Not Important" },
        { value: 10, label: "Very Important" },
    ];
    const handleChange = (event, newValue) => {
        setvalue(newValue);
    };
    return (
        <StyledSlider>
            <Typography>Importance</Typography>
            <Grid container spacing={2}>
                <Grid item xs>
                    <Slider step={1} marks={marks} value={value} max={10} onChange={handleChange} />
                </Grid>
                <Grid item>
                    <Typography>{value}</Typography>
                </Grid>
            </Grid>
        </StyledSlider>
    );
}
