// create a timeline for each phase of my educational life
// will be good with boy icon changing based on the timeline that user in
// fill the timeline based on the scroll
// revert the timeline if the user scroll back
// fill the circles if the user moves to next phase of the timeline
// once the journey is finished show the back and next pages to jump in
// transition of width
// scroll tracking

import { useState } from "react";
import styled from "styled-components";

const TimelineContainer = styled.div`
  width: 60%;
  height: 70vh;
  overflow: scroll;
`;

const DetailsCard = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  background-color: white;
  color: black;
  padding: 12px;
  box-shadow: 2px 2px 2px #ffffff;

  &:hover {
    transition: all 0.2s;
    transform: scale(1.2);
  }
`;

const CardHeading = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: start;
  margin: 8px;
  border-bottom: 1px solid black;
`;

const OtherDetails = styled.div`
  font-size: 13px;
  font-weight: 300;
  text-align: start;
  margin: 6px;
`;

const BigCircle = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SmallCircle = styled.div`
  width: 18px;
  height: 14px;
  background: white;
  margin: 2px;
  border-radius: 50%;
`;

const BigLine = styled.div`
  width: 4px;
  height: 150px;
  margin-top: 10px;
  background: white;
`;

export default function Timeline({ data }) {
  const [currentSection, setCurrentSection] = useState(0);

  const generateSection = (info, index, hideLine) => {
    return (
      <div
        className="flex flex-row items-start justify-center mx-4 mt-6"
        key={index}
      >
        <div className="flex flex-col items-center ">
          <BigCircle>
            <SmallCircle></SmallCircle>
          </BigCircle>
          {!hideLine && <BigLine></BigLine>}
        </div>
        <DetailsCard>
          <CardHeading>{info.heading}</CardHeading>
          <OtherDetails>{info.place}</OtherDetails>
          {info.percentage && <OtherDetails>{info.percentage}</OtherDetails>}
          <OtherDetails>{info.location}</OtherDetails>
        </DetailsCard>
      </div>
    );
  };

  return (
    <TimelineContainer id="timeline-container">
      {data.map((d, i) => {
        const hideLine = i === data.length - 1;
        return generateSection(d, i, hideLine);
      })}
    </TimelineContainer>
  );
}
