// Placeholder content — replace every value in this file with your own.
import avatarImg from "../assets/profileimg.jpeg";

export const profile = {
  name: "Karan Singh",
  greeting: "Hello there !! it's me...",
  role: "Software Engineer & Full-Stack Developer",
  subrole: "Computer Science undergraduate at NIT Raipur",
  avatarUrl: avatarImg,
  resumeUrl: "https://drive.google.com/file/d/1QJ9Jhp3CaOJS6FqLfkh6EE4rwNwM3TnK/view?usp=sharing",
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm a B.Tech in Computer Science Graduate from NIT Raipur. Gained hands-on experience as a Software Engineer Intern at UKG, contributing to ongoing development efforts and sharpening technical skills. Proficient in automation, cloud computing, and Linux, with a certified background in Deep Learning and TensorFlow development.",
    "My portfolio showcases web projects that highlight my proficiency in HTML, CSS, and JavaScript, along with frameworks like React and Node.js.",
    "Outside of code, I enjoy travel and I'm always looking for ways to combine them with what I build.",
  ],
  profiles: [
    { label: "LeetCode", href: "https://leetcode.com/u/Karan741187/" },
    { label: "GFG", href: "https://www.geeksforgeeks.org/profile/karan701eh?tab=activity" },
    { label: "GitHub", href: "https://github.com/Karan741187" },
  ],
};

export const education = [
  {
    school: "National Institute of Technology Raipur",
    degree: "B.Tech in Computer Science (2022 - 2026)",
    detail: "7.7 CPI",
    side: "left",
  },
  {
    school: "Delhi Public School Harni",
    degree: "Class 12th, CBSE",
    detail: "Percentage: 94.4%",
    side: "right",
  },
  {
    school: "Delhi Public School Harni",
    degree: "Class 10th, CBSE",
    detail: "Percentage: 89.8.0%",
    side: "left",
  },
];

export const skills = [
  {
    category: "Web Development",
    items: [
      { name: "HTML", level: "Experienced" },
      { name: "Tailwind CSS", level: "Experienced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
      { name: "Node.js", level: "Beginner" },
      { name: "Express.js", level: "Beginner" },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "C++", level: "Experienced" },
      { name: "DSA", level: "Experienced" },
      { name: "Java", level: "Intermediate" },
      { name: "Spring Boot", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "SQL", level: "Beginner" },
    ],
  },
];

export const projects = [
  {
    title: "Inventory App",
    description: "A simple Inventory App to track items in a shop",
    tags: ["React", "Tailwind", "FastAPI", "Python"],
    liveUrl: "https://inventoryfrontend-jiuc.onrender.com/",
    codeUrl: "https://github.com/Karan741187/InventoryFrontend",
  },
  {
    title: "Social Media Backend",
    description: "It is Backend App developed in Microservice architecture.",
    tags: ["Java","Spring Boot","Kafka","Neo4J"],
    liveUrl: "#",
    codeUrl: "https://github.com/Karan741187/SocialMediaBackend",
  },
  {
    title: "Portfolio",
    description: "My Portfolio Website",
    tags: ["React", "Javascript", "Tailwind CSS"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

export const contact = {
  email: "karan741187@gmail.com",
  linkedin: "https://www.linkedin.com/in/karan-singh-037194260/",
  github: "https://github.com/Karan741187",
};

export const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
