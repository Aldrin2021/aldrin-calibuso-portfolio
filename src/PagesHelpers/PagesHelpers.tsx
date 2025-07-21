import { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import typeScriptImage from "../Images/typescript.png";
import reactJSImage from "../Images/react.png";
import htmlImage from "../Images/html-five.png";
import javaScriptImage from "../Images/javascript.png";
import styledComponentsImage from "../Images/styled-component.png";
import scssImage from "../Images/scss.png";
import tailwindImage from "../Images/tailwind-css.png";
import eslintImage from "../Images/eslint.png";
import quoteImage from "../Images/quote-mark.svg";
import author1Img from "../Images/TestimonialAuthor/author-1.jpeg";
import author2Img from "../Images/TestimonialAuthor/author-2.jpeg";
import author3Img from "../Images/TestimonialAuthor/author-3.jpg";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

interface Section {
  id: string;
  label: string;
}

export const useSections = () => {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "sections"));
        const data = querySnapshot.docs.map((doc) => doc.data() as Section);
        setSections(data);
      } catch (err) {
        console.error("Error fetching sections: ", err);
      }
    };

    fetchSections();
  }, []);

  return sections;
};

type Skill = {
  title: string;
  image: string;
};

type AboutSection = {
  label: string;
  skills: Skill[];
};

export const useAbout = () => {
  const [about, setAbout] = useState<AboutSection[]>([]);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "about"));
        const data = querySnapshot.docs.map((doc) =>
          doc.data()
        ) as AboutSection[];
        setAbout(data);
      } catch (err) {
        console.error("Error fetching about: ", err);
      }
    };

    fetchAbout();
  }, []);

  return about;
};

export const about: AboutSection[] = [
  {
    label: "Frontend",
    skills: [
      { title: "React", image: reactJSImage },
      { title: "TypeScript", image: typeScriptImage },
      { title: "JavaScript", image: javaScriptImage },
      { title: "HTML 5", image: htmlImage },
      { title: "Styled Components", image: styledComponentsImage },
      { title: "SASS", image: scssImage },
      { title: "Tailwind CSS", image: tailwindImage },
      { title: "ESLint", image: eslintImage },
    ],
  },
  {
    label: "Backend",
    skills: [
      { title: "REST", image: "" },
      { title: "Node.js", image: "" },
      { title: "PHP", image: "" },
      { title: "Java", image: "" },
      { title: "MySQL", image: "" },
      { title: "GraphQL", image: "" },
      { title: "Firebase", image: "" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { title: "Git", image: "" },
      { title: "Github", image: "" },
      { title: "Bitbucket", image: "" },
      { title: "VS Code", image: "" },
      { title: "JetBrains IntelliJ", image: "" },
      { title: "JIRA", image: "" },
      { title: "Slack", image: "" },
    ],
  },
];

type Stack = {
  name: string;
};

type Stacks = {
  label?: string;
  stack: Stack[];
};

export const firstStack: Stacks[] = [
  {
    label: "one",
    stack: [
      { name: "Backoffice" },
      { name: "Amazon Web Services" },
      { name: "Salesforce" },
      { name: "SQL" },
      { name: "Troubleshooting" },
      { name: "JIRA" },
    ],
  },
  {
    label: "two",
    stack: [
      { name: "React" },
      { name: "Typescript" },
      { name: "Javascript" },
      { name: "GraphQL" },
      { name: "Node.js" },
      { name: "Styled Components" },
      { name: "Contentful" },
      { name: "Git" },
      { name: "Github" },
      { name: "Docker" },
      { name: "Agile" },
      { name: "JIRA" },
      { name: "VS Code" },
    ],
  },
  {
    label: "three",
    stack: [
      { name: "PHP" },
      { name: "Java" },
      { name: "Javascript" },
      { name: "Bootstrap" },
      { name: "MySQL " },
      { name: "SCSS" },
      { name: "Git" },
      { name: "Github" },
      { name: "VS Code" },
      { name: "Documentation" },
      { name: "SDLC" },
    ],
  },
];

type ExperienceSection = {
  label?: string;
  title: string;
  subtext: string;
  subtitle: string;
  description: string;
};

export const experiences: ExperienceSection[] = [
  {
    label: "one",
    title: "Accenture in the Philippines",
    subtext: "2024 - Current",
    subtitle: "SAP Hybris DevOps",
    description:
      "Oversaw daily SAP Hybris e-commerce operations, managed and prioritized support tickets, and collaborated with cross-functional technical teams to resolve platform, data, and integration issues. Actively monitored system performance, ensured timely issue resolution to minimize business impact, and contributed to continuous improvement initiatives for site stability and user experience.",
  },
  {
    label: "two",
    title: "Accenture in the Philippines",
    subtext: "2021 - 2024",
    subtitle: "Software Engineer",
    description:
      "Developed and optimized responsive, accessible web interfaces using React, TypeScript, and JavaScript; built scalable and reusable front-end components, implemented best practices for performance and maintainability, and collaborated within Agile teams to deliver high-quality features on time and in alignment with user needs and business goals.",
  },
  {
    label: "three",
    title: "Central Luzon State University",
    subtext: "S.Y 2015 - 2020",
    subtitle: "BS Information Technology",
    description:
      "Completed a 4-year degree in Information Technology with a focus on website development and hands-on experience through capstone projects for real clients.",
  },
];

type FeedbackSection = {
  image?: string;
  svg?: string;
  feedbackContent?: string;
  feedbackAuthor?: string;
  feedbackRole?: string;
};

export const feedback: FeedbackSection[] = [
  {
    image: author3Img,
    svg: quoteImage,
    feedbackContent:
      "Aldrin was tasked to urgently deliver the logo epic that requires immediate changes due to late discovery of the needed requirement. It was initially assessed that it was just a small effort given of the context of the requirement but design and acceptance process proves the challenges of progressing. He even had to improvise to assist in finalizing the design. In the end, he still was able to deliver the approved design on the required date. After then, in relation to this delivery, he again needed to stretch to learn  another backend system he never knew existed to include a missed requirement. He was resourceful enough to learn what he needs to deliver and again, the team was able to rely on Aldrin in completing the delivery on time.",
    feedbackAuthor: "Aiza I. Arellano",
    feedbackRole: "Program and Project Mgmt Manager",
  },
  {
    image: author1Img,
    svg: quoteImage,
    feedbackContent:
      "A great colleague, very helpful in times of need, always thirst for more.",
    feedbackAuthor: "Kim Asuncion",
    feedbackRole: "Quality Engineering Analyst",
  },
  {
    image: author2Img,
    svg: quoteImage,
    feedbackContent:
      "Despite the many challenges we've encountered, you’ve consistently added value to every deliverable. Your dedication and exemplary teamwork truly stand out—keep up the fantastic work!",
    feedbackAuthor: "Leidy E. M. Jimenez",
    feedbackRole: "Scrum Master Manager",
  },
];

const MOBILE_BREAKPOINT = 767;

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth <= MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const flipInX = keyframes`
  from {
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
  to {
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
