import { useEffect, useState } from "react";
import { siteConfig } from "../siteconfig";
import Link from "next/link";

export default function TableOfContents() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const observerCallback: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    siteConfig.sections.forEach(({ id }) => {
      const target = document.getElementById(id);
      if (!target) { return; }

      const observer = new IntersectionObserver(observerCallback, {
        rootMargin: "-20px 0px -70% 0px"
      });

      observer.observe(target);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <nav className="flex flex-col gap-2">
      {siteConfig.sections.map(({ label, id }) => {
        const isActive = id === activeSection;
        return (
          <Link href={`/#${id}`} key={id} className="group flex gap-2 items-center [&>*]:transition-all [&>*]:duration-300">
            <hr className={`${isActive ? "w-16" : "w-8"} group-hover:w-16 h-2 border-foreground`} />
            <p className={`uppercase text-sm tracking-widest ${isActive ? "opacity-100" : "opacity-60"} group-hover:opacity-100`}>
              {label}
            </p>
          </Link>
        );
      })}
    </nav>
  );
}