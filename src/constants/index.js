import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    php,
    bangkit,
    pusu,
    pkp,
    digilokal,
    pusuweb,
    snapgram,
    unetstore,
    threejs,
    creator,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Engineer",
      icon: creator,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "php",
      icon: php,
    },
  ];
  
  const experiences = [
    {
      title: "Bangkit Academy Cloud Computing From GOTO",
      company_name: "Dicoding Indonesia",
      icon: bangkit,
      iconBg: "#DC143C",
      date: "February 2023 - August 2023",
      points: [
        "Developing and maintaining Cloud Services using Google Cloud and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Help Make a Restful API for the application that will be made.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "President University Student Union",
      icon: pusu,
      iconBg: "#F0FFFF",
      date: "January 2023 - August 2023",
      points: [
        "Developing and maintaining web applications using PHP Native and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring browser compatibility.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Prawathiya Karsa Pradiptha",
      icon: pkp,
      iconBg: "#F0FFFF",
      date: "September 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "DigiLokal",
      description:
        "Digilokal base app connects SMEs with digital talents, providing cost-effective marketing solutions. We empower SMEs to compete in the digital age and address the needs of digital talents in finding job opportunities.",
      tags: [
        {
          name: "Kotlin",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "blue-text-gradient",
        },
      ],
      image: digilokal,
      source_code_link: "https://github.com/DigiLokal",
    },
    {
      name: "Snapgram",
      description:
        "Web application that makes cloning from Instagram, with features that are almost the same as Instagram.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "AppwriteCloud",
          color: "pink-text-gradient",
        },
        {
          name: "TailwindScss",
          color: "blue-text-gradient",
        },
      ],
      image: snapgram,
      source_code_link: "https://github.com/Joyboy04/snapgram",
    },
    {
      name: "UNET Store",
      description:
        "This is an e-commerce application that I made, this app was a project when I was in collage for the first time using native PHP, CSS, and MySQL",
      tags: [
        {
          name: "php",
          color: "purple-text-gradient",
        },
        {
          name: "mysql",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: unetstore,
      source_code_link: "https://github.com/Joyboy04/UNET-Store",
    },
    {
      name: "Pusu Website",
      description:
        "The PUSU website serves as an introduction to Pusu and a resource for information on clubs and organizations under Pusu, as well as current activities.",
      tags: [
        {
          name: "php",
          color: "purple-text-gradient",
        },
        {
          name: "mysql",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: pusuweb,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };