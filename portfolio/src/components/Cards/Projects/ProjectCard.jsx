import { Button, Card, Image, Tags, Tag, Details, Title, Date, Description, Members, Avatar } from "./ProjectCardStyle";
import PropTypes from "prop-types";

function ProjectCard({project, openModal, setOpenModal}) {
  return (
    <Card onClick={()=> {
      setOpenModal({ state: true, project: project });
    }}>
      <Image src={project?.image}/>
      <Tags>
        {project?.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project?.title}</Title>
        <Date>{project?.date}</Date>
        <Description>{project?.description}</Description>
      </Details>
      {/* <Members>
        {project?.members.map((member, index) => (
          <Avatar key={index} src={member}/>
        ))}
      </Members> */}
    </Card>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object,
  setOpenModal: PropTypes.func,
  openModal: PropTypes.object,
};

export default ProjectCard;