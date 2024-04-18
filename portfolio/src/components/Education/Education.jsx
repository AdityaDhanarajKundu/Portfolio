import { Container, Wrapper, Title, Desc, TimelineSection } from "./EducationStyle";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education, certifications } from "../../Data/constansts";
import EducationCard from "../Cards/Education/EducationCard";

function Education() {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>My Educational Details are as follows :</Desc>

        <TimelineSection>
          <Timeline>
            {education.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={item} />
                </TimelineContent>

                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== certifications.length && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
}

export default Education;