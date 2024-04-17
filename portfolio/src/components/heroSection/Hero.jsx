import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyled";
import Typewriter from "typewriter-effect";
import { Bio } from "../../Data/constansts";
import HeroBgAnimation from "../HeroBgAnimation/HeroBgAnimation";

function Hero() {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="_blank">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src="https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/334674572_1605373083301759_822714610745195265_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mG9GSMvvVaUAb7uaYb0&_nc_ht=scontent.fccu27-2.fna&oh=00_AfBLm-gXtQfM0_dTDcwfV5uTRJRTGfHga4VcDFMKhxr4xg&oe=662598BA" alt="hero" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
}

export default Hero;
