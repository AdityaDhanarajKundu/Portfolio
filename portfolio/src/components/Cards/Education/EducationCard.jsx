import { Document, Description, Span, Card, Top, Image, Body, Name, Degree, Date, Grade } from "./EducationCardStyle";
import PropTypes from "prop-types";

function EducationCard({education}) {
  return (
    <Card>
      <Top>
        <Image src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b>Grade: </b>
        {education.grade}
      </Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
}

EducationCard.propTypes = {
    education: PropTypes.object.isRequired,
};

export default EducationCard;