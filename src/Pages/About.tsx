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
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-offset="0"
            data-aos-once="true"
          >
            About<label>.</label>
          </StyledMainHeader>
          <StyledHeader
            data-aos="fade"
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
              comfortable working across the full SDLC—from UI implementation
              using Figma/Zeplin designs, to API integrations (REST, GraphQL),
              testing (Jest, Cypress), and automation using Groovy and Impex on
              HAC. I enjoy solving problems, improving team processes, and
              continuously learning across both front-end and back-end tech
              stacks.
            </div>
          </StyledHeader>
          <SectionLabel sectionTitle="TECH STACK" />
          <StyledFlexButton
            data-aos="fade"
            data-aos-delay="200"
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
                data-aos="fade"
                data-aos-delay="200"
                data-aos-once="true"
              >
                {filteredAbout?.skills.map(({ title, image }) => (
                  <Card
                    key={title}
                    title={title}
                    image={image}
                    subtitle="INTERMIDIATE"
                    isOnlyTitle
                  />
                ))}
              </StyledCardContainer>
            </Sample>
          )}
        </StyledBox>
      </StyledContainer>
    </React.Fragment>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const StyledMainHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #fffffe;
  flex: 1;
  padding-bottom: 20px;
  margin: 0;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  font-size: 80px;
  font-weight: bolder;
  letter-spacing: 3px;

  label {
    margin-left: 2px;
    color: #00ffff;
    font-size: 80px;
  }

  &::after {
    content: "";
    flex-grow: 1;
    height: 2px;
    margin-left: 15px;
    background: #ffeee4;
    opacity: 0.3;
    max-width: auto;
  }
`;

const StyledBox = styled.div`
  padding: 0 30px 0 30px;
  margin: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Sample = styled.div`
  padding: 0;
  margin: 0;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0
  margin: 0;
  align-items: center;
  box-sizing: border-box;


  img {
    flex: 1;
    height: 400px;
    width: 400px;
    object-fit: contain;
  }

  .text {
    flex: 1;
    min-width: 250px;
    font-size: 18px;
    line-height: 1.6;
    color: #b0b0b0; 
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 12px;
    box-sizing: border-box;
    text-align: center;

    img {
      width: 300px;
      height: 300px;
      justify-content: center;
      align-items: center;
    }
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: left;
  align-items: center;
`;

const StyledFlexButton = styled.div`
  display: flex;
  justify-content: left;
  padding: 20px 0 20px 0;
  gap: 1rem;
  flex: 1;
`;
