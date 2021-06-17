import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    .button {
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        width: 150px;
    }
    .primary {
        background-color: #464c51;
    }
    .next {
        background-image: linear-gradient(to right, #ff4b1f, #ff9068, #ff9068, #ff4b1f);
        background-size: 200%;
        background-position: right;
        transition: 500ms background-position ease-in-out;
        color: #464c51;
    }
    .next:hover {
        background-position: left;
    }
    .previous {
        background-image: linear-gradient(to right, #f7971e, #ffd200, #ffd200, #f7971e);
        background-size: 200%;
        background-position: left;
        transition: 500ms background-position ease-in-out;
        color: #464c51;
    }
    .previous:hover {
        background-position: right;
    }
`;

export default function Button(props) {
    const { variant = "primary", children, ...rest } = props;
    return (
        <StyledContainer>
            <button className={`button ${variant}`} {...rest}>
                {children}
            </button>
        </StyledContainer>
    );
}
