import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavBarElements = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 30px;
`;

const Gagan = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  user-select: none;
`;

const NavElement = styled.div`
  font-size: 18px;
  margin: 10px;
  cursor: pointer;
  user-select: none;
  padding: 3px 10px;
  border-radius: 3px;
`;

export default function Navbar({ active }) {
  const router = useRouter();

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // if (router.pathname !== "/") {
    //   setTimeout(() => {
    //     setShowNavbar(true);
    //   }, 4000);
    // } else {
    //   setShowNavbar(true);
    // }
  }, [router.pathname]);
  return (
    <div
      className="flex flex-row items-center justify-between max-h-28 mt-24px"
      style={{ opacity: showNavbar ? 1 : 0, transition: "opacity 0.5s" }}
    >
      <Gagan onClick={() => router.push("/")}>Gagan Vasanth</Gagan>
      <NavBarElements>
        <NavElement
          style={
            active === "edu" ? { background: "white", color: "black" } : {}
          }
          onClick={() => router.push("/education")}
        >
          EDU
        </NavElement>
        <NavElement
          style={
            active === "exp" ? { background: "white", color: "black" } : {}
          }
          onClick={() => router.push("/experience")}
        >
          EXP
        </NavElement>
        <NavElement
          style={
            active === "tech" ? { background: "white", color: "black" } : {}
          }
          onClick={() => router.push("/tech-stack")}
        >
          TECH
        </NavElement>
        <NavElement
          style={
            active === "hob" ? { background: "white", color: "black" } : {}
          }
          onClick={() => router.push("/hobbies")}
        >
          HOB
        </NavElement>
        <NavElement
          style={
            active === "resume" ? { background: "white", color: "black" } : {}
          }
          onClick={() => router.push("/resume")}
        >
          RESUME
        </NavElement>
      </NavBarElements>
    </div>
  );
}
