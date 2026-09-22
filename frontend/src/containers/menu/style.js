import styled from "styled-components";

export const MenuStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    .title {
        font-size: 35px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 4px;
    }

    .h2-1 {
        background: #FFFFFF;
        color: transparent;
        background-clip: text;
    }

    .h2-2{
        background: linear-gradient(90deg, #00d9ff, #087cff, #4d5fff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;

        filter:
            drop-shadow(0 0 1px rgba(0, 174, 255, 0.5))
            drop-shadow(0 0 2px rgba(0, 110, 255, 0.25));
    }

    .search-form {
        display: flex;
        align-items: center;

        width: min(650px, 90%);
        height: 54px;
        padding: 6px;

        border-radius: 34px;

        border: 2px solid transparent;
        background:
            linear-gradient(white, white) padding-box,
            linear-gradient(
                #087cff,
                #00d9ff,
                transparent 100%
            ) border-box;

        box-shadow:
            inset 7px 4px 10px rgba(0, 0, 0, 0.25);
    }

    .search-input {
        flex: 1;
        height: 100%;
        padding: 0 20px;

        background: transparent;
        border: none;
        outline: none;
        border: none;

        font-size: 16px;
    }

    .search-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        
        height: 52px;
        width: 52px;
        padding: 0;

        border: none;
        border-radius: 26px;
        background: #087cff;

        box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.58);
        -webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.58);
        -moz-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.58);
    }

    .search-btn:hover {
        opacity: 70%;
        cursor: pointer;
    }


    span {
        background: transparent;
    }

    i {
        background: transparent;
        color: #fff;
        font-size: 20px;
    }

    .weather-icons {
        position: relative;
        width: 60px;
        height: 60px;
    }

    .weather-icons i {
        position: absolute;
        inset: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 40px;
        background: linear-gradient(90deg, #00d9ff, #087cff, #4d5fff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;

        opacity: 0;
        animation: weatherIcon 8s infinite;
    }

    .weather-icons i:nth-child(1) {
        animation-delay: 0s;
    }

    .weather-icons i:nth-child(2) {
        animation-delay: 2s;
    }

    .weather-icons i:nth-child(3) {
        animation-delay: 4s;
    }

    .weather-icons i:nth-child(4) {
        animation-delay: 6s;
    }

    @keyframes weatherIcon {
        0% {
            opacity: 0;
            transform: translateY(15px) scale(0.8);
        }

        10% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }

        25% {
            opacity: 1;
            transform: translateY(-5px) scale(1.05);
        }

        35% {
            opacity: 0;
            transform: translateY(-15px) scale(0.8);
        }

        100% {
            opacity: 0;
        }
    }

    .loading {
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 8px;
    }

    .loading-icon {
        position: relative;

        width: 42px;
        height: 42px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loading-icon i {
        position: absolute;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 32px;

        color: #00d9ff;

        opacity: 0;

        filter:
            drop-shadow(0 0 5px #00d9ff)
            drop-shadow(0 0 12px rgba(0, 217, 255, .7));

        animation: loadingIcon 4s infinite;
    }

    .loading-icon i:nth-child(1) {
        animation-delay: 0s;
    }

    .loading-icon i:nth-child(2) {
        animation-delay: 1s;
    }

    .loading-icon i:nth-child(3) {
        animation-delay: 2s;
    }

    .loading-icon i:nth-child(4) {
        animation-delay: 3s;
    }

    @keyframes loadingIcon {
        0% {
            opacity: 0;
            transform: scale(.6) translateY(5px);
        }

        12% {
            opacity: 1;
            transform: scale(1) translateY(0);
        }

        25% {
            opacity: 1;
            transform: scale(1.05);
        }

        37% {
            opacity: 0;
            transform: scale(.7) translateY(-5px);
        }

        100% {
            opacity: 0;
        }
    }

    .loading-lines {
        width: 70px;

        display: flex;
        flex-direction: column;

        gap: 4px;
    }

    .line {
        width: 32px;
        height: 2px;

        border-radius: 10px;
    }

    .line-blue {
        background: #00d9ff;

        box-shadow:
            0 0 5px #00d9ff,
            0 0 10px rgba(0, 217, 255, .7);

        animation: lineBlue 1.4s ease-in-out infinite alternate;
    }

    .line-white {
        align-self: flex-end;

        background: #ffffff;

        box-shadow:
            0 0 5px #ffffff,
            0 0 10px rgba(255, 255, 255, .6);

        animation: lineWhite 1.4s ease-in-out infinite alternate;
    }


    @keyframes lineBlue {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(38px);
        }
    }

    @keyframes lineWhite {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(-38px);
        }
    }

    .results {
        display: none;
        align-items: center;
        justify-content: center;

        text-align: justify;

        flex-direction: column;
        
        position: relative;

        width: min(650px, 90%);
        min-height: 250px;

        margin: 35px auto 0;
        padding: 28px;

        border-radius: 24px;

        background:
            linear-gradient(
                145deg,
                rgba(255, 255, 255, 0.10),
                rgba(255, 255, 255, 0.025)
            );

        border: 1px solid rgba(0, 217, 255, 0.35);

        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

        box-shadow:
            0 15px 50px rgba(0, 0, 0, 0.35),
            inset 0 0 25px rgba(0, 217, 255, 0.04),
            0 0 25px rgba(0, 140, 255, 0.08);

        overflow: hidden;
    }

    .results::before {
        content: "";

        position: absolute;

        top: 0;
        left: -30%;

        width: 30%;
        height: 1px;

        background: linear-gradient(
            90deg,
            transparent,
            #00d9ff,
            #ffffff,
            transparent
        );

        box-shadow:
            0 0 8px #00d9ff,
            0 0 18px #00d9ff;

        animation: resultsLight 3s linear infinite;
    }

    .results::after {
        content: "";

        position: absolute;

        width: 180px;
        height: 180px;

        top: -100px;
        right: -80px;

        border-radius: 50%;

        background: #00d9ff;

        opacity: .06;

        filter: blur(40px);

        pointer-events: none;
    }

    @keyframes resultsLight {
        from {
            left: -30%;
        }

        to {
            left: 130%;
        }
    }

    .results h2 {
        margin: 0 0 8px;

        font-size: 28px;
        font-weight: 700;
        letter-spacing: 0.5px;

        color: #ffffff;

        text-shadow:
            0 0 2px rgba(255, 255, 255, 0.4),
            0 0 5px rgba(0, 217, 255, 0.5);
    }

    .results p {
        margin: 6px 0;

        font-size: 16px;
        font-weight: 400;
        line-height: 1.6;

        color: rgba(255, 255, 255, 0.75);

        letter-spacing: 0.2px;
    }

    .results p strong, .results i {
        color: #00d9ff;
        font-weight: 600;
    }

    .data-section {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: row;
        gap: 7px;
    }

    .data-div {
        margin-bottom: 20px;
    }

    .gemini-loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
    }

    .ai-core {
        position: relative;
        width: 50px;
        height: 50px;
    }

    .ai-core::before {
        content: "";
        position: absolute;
        inset: 14px;
        border-radius: 50%;
        background: #ffffff;
        box-shadow:
            0 0 6px #ffffff,
            0 0 15px #00d9ff,
            0 0 30px #00d9ff,
            0 0 50px rgba(0, 217, 255, .6);

        animation: aiPulse 1.5s ease-in-out infinite;
    }

    .ai-core::after {
        content: "";
        position: absolute;
        inset: 5px;
        border: 1px solid rgba(0, 217, 255, .5);
        border-radius: 50%;

        box-shadow:
            0 0 10px rgba(0, 217, 255, .4);

        animation: aiRotate 3s linear infinite;
    }

    .ai-core span {
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #00d9ff;

        box-shadow:
            0 0 5px #00d9ff,
            0 0 12px #00d9ff;

        top: 22px;
        left: 22px;

        animation: aiOrbit 2s linear infinite;
    }

    .ai-core span:nth-child(1) {
        animation-delay: 0s;
    }

    .ai-core span:nth-child(2) {
        animation-delay: -.5s;
    }

    .ai-core span:nth-child(3) {
        animation-delay: -1s;
    }

    .ai-core span:nth-child(4) {
        animation-delay: -1.5s;
    }

    @keyframes aiPulse {
        0%, 100% {
            transform: scale(.75);
            opacity: .7;
        }

        50% {
            transform: scale(1.15);
            opacity: 1;
        }
    }

    @keyframes aiRotate {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }

    @keyframes aiOrbit {
        from {
            transform: rotate(0deg) translateX(21px) rotate(0deg);
        }

        to {
            transform: rotate(360deg) translateX(21px) rotate(-360deg);
        }
    }

    .ai-feedback {
        display: flex;
        align-items: start;

        flex-direction: column;
        

        h3 {
            background: linear-gradient(90deg, #00d9ff, #087cff, #4d5fff);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        p {
            color: #ffffff;
            text-align: justify;
        }
    }

    .search-again {
        display: inline-block;
        margin-top: 15px;
        color: #00d9ff;
        font-size: 28px;
        text-decoration: none;
        transition: .3s ease;
    }

    .search-again:hover {
        color: #ffffff;
        transform: rotate(180deg);
        text-shadow: 0 0 10px #00d9ff;
    }


`