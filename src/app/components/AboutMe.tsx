import SectionLabel from "./SectionLabel";

const birthDate = new Date("2004-07-09T00:00:00.000Z")

export default function AboutMe() {
  return (
    <section className="section">
      <SectionLabel label="About Me" id="about-me" />
      Yo 👋! My name is Xavier and I&apos;m <strong>{getAge()}</strong> years old! I go by <strong>Raretendo</strong> online.
      I&apos;m an avid, diligent software developer who started programming in <strong>2017</strong>!
    </section>
  )
}

function getAge() {
  const diff = new Date(Date.now() - birthDate.getTime())
  const diffDate = new Date(diff)
  return Math.abs(diffDate.getUTCFullYear() - 1970)
}