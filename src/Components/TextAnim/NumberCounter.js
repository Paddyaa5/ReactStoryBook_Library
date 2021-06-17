import React, { useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";

const StyledContainer = styled.h1`
    display: flex;
    overflow: hidden;
`;

export default function NumberCounter() {
    const [stage, setStage] = useState(1);
    let numberRef = useRef(null);
    let tl = gsap.timeline();
    const incrementStage = () => {
        let temp = stage + 1;
        tl.to(numberRef, { y: "-100%", duration: 0.5, ease: "circ.inOut" })
            .set(numberRef, { y: "100%" })
            .to(numberRef, { y: 0, duration: 0.5, ease: "circ.inOut" });
        setTimeout(() => {
            setStage(temp);
        }, 500);
    };

    return (
        <>
            <StyledContainer>
                <span>0</span>
                <span ref={(el) => (numberRef = el)}>{stage}</span>
            </StyledContainer>
            <button onClick={() => incrementStage()}>CLICK</button>
        </>
    );
}
