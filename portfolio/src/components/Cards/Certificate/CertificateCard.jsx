import { Document, Description, Span, Card, Top, Image, Body, Title, Company, Date, Skills, ItemWrapper, Skill } from "./CertificateCardStyle";
import PropTypes from "prop-types";

function CertificateCard({certificate}) {
  function handleClick(){
    window.open(certificate.credential, "_blank", "noopener,noreferrer");
  }   
    
  return (
    <Card onClick={handleClick}>
      <Top>
        <Image src={certificate.img} />
        <Body>
          <Title>{certificate.title}</Title>
          <Company>{certificate.organization}</Company>
          <Date>{certificate.date}</Date>
        </Body>
      </Top>

      <Description>
        {certificate?.desc && <Span>{certificate?.desc}</Span>}
        {certificate?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {certificate?.skills?.map((skill, index) => (
                  <Skill key={index}>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
    </Card>
  );
}

CertificateCard.propTypes = {
    certificate: PropTypes.object.isRequired,
};

export default CertificateCard;