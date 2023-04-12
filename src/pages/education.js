import Headers from "import/components/headers";
import Navbar from "import/components/navbar";
import Timelines from "import/components/timeline";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  margin-left: 15%;
  margin-top: 5%;
`;

const MyEducationalData = [
  {
    heading: "10th Standard",
    place: "Prashant English Medium High School",
    percentage: "9.8 CGPA",
    location: "Tirupathi, Andhra Pradesh, 517501 - India",
  },
  {
    heading: "12th Standard",
    place: "Sri Chaitanya Junior College",
    percentage: "961/1000 Marks",
    location: "Tirupathi, Andhra Pradesh, 517501 - India",
  },
  {
    heading: "Bachelor's in Computer Science",  
    place: "Jawaharlal Nehru Technological Universities",
    percentage: "8.7 CGPA",
    location: "Tirupathi, Andhra Pradesh, 517501 - India",
  },
];

export default function Education() {
  return (
    <div>
      <Navbar active={"edu"} />
      <div className="flex flex-col items-start">
        <HeaderContainer>
          <Headers>Gagan's Educational Journey</Headers>
          <Timelines data={MyEducationalData} />
        </HeaderContainer>
      </div>
    </div>
  );
}
