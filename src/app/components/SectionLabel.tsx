import Link from "next/link";

export default function SectionLabel({ label, id }: { label: string, id: string }) {
  return (
    <Link href={`/#${id}`} id={id} className="group [&>*]:transition-all [&>*]:duration-300 mb-4 flex flex-col items-center lg:items-start">
      <h2 className="group-hover:text-highlight mb-2">
        {label}
      </h2>
      <hr className="w-24 h-[1px] border-primary group-hover:w-40" />
    </Link>
  )
}