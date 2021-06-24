import React from 'react'
import styled from "styled-components";


const StyledToggle = styled.label` 


	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;


input[type="checkbox"] {
	visibility: hidden;
	&:checked + label {
		transform: rotate(360deg);
		background-color: #000;
		&:before {
			transform: translateX(90px);
			background-color: #FFF;
		}
	}
}

label {
	display: flex;
	width: 180px;
	height: 80px;
	border: 6px solid;
	border-radius: 99em;
	position: relative;
	transition: transform .75s ease-in-out;
	transform-origin: 50% 50%;
	cursor: pointer;
	
	&:before {
		transition: transform .75s ease;
		transition-delay: .5s;
		content: "";
		display: block;
		position: absolute;
		width: 54px;
		height: 54px;
		background-color: orange;
		border-radius: 50%;
		top: 12px;
		left: 12px;
	}
}

`;


export default function Toggle1(props) {
    const { variant = "rotate", children, ...rest } = props;
    return (
        
            <StyledToggle {...rest}>
	            <input type="checkbox" id="toggle"/>
	            <label for="toggle"></label>
            </StyledToggle>
        
    )
}

;
