import styled, { keyframes } from "styled-components";
import BrandElement from "./animate-letter";

const BrandingContainer = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 24px;
`;

export default function Branding() {
  return (
    <BrandingContainer>
      <BrandElement value={"g"} delayInMs={2} />
      <BrandElement value={"a"} delayInMs={4} />
      <BrandElement value={"g"} delayInMs={6} />
      <BrandElement value={"a"} delayInMs={8} />
      <BrandElement value={"n"} delayInMs={10} />
    </BrandingContainer>
  );
}
