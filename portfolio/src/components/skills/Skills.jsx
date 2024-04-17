import { Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from "./SkillStyle";
import { skills } from "../../Data/constansts";

function Skills() {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of the skills that I have acquired over the years and I am still learning new things every day.
        </Desc>
        <SkillsContainer>
          {skills.map((skill, index)=>(
            <Skill key={index}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, index)=>(
                  <SkillItem key={index}>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
}

export default Skills;
