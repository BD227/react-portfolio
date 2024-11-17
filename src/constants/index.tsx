import orion from "../assets/projects/orion.png";
import pingpong from "../assets/projects/pingpong.png";
import demonhacks from "../assets/projects/demonhacks.png";
import opg from "../assets/projects/opg.png";
import resume from "../assets/projects/resume.jpg";

export const HERO_CONTENT = `I am a dedicated full-stack developer with a passion for building engaging and interactive user experiences. With nearly a decade of programming expertise, I have developed strong proficiency in front-end technologies like React and back-end frameworks such as Python Flask, complemented by database management with MySQL and SQLite. I thrive on solving complex challenges through innovative, scalable solutions and am committed to delivering exceptional user experiences that leave a lasting impact.`;

export const ABOUT_TEXT = `I am a full-time developer at Epic Systems, where I work on MyChart, Epic's patient portal, to enhance the patient experience. In this role, I take ownership of the entire project lifecycle, from conception to deployment. I design solutions that align with business goals and customer expectations, plan large-scale projects using Gantt charts and Scrum methodologies, and deliver results within strict timelines.

As a full-stack developer, I contribute to both the front and back-end of projects, leveraging a tech stack that includes React, C#, AJAX, Cache, and Microsoft SQL Server. Beyond development, I have taken on leadership responsibilities, such as serving as the Fix Squad Lead, where I ran daily stand-ups, analyzed quality metrics, and ensured application stability. As a member of the Web Services Security Review Team, I review changes impacting user input and external web services to protect patient information and maintain application security standards.

My passion for programming began in high school, where I discovered the joy of problem-solving in an introductory Java course. Since then, I’ve been driven by the challenge of creating innovative solutions and rich experiences that make a tangible difference.

In my free time, I enjoy exploring new technologies by developing Unity games and web applications, which allow me to expand my skill set and practice diverse software development patterns.`;


export const EXPERIENCES = [
  {
    year: "July 2021 - Present",
    role: "Full Stack Developer",
    company: "Epic Systems Corporation",
    description: `Developed and maintained healthcare software solutions, including MyChart and Hyperspace, leveraging React, JavaScript, C#, and Caché, while adhering to modern software development best practices. Enhanced patient experiences by developing and debugging forms across web and server infrastructures, improving the usability and efficiency of patient questionnaires. Collaborated closely with stakeholders to define project requirements, establish priorities, and create realistic project timelines. Ensured quality and reliability through rigorous code reviews, automated testing, and troubleshooting critical production issues, resulting in more stable and user-friendly applications.`,
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
    link: "https://brandon-dilallo.vercel.app/",
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
