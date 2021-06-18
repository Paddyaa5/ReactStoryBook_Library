import React, { useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Container = styled.div`
    position: relative;
    width: 80vw;
    height: 80vh;
    border: 1px dashed black;
    padding: 25px;
    .primary-section {
        position: absolute;
        z-index: 1;
        height: calc(100% - 50px);
        width: calc(100% - 50px);
        background-color: #172a3a;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: whitesmoke;
    }
    .secondary-section {
        position: absolute;
        width: calc(50% - 50px);
        height: calc(100% - 50px);
        right: 0;
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button {
        position: absolute;
        z-index: 2;
        padding: 10px 20px;
        border: 3px solid #74b3ce;
        border-radius: 20px;
        background-color: white;
        cursor: pointer;
        bottom: 35px;
        right: 35px;
    }
`;

export default function Form() {
    const [section, setSection] = useState(1);

    let primarySect = useRef(null);
    let primaryTitle = useRef(null);
    let secondSect = useRef(null);
    let buttonRef = useRef(null);

    const sectionHandler = () => {
        if (section > 3) {
            nextSectionHandler();
        } else {
            finalSectionHandler();
        }
    };
    const nextSectionHandler = () => {
        gsap.to(primarySect, {
            width: "calc(100% - 50px)",
            duration: 0.8,
            ease: "circ.inOut",
        });
        gsap.to(primaryTitle, {
            opacity: 0,
            duration: 0.5,
        });
        gsap.to(primaryTitle, {
            opacity: 1,
            duration: 0.4,
            delay: 1,
        });
        setTimeout(() => {
            let temp = section + 1;
            setSection(temp);
        }, 800);
    };
    const finalSectionHandler = () => {
        gsap.to(primarySect, {
            width: "calc(30% - 25px)",
            duration: 0.8,
            ease: "circ.inOut",
        });
        gsap.to(secondSect, {
            width: "calc(70% - 25px)",
            opacity: 1,
            duration: 0.8,
            ease: "circ.inOut",
        });
        gsap.to(primaryTitle, {
            opacity: 0,
            duration: 0.5,
        });
        gsap.to(primaryTitle, {
            opacity: 1,
            duration: 0.4,
            delay: 1,
        });
        setTimeout(() => {
            let temp = section + 1;
            setSection(temp);
        }, 800);
    };

    return (
        <Container>
            <section className="primary-section" ref={(el) => (primarySect = el)}>
                <h1 ref={(el) => (primaryTitle = el)}>{section}</h1>
            </section>
            <section className="secondary-section" ref={(el) => (secondSect = el)}>
                <h1>{section}</h1>
            </section>
            {section < 5 && (
                <button ref={(el) => (buttonRef = el)} onClick={sectionHandler}>
                    NEXT
                </button>
            )}
            {section === 5 && <button>Submit</button>}
        </Container>
    );
}
