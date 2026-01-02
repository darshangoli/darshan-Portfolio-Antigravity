import fitnessImg from '../assets/projects/fitness-tracker.png';
import cafeteriaImg from '../assets/projects/smart-cafeteria.png';
import reportImg from '../assets/projects/report-service.png';

export const content = {
  profile: {
    name: "Goli Satya Darshan",
    title: "Oracle Certified Java Programmer & Full-Stack Developer",
    summary: "I am an Oracle certified Java Programmer and results-driven Software Developer skilled in backend and full-stack development. I excel at turning complex requirements into efficient, reliable solutions and bring strong ownership, adaptability, and a problem-solving mindset to deliver scalable, high-quality software.",
    socials: {
      linkedin: "https://www.linkedin.com/in/darshangoli/",
      github: "https://github.com/darshangoli",
      email: "mailto:satyadarshan4022@gmail.com"
    }
  },
  experience: [
    {
      role: "Associate Engineer",
      company: "Virtusa",
      location: "Bangalore",
      period: "Jan 2024 – Present",
      description: [
        "Contributed to Smart Cafeteria Seating that optimized seating management for Virtusa’s internal operations.",
        "Working on a client project with John Wiley, developing and maintaining RESTful services in a agile environment.",
        "Acquired hands-on experience in Spring-based dependency injection, efficient database querying, and end-to-end web development."
      ]
    },
    {
      role: "Full Stack Development Intern",
      company: "Virtusa",
      location: "Chennai",
      period: "May 2023 – Aug 2023",
      description: [
        "Worked closely with senior associates to understand business processes and project workflows.",
        "Developed Fitness Tracking Portal a web-based platform designed to help users monitor, manage, and improve their fitness and overall health being.",
        "Learned how projects are planned, tracked, and delivered in the Software Development Life Cycle (SDLC)."
      ]
    }
  ],
  skills: {
    languages: ["Java", "Python"],
    frontend: ["HTML", "CSS", "JavaScript", "Angular JS", "React"],
    backend: ["Spring Boot", "Spring Data", "Spring MVC", "REST APIs", "GenAI", "WebClient", "Microservices", "Kafka", "AWS"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    tools: ["Git", "GitHub", "Jenkins"],
    testing: ["JUnit", "Mockito"]
  },
  projects: [
    {
      title: "Fitness Tracking Portal",
      role: "Developer",
      image: fitnessImg,
      techStack: ["Java", "Spring Boot", "PostgreSQL", "React", "GenAI"],
      description: "Developed a comprehensive web-based fitness platform to help users track workouts, set fitness goals, monitor progress, and receive personalized nutrition recommendations for a healthier lifestyle.",
      points: [
        "Designed and developed user-facing modules including login/registration, dashboard, workout history and goal tracking.",
        "Implemented backend services to manage user profiles, workout data, fitness goals, and progress metrics.",
        "Built interactive dashboards with visual insights to track calories burned, workout duration, and fitness trends.",
        "Integrated Google Gemini API to provide AI-driven workout and nutrition recommendations based on user goals and activity data."
      ],
      achievements: "Delivered a platform for fitness tracking that improved user engagement through personalized insights and structured workout planning."
    },
    {
      title: "Smart Cafeteria Seating",
      role: "Developer",
      image: cafeteriaImg,
      techStack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Angular", "Hibernate", "JUnit"],
      description: "Developed a smart cafeteria reservation system to enable employees to book tables and chairs for specific time slots, optimizing seating, minimizing overcrowding, and enhancing the overall dining experience.",
      points: [
        "Designed an aerial layout of cafeteria tables and chairs using Angular JS.",
        "Developed backend logic to handle table reservations, time slot management, and conflict resolution.",
        "Implemented concurrency control mechanisms to maintain data consistency during simultaneous booking operations.",
        "Wrote JUnit tests for controllers, services, models, and repositories to ensure code reliability."
      ],
      achievements: "Streamlined seating reservations, reducing overcrowding and improving employee satisfaction."
    },
    {
      title: "Report Generation Service – John Wiley",
      role: "Developer",
      image: reportImg,
      techStack: ["Java", "Spring Boot", "JPA Repository", "Kafka", "WebClient", "SQL", "React", "Hibernate"],
      description: "Working on a client project focused on generating and managing business reports through scalable microservices.",
      points: [
        "Developed REST APIs to handle report generation and data retrieval efficiently.",
        "Implemented Kafka listeners to consume messages and trigger report workflows.",
        "Queried accurate data using JPA Repository as the DAO layer for efficient database communication.",
        "Worked in an Agile environment, collaborating with the team to ensure reliable performance and data consistency."
      ],
      achievements: "Improved data accuracy and report delivery time through optimized queries."
    }
  ],
  certifications: [
    "Oracle Certified Associate, Java SE 8 Programmer",
    "AWS Certified Cloud Practitioner"
  ],
  education: [
    {
      institution: "GITAM University",
      degree: "B.Tech in Computer Science and Engineering",
      score: "CGPA: 7.96/10",
      period: "2019 – 2023"
    },
    {
      institution: "Tirumala Junior College",
      degree: "Intermediate",
      score: "CGPA: 9.46/10",
      period: "2017 – 2019"
    },
    {
      institution: "Tirumala High School",
      degree: "SSC (10th)",
      score: "CGPA: 9.70/10",
      period: "2016 – 2017"
    }
  ]
};
