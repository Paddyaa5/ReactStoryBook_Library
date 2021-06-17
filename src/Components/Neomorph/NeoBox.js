import React, { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    position: relative;
    height: 100px;
    width: 100px;
    input {
        position: absolute;
        display: none;
    }
    .box {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        cursor: pointer;
    }
    .default {
        box-shadow: inset -3px -3px 5px rgba(0, 0, 0, 0.35),
            inset 3px 3px 5px rgba(255, 255, 255, 0.15);
        color: white;
        transition: all 0.3s ease-in-out;
    }
    .selected {
        box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.15), -3px -3px 5px rgba(0, 0, 0, 0.35);
        color: lightgrey;
        transition: all 0.3s ease-in-out;
    }
`;

export default function Neomorph(props) {
    let { variant = "default", children, ...rest } = props;
    const [active, setActive] = useState(variant);

    const switchVar = () => {
        if (active === "default") {
            setActive("selected");
        } else {
            setActive("default");
        }
    };
    return (
        <StyledContainer>
            <input type="checkbox" id="selection" name="selection"></input>
            <label
                htmlFor="selection"
                className={`box ${active}`}
                {...rest}
                onClick={() => switchVar()}
            >
                {children}
            </label>
        </StyledContainer>
    );
}
