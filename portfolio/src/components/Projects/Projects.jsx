import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectStyles";
import { projects } from "../../Data/constansts";
import ProjectCard from "../Cards/Projects/ProjectCard";
import PropTypes from "prop-types";


function Projects({openModal, setOpenModal}) {
  const [toggle, setToggle] = useState("all");
  
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a variety of projects, ranging from web development
          to machine learning. Here are a few of them.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              WEB APPS
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              WEB APPS
            </ToggleButton>
          )}
          <Divider />
          {toggle === "desktop app" ? (
            <ToggleButton
              active
              value="desktop app"
              onClick={() => setToggle("desktop app")}
            >
              DESKTOP APPS
            </ToggleButton>
          ) : (
            <ToggleButton
              value="desktop app"
              onClick={() => setToggle("desktop app")}
            >
              DESKTOP APPS
            </ToggleButton>
          )}
          <Divider />
          {toggle === "springboot app" ? (
            <ToggleButton
              active
              value="springboot app"
              onClick={() => setToggle("springboot app")}
            >
              SPRING BOOT APPS
            </ToggleButton>
          ) : (
            <ToggleButton
              value="springboot app"
              onClick={() => setToggle("springboot app")}
            >
              SPRING BOOT APPS
            </ToggleButton>
          )}
          <Divider />
          {toggle === "machine learning" ? (
            <ToggleButton
              active
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButton>
          ) : (
            <ToggleButton
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButton>
          )}
        </ToggleButtonGroup>

        <CardContainer>
          {toggle == "all" && projects.map((project,index)=>(
            <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
          ))}
          {projects.filter((item)=> item.category === toggle).map((project,index)=>(
            <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

Projects.propTypes = {
  openModal: PropTypes.object,
  setOpenModal: PropTypes.func,
};

export default Projects;