import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import setGlobalTheme from "./setGlobalTheme";

const Switch = () => {
  const [theme, setTheme] = useState(Cookies.get("theme") || "Dark");

  useEffect(() => {
    setGlobalTheme(theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "Dark" ? "Light" : "Dark"));
  };

  // Debounce function to prevent rapid toggling
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  const debouncedHandleThemeToggle = debounce(handleThemeToggle, 300);

  return (
    <StyledWrapper onClick={debouncedHandleThemeToggle}>

      <label
        htmlFor="themeToggle"
        className="themeToggle st-sunMoonThemeToggleBtn"
        type="checkbox"
      >
        <input type="checkbox" id="themeToggle" className="themeToggleInput" />
        <svg
          width={50}
          height={50}
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="none"
        >
          <mask id="moon-mask">
            <rect x={0} y={0} width={20} height={20} fill="white" />
            <circle cx={11} cy={3} r={8} fill="black" />
          </mask>
          <circle
            className="sunMoon"
            cx={10}
            cy={10}
            r={8}
            mask="url(#moon-mask)"
          />
          <g>
            <circle className="sunRay sunRay1" cx={18} cy={10} r="1.5" />
            <circle className="sunRay sunRay2" cx={14} cy="16.928" r="1.5" />
            <circle className="sunRay sunRay3" cx={6} cy="16.928" r="1.5" />
            <circle className="sunRay sunRay4" cx={2} cy={10} r="1.5" />
            <circle className="sunRay sunRay5" cx={6} cy="3.1718" r="1.5" />
            <circle className="sunRay sunRay6" cx={14} cy="3.1718" r="1.5" />
          </g>
        </svg>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* a clone from joshwcomeau.com 
   * but this version runs on pure CSS
   */
  position:relative;
  background: var(--textTheme);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  cursor: pointer;


  .themeToggle {
    color: #bbb;
  }

  .st-sunMoonThemeToggleBtn {
    position: relative;
    cursor: pointer;
    display: grid;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .st-sunMoonThemeToggleBtn .themeToggleInput {
    opacity: 0;
    width: 50%;
    aspect-ratio: 1;
  }

  .st-sunMoonThemeToggleBtn svg {
    position: absolute;
    width: 50%;
    height: 50%;
    place-self: center;
    transition: transform 0.4s ease;
    transform: rotate(40deg);
    z-index: 100;
  }

  .st-sunMoonThemeToggleBtn svg .sunMoon {
    transform-origin: center center;
    transition: inherit;
    transform: scale(1);
  }

  .st-sunMoonThemeToggleBtn svg .sunRay {
    transform-origin: center center;
    transform: scale(0);
  }

  .st-sunMoonThemeToggleBtn svg mask > circle {
    transition: transform 0.64s cubic-bezier(0.41, 0.64, 0.32, 1.575);
    transform: translate(0px, 0px);
  }

  .st-sunMoonThemeToggleBtn svg .sunRay2 {
    animation-delay: 0.05s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay3 {
    animation-delay: 0.1s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay4 {
    animation-delay: 0.17s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay5 {
    animation-delay: 0.25s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay5 {
    animation-delay: 0.29s !important;
  }

  .st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg {
    transform: rotate(90deg);
  }
  .st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg mask > circle {
    transform: translate(16px, -3px);
  }
  .st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg .sunMoon {
    transform: scale(0.55);
  }
  .st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg .sunRay {
    animation: showRay1832 0.4s ease 0s 1 forwards;
  }

  @keyframes showRay1832 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default Switch;
