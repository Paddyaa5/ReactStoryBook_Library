import React, { useState } from "react";
import styled from "styled-components";
import gsap from "gsap";

const StyledContainer = styled.div`
    width: 400px;
    height: 300px;
    h1 {
        display: flex;
        width: 100%;
        align-items: flex-start;
        overflow: hidden;
        margin: 0;
    }
`;

export default function TextSwitch() {
    let tl = gsap.timeline();
    const [stage, setStage] = useState(0);
    const [text, setText] = useState([
        ["Lets", "Get", "Started"],
        ["What website", "are you", "looking for?"],
    ]);
    const [activeText, setActiveText] = useState(text[stage]);

    const incrementStage = () => {
        let temp = stage + 1;
        tl.to(".hide", { y: "-100%", duration: 0.5, stagger: 0.05 })
            .set(".hide", { y: "100%" })
            .to(".hide", { y: 0, duration: 0.5, stagger: 0.1 });

        setTimeout(() => {
            setActiveText(text[temp]);
        }, 500);
    };

    return (
        <>
            <StyledContainer>
                {activeText.map((text, id) => (
                    <h1 key={id}>
                        <span className="hide">{text}</span>
                    </h1>
                ))}
            </StyledContainer>
            <button onClick={() => incrementStage()}>CLICK</button>
        </>
    );
}
