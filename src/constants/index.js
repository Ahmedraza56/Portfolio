import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    laravel,
    php,
    linux,
    vorker,
    smi,
    pethouse,
    server,
    screen,
    linuxsvg,
    figmasvg,
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front-End Web Dev",
      icon: screen,
    },
    {
      title: "Back-End Developer",
      icon: server,
    },
    {
      title: "Linux",
      icon: linuxsvg,
    },
    {
      title: "Figma",
      icon: figmasvg,
    },
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "linux",
      icon: linux,
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
      name: "laravel",
      icon: laravel,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "DIDx",
      company_name: "DID Number Wholesaler",
      icon: php,
      iconBg: "#E6DEDD",
      points: [
        "Maintain error logs for effective issue tracking and analysis",
        "Monitor API integration errors for smooth communication",
        "Optimize Cron job code for efficiency and timely tasks.",
        "Handle database errors to maintain data integrity",
      ],
    },
    {
      title: "Virtual Phone Line",
      company_name: "VOIP Numbers Retailers",
      icon: laravel,
      iconBg: "#E6DEDD",
      points: [
        "Developed a Virtual Phone Line website using Laravel",
        "Integrated APIs for number listing and buying functionality",
        "Designed database schema for the application"
      ],
    },
    {
      title: "Vorker",
      company_name: "HR Company",
      icon: php,
      iconBg: "#E6DEDD",
      points: [
        "Created PHP-based HR system with full admin control and user access",
        "Enabled employee and job seeker interaction for inquiries and applications.",
        "Implemented MCQ tests for skill assessment",
        "Enabled certificate issuance based on test performance"
      ],
    },
    {
      title: "Social Media Incubator",
      company_name: "Non-Profit Organization",
      icon: php,
      iconBg: "#E6DEDD",
      points: [
        "Created PHP admin panel for LMS website",
        "Students can fill forms and access reports",
        "Staff can manage details like petty cash and podcasts",
        "Admins oversee accounts and system operations"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
      name: "Asma Naseer",
      designation: "Chief Technology Officer",
      company: "DIDx",
    },
    {
      testimonial:
        "You are such a great developer I have ever met. You have all qualities and skills that a developer can have !",
      name: "Anas Asif",
      designation: "Founder",
      company: "Neon Genius",
      image: "https://wow360.pk/wp-content/uploads/2023/09/Anas-Asif.jpg",
    },
    {
      testimonial:
        "His brilliance inspires. Working with him was delightful, ensuring a successful future in tech.",
      name: "Abdul Qadir Azam",
      designation: "Founder",
      company: "Thread verve",
      image: "https://avatars.githubusercontent.com/u/152429961?v=4",
    },
  ];
  
  const projects = [
    {
      name: "Vorker",
      description:
        "This website is made using Utilized HTML, CSS, Bootstrap, and Core PHP to ensure seamless user experience and efficient management for the HR company's website",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "blue-text-gradient",
        }
      ],
      image: vorker,
      link: "https://vorker.co/",
    },
    {
      name: "Social Media Incubator",
      description:
      "Transformed into an LMS website for social media incubator staff and students. Developed with HTML, CSS, Bootstrap, and PHP for the admin site.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Boostrap",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "blue-text-gradient",
        }
      ],
      image: smi,
      link: "https://login.socialmediaincubator.co/admin/login.php",
    },
    {
      name: "Pet House",
      description:
      "This static website is designed for a pet house. Crafted with HTML, CSS, Bootstrap, and JavaScript, it was meticulously developed in Aptech Vision.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
        {
          name: "Boostrap",
          color: "blue-text-gradient",
        }
      ],
      image: pethouse,
      link: "https://pethousee.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };