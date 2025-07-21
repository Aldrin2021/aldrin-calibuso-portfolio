import React from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { ReactComponent as LinkedInIcon } from "../Images/Socials/linkedin.svg";
import { ReactComponent as GithubIcon } from "../Images/Socials/github.svg";
import { EmailModal } from "../Modal/EmailModal";
import Lottie from "lottie-react";
import loadingDots from "./loading-dots.json";

export const Contact: React.FC = () => {
  const form = React.useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_rplotds",
        "template_scjzk4r",
        form.current,
        "Habt0-Y2FSIZRfH2X"
      )
      .then(
        () => {
          setSuccess(true);
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const handleInputField = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    const value = (event.target as HTMLInputElement).value;
    const isSpaceAndLetter = /^[a-zA-Z ]$/.test(key);
    const isOneDash = key === "-" && !value.includes("-");

    const controlKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "ArrowRight",
      "ArrowLeft",
    ];
    if (!isSpaceAndLetter && !isOneDash && !controlKeys.includes(key)) {
      event.preventDefault();
    }
  };

  return (
    <React.Fragment>
      <StyledContainer
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="0"
        data-aos-once="true"
      >
        <StyledBox>
          <StyledMainHeader>
            <span>Let's Connect</span>
          </StyledMainHeader>

          <FormWrapper>
            <StyledForm ref={form} onSubmit={sendEmail}>
              <p>
                If you have any inquiries or just want to say Hi, please use the
                contact form!
              </p>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="contact-name"
                onKeyDown={handleInputField}
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <textarea name="message" placeholder="Your Message" required />
              <button type="submit" id="email-btn">
                {loading ? (
                  <LottieWrapper>
                    <Lottie
                      animationData={loadingDots}
                      loop={true}
                      autoPlay
                      style={{ width: "150px", height: "25px" }}
                    />
                  </LottieWrapper>
                ) : (
                  "Send Email"
                )}
              </button>
            </StyledForm>
          </FormWrapper>

          <StyledSection>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/aldrin-calibuso/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Aldrin2021"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                </a>
              </li>
            </ul>
          </StyledSection>
        </StyledBox>
      </StyledContainer>

      {success && (
        <EmailModal children={success} onClose={() => setSuccess(false)} />
      )}
    </React.Fragment>
  );
};

const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const StyledBox = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    height: auto;
    padding: 5px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 50px;
  }
`;

const StyledMainHeader = styled.div`
  display: flex;
  align-items: center;
  color: #fffffe;
  font-size: clamp(2rem, 6vw, 5rem);
  font-weight: 900;
  padding-bottom: 20px;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
  justify-content: center;

  span {
    margin: 0 1rem;
    white-space: nowrap;
    z-index: 1;
  }

  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    height: 2px;
    margin-left: 15px;
    background: #ffeee4;
    opacity: 0.3;
  }

  @media (max-width: 480px) {
    &::before,
    &::after {
      display: none;
    }

    span {
      margin: 0;
    }
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  width: 100%;

  p {
    color: #ebecf3;
    font-size: 0.95rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #666;
    font-size: 1rem;
    resize: none;
    color: #ebecf3;
    background: #1e1e1e;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border: 1px solid #00ffff;
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill {
    box-shadow: 0 0 0px 1000px #1e1e1e inset;
    -webkit-text-fill-color: #ebecf3;
    transition: background-color 5000s ease-in-out 0s;
  }

  button {
    width: 100%;
    padding: 12px;
    background: none;
    color: white;
    font-size: 1rem;
    border: 1px solid #00ffff;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #00ffff;
      color: #000;
      font-weight: 600;
    }
  }
`;

const StyledSection = styled.div`
  width: 100%;
  margin-top: 25px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    list-style: none;
    padding: 0;
    margin: 0;

    pointer-events: bounding-box;

    :hover {
      transition: fill 0.2s ease-in;
      fill: #00ffff;
    }

    @media (max-width: 480px) {
      gap: 1rem;
    }
  }
`;

const LottieWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
`;
