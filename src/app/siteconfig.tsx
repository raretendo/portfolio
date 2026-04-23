"use client";

import Link from "next/link";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { FaClock, FaReact } from "react-icons/fa";
import { FaDiscord, FaDownload, FaGitAlt, FaGithub, FaLocationDot, FaNodeJs, FaSquareXTwitter } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiDotnet, SiLuau, SiMongodb, SiPrisma, SiShadcnui, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import Time from "./components/Time";

export const siteConfig = {
  adjectives: [
    "ambitious",
    "dependable",
    "proactive",
    "versatile",
    "intelligent",
    "trainable",
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
      content: "Kingston, Jamaica",
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
    },
    {
      key: "resume",
      content: (
        <Link
          href="https://docs.google.com/document/d/1WBU5I_YAvPIATr7k-XWyGBUcq-h62ONry82wbnHh8xw/edit?usp=sharing"
          className="text-blue-500"
          target="_blank"
        >
          View Resume
        </Link>
      ),
      icon: <FaDownload />
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
      icon: <SiDotnet />,
      name: ".NET"
    },
    {
      icon: <FaReact color="#61dbfb" />,
      name: "React"
    },
    {
      icon: <SiTypescript color="#017acc" />,
      name: "TypeScript"
    },
    {
      icon: <SiLuau color="#017acc" />,
      name: "Luau"
    },
    {
      icon: <TbBrandCSharp color="#017acc" />,
      name: "C# / CSharp"
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
  ],

  projects: [
    {
      name: "My Portfolio Website",
      description: "This is the site you're viewing right now! I built it to showcase my projects. ",
      repoLink: "https://github.com/raretendo/portfolio",
      link: "https://raretendo.github.io/portfolio/",
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
      image: {
        src: "/img/task-manager.png",
        alt: "Task Manager Demo",
      },
      description: "A Trello clone - manage your tasks in an efficient manner and streamline your workload",
      repoLink: "",
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
      image: {
        src: "/img/custom-shell.png",
        alt: "Custom Shell Demo"
      },
      description:
        "A custom shell written in .NET 8, made to replicate the Bash shell/Windows Command Prompt. "
        + "Compatible with Windows & Linux-based Operating Systems. It was a collaborative group project for a university course",
      repoLink: "",
      link: "",
      technologies: [
        {
          icon: <SiDotnet />,
          name: ".NET"
        },
        {
          icon: <TbBrandCSharp />,
          name: "C#",
        },
        {
          icon: <FaGitAlt color="#f05133" />,
          name: "Git"
        },
      ]
    },
    {
      name: "Mining Mania",
      image: {
        src: "/img/mining-mania.png",
        alt: "Mining Mania Thumbnail"
      },
      description:
        "Face off against other players in a race to go deeper and score points in this racing party game!"
        + "Use items to improve your score or sabotage others!",
      repoLink: "",
      link: "https://www.roblox.com/games/17685184035/Mining-MANIA",
      technologies: [
        {
          icon: <SiLuau />,
          name: "Luau"
        },
        {
          icon: <FaGitAlt color="#f05133" />,
          name: "Git"
        }
      ]
    }
  ]
};