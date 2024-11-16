import orion from "../assets/projects/orion.png";
import pingpong from "../assets/projects/pingpong.png";
import demonhacks from "../assets/projects/demonhacks.png";
import opg from "../assets/projects/opg.png";
import resume from "../assets/projects/resume.jpg";

export const HERO_CONTENT = `I'm a passionate full stack developer who enjoys creating fun, interactive user experiences. With nearly a decade of programming experience, I have honed my skills in front-end technologies like React, as well as back-end technologies like Python Flask, MySQL, and SQLite. My goal is to leverage my expertise to tackle complex problems with robust solutions and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I'm currently a full-time developer at Epic Systems where I work on MyChart, Epic's patient portal, to improve the patient experience. I began programming in high school after enrolling in an introductory Java course and I've been passionate about programming ever since. I deeply enjoy the problem solving nature of the field and find joy in creating rich experiences for others to enjoy. In my free time, I develop Unity games and web apps which give me exposure to new tech stacks and an opportunity to practice various software development patterns.`;

export const EXPERIENCES = [
  {
    year: "July 2021 - Present",
    role: "Full Stack Developer",
    company: "Epic Systems Corporation",
    description: `Developed and maintained healthcare software, such as MyChart and Hyperspace, using React, JavaScript, C#, and Caché while adhering to modern software development best practices. Developed and debugged forms across both web and server infrastructure to improve the patient questionnaire experience. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["React", "JavaScript", "C#", "Caché", "SQL"],
  },
  {
    year: "June 2020 - August 2020",
    role: ".Net Engineer Intern",
    company: "CSG International",
    description: `Maintained, tested, and documented CSG's Ascendon Solution using C#, SQL, Postman, and Kibana. Participated in Agile development methodologies and Scrum practices such as sprint planning and regular team retrospectives. Automated the creation of UML diagrams using C# and PlantUML to increase visibility and understanding.`,
    technologies: ["C#", "SQL", "Postman", "Kibana", "PlantUML"],
  },
  {
    year: "June 2019 - August 2019",
    role: "IT Security Intern",
    company: "ABN AMRO Clearing Chicago",
    description: `Aided the cyber security team in asset vulnerability remediation by initiating the removal of unnecessary software from systems across the IT department. Developed and debugged PowerShell scripts to automate routine tasks such as comparing monthly high privileged account access reports.`,
    technologies: ["PowerShell", "Excel"],
  },
];

export const PROJECTS = [
  {
    title: "One Piece Episode Guesser",
    link: "https://www.onepieceguesser.com/",
    image: opg,
    description:
      "An interactive web app where One Piece fans can test their knowledge by guessing the episode number from a single frame of animation.",
    technologies: ["PythonFlask", "CSS", "JavaScript", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: resume,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Project Orion",
    link: "https://brake-stomper.itch.io/project-orion",
    image: orion,
    description:
      "A top-down 2D space shooter where players must defend the ARK from waves of aliens and incoming asteroids.",
    technologies: ["Unity", "C#"],
  },
  {
    title: "Ping Pong!",
    link: "https://github.com/BD227/PongGameJS",
    image: pingpong,
    description:
      "My very own version of the iconic PONG with a twist! A variety of settings are available to spice things up.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "TreeLine Chicago",
    link: "https://github.com/lucianamendezg/treeline-chicago",
    image: demonhacks,
    description:
      "As part of DePaul's 24-hour hackathon, Demon Hacks, I collaborated with a group of students to develop a mobile app that incentivizes users to travel Chicago via public transit in order to reduce the city’s carbon footprint.",
    technologies: ["React", "TypeScript", "JavaScript", "JSON"],
  },
];

export const CONTACT = {
  address: "Verona, WI 53593",
  phoneNo: "+1 (708) 205-4192",
  email: "Brandon.Dilallo@gmail.com",
};
