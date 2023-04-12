import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const brandingMotion = keyframes`
    0% {
      transform: translateX(-160px);
      opacity: 0;
      color: #C70039; 
    }
    25% {
        transform: translateX(-120px);
        opacity: 0;
        color: #C70039; 
    }
    50% {
        transform: translateX(-80px);
        opacity: 0.5;
        color: #C70039; 
    }
    75% {
      transform: translateX(-40px);
      opacity: 1;
      color: #C70039; 
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
      color: #C70039; 
    }
`;

const Letter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  font-size: 20rem;
  font-weight: 700;
  animation: ${brandingMotion} 2s linear;
`;

const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  user-select: none;
`;

const Wrapper = styled.div`
  width: 30%;
  height: 110%;
  background: black;
  z-index: 2;
  position: absolute;
  margin: -20%;
`;

export default function BrandElement({ value, delayInMs }) {
  const [letterColor, setLetterColor] = useState("#C70039");
  const [hideWrapper, setHideWrapper] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHideWrapper(true);
    }, 1600);

    setTimeout(() => {
      setLetterColor("#fff");
    }, delayInMs * 100 + 2000);
  }, [delayInMs]);
  return (
    <OuterContainer>
      <Wrapper style={hideWrapper ? { display: "none" } : {display: 'block'}}></Wrapper>
      <Letter style={{ color: letterColor }}>{value}</Letter>
    </OuterContainer>
  );
}
