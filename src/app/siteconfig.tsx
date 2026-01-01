"use client"

import { BiLogoPostgresql } from "react-icons/bi";
import { DiJqueryLogo, DiMsqlServer } from "react-icons/di";
import { FaClock, FaReact } from "react-icons/fa";
import { FaBootstrap, FaDiscord, FaGitAlt, FaGithub, FaLocationDot, FaNodeJs, FaSquareXTwitter } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiDotnet, SiExpress, SiMongodb, SiPrisma, SiShadcnui, SiTypescript } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import Time from "./components/Time";

export const siteConfig = {
  adjectives: [
    "ambitious",
    "dependable",
    "proactive",
    "versatile",
    "motivated",
    "passionate",
    "strategic",
    "risk-seeking",
    "results-driven",
    "adaptable",
  ],

  cards: [
    {
      key: "location",
      content: "North America/Caribbean",
      icon: <FaLocationDot />,
    },
    {
      key: "occupation",
      content: "BSc in Computer Science Candidate",
      icon: <IoMdPerson />
    },
    {
      key: "time",
      content: <Time />,
      icon: <FaClock />
    }
  ],

  titles: [
    "Full-Stack Developer",
    "Desktop App Developer",
    "Game Developer"
  ],

  sections: [
    {
      id: "about-me",
      label: "About Me",
    },
    {
      id: "technologies",
      label: "Technologies",
    },
    {
      id: "projects",
      label: "Projects"
    }
  ],

  socials: [
    {
      name: "GitHub",
      link: "https://github.com/raretendo",
      icon: <FaGithub />
    },
    {
      name: "Discord",
      link: "https://discord.com/users/323920868944248834",
      icon: <FaDiscord />
    },
    {
      name: "Twitter/X",
      link: "https://twitter.com/Raretendoblox_",
      icon: <FaSquareXTwitter />
    }
  ],

  technologies: [
    {
      icon: <FaNodeJs color="#83ce27" />,
      name: "Node.js"
    },
    {
      icon: <RiNextjsFill className="text-foreground" />,
      name: "Next.js"
    },
    {
      icon: <FaReact color="#61dbfb" />,
      name: "React"
    },
    {
      icon: <RiTailwindCssFill color="#017acc" />,
      name: "Tailwind CSS"
    },
    {
      icon: <SiTypescript color="#017acc" />,
      name: "TypeScript"
    },
    {
      icon: <BiLogoPostgresql color="#2f6792" />,
      name: "PostgreSQL"
    },
    {
      icon: <DiMsqlServer className="text-foreground" />,
      name: "SQL Server"
    },
    {
      icon: <SiMongodb className="text-foreground" />,
      name: "MongoDB"
    },
    {
      icon: <FaGitAlt color="#f05133" />,
      name: "Git",
    },
    {
      icon: <SiPrisma className="text-foreground" />,
      name: "Prisma",
    },
    {
      icon: <SiShadcnui className="text-foreground" />,
      name: "shadcn/ui"
    },
    {
      icon: <SiExpress />,
      name: "Express.js"
    },
    {
      icon: <SiDotnet />,
      name: ".NET"
    },
  ],

  projects: [
    {
      name: "My Portfolio Website",
      image: "",
      description:
        "This is the site you're viewing right now! I built it to showcase my projects. "
        + "It was made using Next.js, Tailwind CSS, and shadcn/ui",
      repoLink: "https://github.com/raretendo/raretendo.github.io",
      link: "https://raretendo.github.io",
      technologies: [
        {
          icon: <SiTypescript color="#017acc" />,
          name: "Typescript"
        },
        {
          icon: <RiNextjsFill />,
          name: "Next.js"
        },
        {
          icon: <RiTailwindCssFill color="#017acc" />,
          name: "Tailwind CSS"
        }
      ]
    },
    {
      name: "TaskManager",
      image: "",
      description: "A Trello clone - manage your tasks in an efficient manner and streamline your workload",
      repoLink: "https://github.com/raretendo",
      link: "",
      technologies: [
        {
          icon: <SiTypescript color="#017acc" />,
          name: "Typescript"
        },
        {
          icon: <RiNextjsFill />,
          name: "Next.js"
        },
        {
          icon: <RiTailwindCssFill color="#017acc" />,
          name: "Tailwind CSS",
        },
        {
          icon: <SiShadcnui />,
          name: "shadcn/ui"
        },
        {
          icon: <SiPrisma />,
          name: "Prisma"
        },
        {
          icon: <BiLogoPostgresql color="#2f6792" />,
          name: "PostgreSQL"
        },
        {
          icon: <FaGitAlt color="#f05133" />,
          name: "Git",
        },
      ]
    },
    {
      name: "Custom Shell",
      image: "",
      description:
        "A custom shell written in .NET 8, made to replicate the Bash shell/Windows Cmd Line."
        + "Compatible with Windows & Linux. It was group project for a university course",
      repoLink: "https://github.com/raretendo",
      link: "",
      technologies: [
        {
          icon: <SiDotnet />,
          name: ".NET"
        },
        {
          icon: <FaGitAlt color="#f05133" />,
          name: "Git"
        }
      ]
    },
    {
      name: "Bakery E-commerce App",
      image: "",
      description:
        "An e-commerce app written for customers and staff of a bakery company to sell and manage their products easily. "
        + "It was a group project for a university course and it was made using ASP.NET Core MVC, EF Core, Bootstrap and jQuery",
      repoLink: "",
      link: "",
      technologies: [
        {
          icon: <SiDotnet />,
          name: ".NET"
        },
        {
          icon: <DiMsqlServer className="text-foreground" />,
          name: "SQL Server"
        },
        {
          icon: <VscAzure className="text-foreground" />,
          name: "Azure"
        },
        {
          icon: <FaGitAlt color="#f05133" />,
          name: "Git"
        },
        {
          icon: <FaBootstrap color="#4c0bce" />,
          name: "Bootstrap"
        },
        {
          icon: <DiJqueryLogo color="#21609b" />,
          name: "jQuery"
        }
      ]
    }
  ]
}