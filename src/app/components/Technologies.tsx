import { siteConfig } from "../siteconfig";
import SectionLabel from "./SectionLabel";

export default function Technologies() {
  return (
    <section className="section">
      <SectionLabel label="Technologies" id="technologies" />
      <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
        {siteConfig.technologies.map(techData => (
          <TechCard key={techData.name} {...techData} />
        ))}
      </div>
    </section>
  )
}

function TechCard({
  name,
  icon
}: {
  name: string,
  icon: React.ReactElement
}) {
  return (
    <div className="group w-32 h-32 flex flex-col gap-4 items-center justify-center text-center bg-secondary p-4 text-lg rounded-lg shadow-sm dark:shadow-[#ffffff1a] shadow-[#0000001a]">
      <div className="text-4xl transition-all group-hover:scale-150 duration-300">{icon}</div>
      <strong className="text-base">{name}</strong>
    </div>
  )
}