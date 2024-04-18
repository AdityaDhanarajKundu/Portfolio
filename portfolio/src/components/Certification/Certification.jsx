import { Container, Wrapper, Title, Desc, TimelineSection } from "./CertiStyled";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CertificateCard from "../Cards/Certificate/CertificateCard";
import { certifications } from "../../Data/constansts";

function Certification() {
  return (
    <Container id="certification">
      <Wrapper>
        <Title>My Certificates</Title>
        <Desc>
          These are some of the relevant certificates that I have achieved so
          far.
        </Desc>
        <TimelineSection>
          <Timeline>
            {certifications.map((certification, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== certifications.length - 1 && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>

                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <CertificateCard certificate={certification}/>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
}

export default Certification;