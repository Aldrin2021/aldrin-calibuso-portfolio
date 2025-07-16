import React from "react";
import { Card } from "../Card/Card";
import styled from "styled-components";
import { about } from "../PagesHelpers/PagesHelpers";
import { Button } from "../Button/Button";
import { SectionLabel } from "../SectionLabel/SectionLabel";

export const About: React.FC = () => {
  const [selectedRole, setSelectedRole] = React.useState<string | null>(
    "Frontend"
  );

  const filteredAbout = about.find((item) => item.label === selectedRole);

  const onClickHandler = (val: string) => {
    setSelectedRole(val);
    console.log(selectedRole);
  };

  React.useEffect(() => {
    if (selectedRole) {
      console.log(selectedRole);
    }
  }, [selectedRole]);

  return (
    <React.Fragment>
      <StyledContainer>
        <StyledBox>
          <StyledMainHeader
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="0"
            data-aos-once="true"
          >
            About<label>.</label>
          </StyledMainHeader>
          <StyledHeader
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <div className="text">
              I'm a detail-oriented Software Engineer with over 2 years of
              front-end experience and 1.5 years supporting SAP Hybris
              e-commerce operations. I specialize in building user-focused web
              applications using ReactJS, JavaScript, and TypeScript, and I have
              hands-on experience working in Agile teams on global projects.
              <br />
              <br />
              In addition to front-end development, I’ve also provided L2
              support for complex platforms like SAP Hybris, handling issue
              triaging, system monitoring, and integration troubleshooting. I’m
              comfortable working across the full Agile—from UI implementation
              using Figma/Zeplin designs, to API integrations (REST, GraphQL),
              testing (Jest, Cypress), and automation using Groovy and Impex on
              HAC. I enjoy solving problems, improving team processes, and
              continuously learning across both front-end and back-end tech
              stacks.
            </div>
          </StyledHeader>

          <SectionLabel sectionTitle="TECH STACK" />

          <StyledFlexButton
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <Button
              onClick={() => onClickHandler("Frontend")}
              active={selectedRole === "Frontend"}
              isRole={true}
            >
              Frontend
            </Button>
            <Button
              onClick={() => onClickHandler("Backend")}
              active={selectedRole === "Backend"}
              isRole={true}
            >
              Backend
            </Button>
            <Button
              onClick={() => onClickHandler("Tools")}
              active={selectedRole === "Tools"}
              isRole={true}
            >
              Tools
            </Button>
          </StyledFlexButton>

          {filteredAbout && (
            <Sample key={filteredAbout.label}>
              <StyledCardContainer
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-offset="0"
                data-aos-once="true"
              >
                <StyledFlex>
                  {filteredAbout?.skills.map(({ title, image }) => (
                    <Card
                      key={title}
                      title={title}
                      image={image}
                      subtitle="INTERMIDIATE"
                      isOnlyTitle
                    />
                  ))}
                </StyledFlex>
              </StyledCardContainer>
            </Sample>
          )}
        </StyledBox>
      </StyledContainer>
    </React.Fragment>
  );
};

// Styled Components

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  height: auto;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    height: auto;
    padding: 5px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 20px;
  }
`;

const StyledMainHeader = styled.div`
  display: flex;
  align-items: center;
  color: #fffffe;
  width: 100%;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  padding-bottom: 20px;
  flex-wrap: wrap;

  label {
    margin-left: 5px;
    color: #00ffff;
    font-size: inherit;
  }

  &::after {
    content: "";
    flex-grow: 1;
    height: 2px;
    margin-left: 15px;
    background: #ffeee4;
    opacity: 0.3;
  }
`;

const StyledBox = styled.div`
  padding: 0 30px;
  margin: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    padding: 0 10px;
    margin: 20px 0;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  text-align: justify;

  .text {
    flex: 1 1 300px;
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.7;
    color: #b0b0b0;
  }

  img {
    flex: 1 1 300px;
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .text {
      width: 100%;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`;

const StyledFlexButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
  padding: 20px 0;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  min-height: 110px;
  height: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-bottom: 110px;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const Sample = styled.div`
  margin-top: 1.5rem;
`;
