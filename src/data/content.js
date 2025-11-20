export const content = {
  profile: {
    name: "Software Developer",
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
        "Developed some capstone projects in Core Java, Java 8 features, React, Spring Framework, and SQL.",
        "Learned how projects are planned, tracked, and delivered in the Software Development Life Cycle (SDLC)."
      ]
    }
  ],
  skills: {
    languages: ["Java", "Python"],
    frontend: ["HTML", "CSS", "JavaScript", "Angular JS", "React"],
    backend: ["Spring Boot", "Spring Data", "Spring MVC", "REST APIs", "Maven", "Hibernate", "Microservices", "Kafka", "AWS"],
    databases: ["MySQL", "PostgreSQL"],
    tools: ["Git", "GitHub", "SonarQube"],
    testing: ["JUnit", "Mockito"]
  },
  projects: [
    {
      title: "Smart Cafeteria Seating",
      role: "Developer",
      techStack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Angular", "Hibernate", "JUnit"],
      description: "Developed a smart cafeteria reservation system to enable employees to book tables and chairs for specific time slots, optimizing seating, minimizing overcrowding, and enhancing the overall dining experience.",
      points: [
        "Designed an aerial layout of cafeteria tables and chairs using Angular JS.",
        "Developed backend logic to handle table reservations, time slot management, and conflict resolution.",
        "Implemented transaction management to ensure data consistency during concurrent booking operations.",
        "Wrote JUnit tests for controllers, services, models, and repositories to ensure code reliability."
      ],
      achievements: "Streamlined seating reservations, reducing overcrowding and improving employee satisfaction."
    },
    {
      title: "Report Generation Service – John Wiley",
      role: "Developer",
      techStack: ["Java", "Spring Boot", "JPA Repository", "Kafka", "SQL", "React", "Hibernate"],
      description: "Working on a client project focused on generating and managing business reports through scalable microservices.",
      points: [
        "Developed REST APIs to handle report generation and data retrieval efficiently.",
        "Implemented Kafka listeners to consume messages and trigger report workflows.",
        "Queried accurate data from SQL databases using JPA Repository as the DAO layer and Hibernate as an ORM.",
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
      degree: "B.Tech in Computer Science",
      score: "CGPA: 7.96/10"
    },
    {
      institution: "Tirumala Junior College",
      degree: "Intermediate",
      score: "CGPA: 9.46/10"
    },
    {
      institution: "Tirumala High School",
      degree: "SSC (10th)",
      score: "CGPA: 9.7/10"
    }
  ]
};
