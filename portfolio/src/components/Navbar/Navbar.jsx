import styled from "styled-components";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
} from "./NavStyledComponents";
import { FaBars } from "react-icons/fa";
import { DiCssdeck } from "react-icons/di";
import {Bio} from "../../Data/constansts";
import {Close, CloseRounded} from "@mui/icons-material";
import { useTheme } from "styled-components";
import logo from "../../assets/Logo.png";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          {/* <img
            src={logo}
            style={{ width: "100px", height: "100px", borderRadius: "50%", marginTop: "30px" }}
          /> */}
          {/* <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
            }}
          ></a> */}
          <DiCssdeck size="3rem" /> <Span>Aditya Dhanaraj Kundu</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#certification">Certification</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton>GitHub</GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
      {isOpen && (
        <MobileMenu isOpen={isOpen}>
          <MobileLink
            href="#about"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            About
          </MobileLink>
          <MobileLink
            href="#skills"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Skills
          </MobileLink>
          <MobileLink
            href="#projects"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Projects
          </MobileLink>
          <MobileLink
            href="#education"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Education
          </MobileLink>
          <MobileLink
            href="#certification"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Certification
          </MobileLink>
          <GitHubButton
            style={{
              padding: "10px 16px",
              background: `${theme.primary}`,
              color: "white",
              width: "max-content",
            }}
            href={Bio.github}
            target="_blank"
          >
            Github Profile
          </GitHubButton>
        </MobileMenu>
      )}
    </Nav>
  );
}

export default Navbar;