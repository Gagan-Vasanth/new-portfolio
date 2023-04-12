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
    heading: "Free-Lacing Web Developer",
    place: "Home",
    percentage: "2020 JAN - 2020 AUG",
    location: "Tirupathi, AndhraPradesh - India",
  },
  {
    heading: "Software Engineer",
    place: "Tata Consultancy Services Pvt Ltd",
    percentage: "2020 AUG - 2021 OCT",
    location: "Bengaluru, Karnataka - India",
  },
  {
    heading: "Full Stack Developer",
    place: "Visit Health Pvt Ltd",
    percentage: "2021 OCT - CURRENT",
    location: "Noida, Delhi - India",
  },
];

export default function Experience() {
  return (
    <div>
      <Navbar active={"exp"} />
      <div className="flex flex-col items-start">
        <HeaderContainer>
          <Headers>Gagan's Professional Journey</Headers>
          <Timelines data={MyEducationalData} />
        </HeaderContainer>
      </div>
    </div>
  );
}
