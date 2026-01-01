"use client"

import Link from "next/link";
import AboutMe from "./components/AboutMe";
import Badge from "./components/Badge";
import Card from "./components/Card";
import Projects from "./components/Projects";
import TableOfContents from "./components/TableOfContents";
import Technologies from "./components/Technologies";
import { siteConfig } from "./siteconfig";
import DynamicLabel from "./components/DynamicLabel";

export default function Home() {
  return (
    <main className="w-full min-h-screen sm:px-20 px-4">
      <div className="w-full flex flex-wrap">
        <header className="pt-40 w-full lg:sticky top-0 lg:w-1/2 flex flex-col items-center lg:items-start lg:h-fit gap-4">
          <h1 className="text-4xl">Hi, I&apos;m <strong>Raretendo</strong>👋</h1>
          <p className="text-4xl">
            I&apos;m <DynamicLabel className="text-highlight" strings={siteConfig.adjectives} />
          </p>
          <ul className="flex flex-wrap gap-2">
            {siteConfig.titles.map(title => (
              <Badge key={title} title={title} />
            ))}
          </ul>
          <div className="mb-4 gap-4 flex flex-col">
            {siteConfig.cards.map(cardData => (
              <Card {...cardData} key={cardData.key} />
            ))}
          </div>
          <TableOfContents />
          <ul className="flex flex-wrap gap-2 text-2xl">
            {siteConfig.socials.map(socialConfig => (
              <Link
                key={socialConfig.name}
                href={socialConfig.link}
                target="_blank"
                className="transition-all hover:text-highlight hover:scale-150 duration-300"
              >
                {socialConfig.icon}
              </Link>
            ))}
          </ul>
        </header>
        <main className="flex flex-col w-full lg:w-1/2 pt-40">
          <AboutMe />
          <Technologies />
          <Projects />
        </main>
      </div>
    </main>
  );
}
