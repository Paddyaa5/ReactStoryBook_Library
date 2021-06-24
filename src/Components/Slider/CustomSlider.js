import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 100px;
    grid-gap: 20px;
    height: 100px;
    align-items: center;
    padding: 0 25px;
    .slider {
        -webkit-appearance: none;
        height: 10px;
        border-radius: 15px;
        outline: none;
        background-color: rgba(0, 0, 0, 0.5);
        &::-webkit-slider-thumb {
            position: relative;
            appearance: none;
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            cursor: pointer;
            background-color: #ee7b00;
            border-radius: 50%;
        }
        &::-moz-range-thumb {
            width: 20px;
            height: 20px;
            cursor: pointer;
            background-color: #ee7b00;
            border-radius: 50%;
        }
    }
`;

export default function CustomSlider() {
    const [sliderValue, setSliderValue] = useState(5000);

    const valueHandler = (e) => {
        setSliderValue(e.target.value);
    };

    return (
        <Container>
            <input
                type="range"
                min={0}
                max={10000}
                className="slider"
                value={sliderValue}
                onChange={valueHandler}
            />
            <div className="value-box">
                <h3>£{sliderValue}</h3>
            </div>
        </Container>
    );
}
