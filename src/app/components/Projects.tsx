import { Project } from "@/lib/types";
import { siteConfig } from "../siteconfig";
import SectionLabel from "./SectionLabel";
import { FaGithub, FaLink } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="section">
      <SectionLabel label="Projects" id="projects" />
      <div className="flex flex-col gap-8 lg:items-start items-center">
        {siteConfig.projects.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="transition-all duration-300 hover:scale-105 w-3/4 rounded-md bg-background dark:bg-primary overflow-hidden shadow-lg dark:shadow-[#ffffff1a] shadow-[#0000001a]">
      <a href={project.link || project.repoLink} target="_blank">
        <div className="bg-gray-700 w-full aspect-video" />
      </a>
      <div className="p-4 flex flex-col gap-2">
        <strong className="tracking-wider text-lg">{project.name}</strong>
        <p className="text-sm">{project.description}</p>
        <ProjectLink link={project.link} icon={<FaLink />} label="View" />
        <ProjectLink link={project.repoLink} icon={<FaGithub />} label="View Repository" />
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(techEntry => (
            <ProjectBadge key={techEntry.name} {...techEntry} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectLink({
  link,
  icon,
  label
}: {
  link: string,
  icon: React.ReactElement,
  label: string,
}) {
  if (link.length == 0) { return null }
  return (
    <a href={link} target="_blank" className="flex flex-wrap items-center gap-2 text-blue-500">
      {icon}
      {label}
      <FaExternalLinkAlt className="text-xs" />
    </a>
  )
}

function ProjectBadge({
  name,
  icon
}: {
  name: string,
  icon: React.ReactElement
}) {
  return (
    <div className="flex flex-wrap items-center bg-secondary p-2 gap-1 rounded-md text-sm">
      {icon}
      {name}
    </div>
  )
}