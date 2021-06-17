import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
    width: 100px;
    height: 100px;
    border-radius: 15px;
    background-color: #ffbe7d;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }
    .checkbox-custom {
        position: absolute;
        height: 24px;
        width: 24px;
        background-color: transparent;
        border-radius: 5px;
        border: 2px solid #ffffff;
        transition: all 0.3s ease-out;
    }
    .checkbox-custom::after {
        position: absolute;
        content: "";
        left: 12px;
        top: 12px;
        height: 0px;
        width: 0px;
        border-radius: 5px;
        border: solid #ff8000;
        border-width: 0 3px 3px 0;
        transform: rotate(0deg) scale(0);
        opacity: 1;
        transition: all 0.3s ease-out;
    }
    .checkbox-custom::before {
        position: absolute;
        content: "";
        left: 10px;
        top: 10px;
        width: 0px;
        height: 0px;
        border-radius: 5px;
        border: 2px solid #ffffff;
        transform: scale(0);
    }
    input:checked ~ .checkbox-custom {
        background-color: #ffffff;
        border-radius: 5px;
        transform: rotate(0deg) scale(1);
        opacity: 1;
        border: 2px solid #ffffff;
    }

    input:checked ~ .checkbox-custom::after {
        transform: rotate(45deg) scale(1);
        opacity: 1;
        left: 8px;
        top: 3px;
        width: 6px;
        height: 12px;
        border: solid #ff8000;
        border-width: 0 2px 2px 0;
        background-color: transparent;
        border-radius: 0;
    }

    input:checked ~ .checkbox-custom::before {
        left: -3px;
        top: -3px;
        width: 24px;
        height: 24px;
        border-radius: 5px;
        transform: scale(3);
        opacity: 0;
        z-index: 999;
        transition: all 0.3s ease-out;
    }
    .checkbox-custom.circular {
        border-radius: 50%;
        border: 2px solid #ffffff;
    }
    input:checked ~ .checkbox-custom.circular {
        background-color: #ffffff;
        border-radius: 50%;
        border: 2px solid #ffffff;
    }
    input:checked ~ .checkbox-custom.circular::after {
        border: solid #ff8000;
        border-width: 0 2px 2px 0;
    }
    .checkbox-custom.circular::after {
        border-radius: 50%;
    }
    .checkbox-custom.circular::before {
        border-radius: 50%;
        border: 2px solid #ffffff;
    }
    input:checked ~ .checkbox-custom.circular::before {
        border-radius: 50%;
    }
`;

export default function Checkbox(props) {
    const { variant = "square", children, ...rest } = props;

    return (
        <CheckboxContainer {...rest} htmlFor="box">
            <input type="checkbox" id="box" />
            <span className={`checkbox-custom ${variant}`}></span>
        </CheckboxContainer>
    );
}
