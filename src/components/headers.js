import styled from "styled-components";

const Header = styled.div`
  font-size: 24px;
  width: 100%;
  font-weight: 600;
`;
export default function Headers({ children }) {
  return <Header>{children}</Header>;
}
