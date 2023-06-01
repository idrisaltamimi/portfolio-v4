import { type ReactNode } from "react"

import { Section } from "../../components"
import gptOmni from "../../assets/gpt-omni.svg"
import kanban from "../../assets/kanban.svg"
import "./Portfolio.scss"

export default function Portfolio() {
  return (
    <Section className="portfolio">
      <h2>A selection of my best work</h2>

      <PortfolioSubSection title="My Apps">
        <PortfolioCard
          name="GPT-OMNI"
          image={gptOmni}
          techStack={["React", "Typescript", "TailwindCSS", "Nodejs", "OpenAi"]}
        />
        <PortfolioCard name="Kanban" image={kanban} techStack={[]} />
      </PortfolioSubSection>
      <h3>My Packages</h3>
      <h3>Cloned Websites</h3>
    </Section>
  )
}

type PortfolioSubSectionProps = {
  title: string
  children: ReactNode
}

function PortfolioSubSection({ title, children }: PortfolioSubSectionProps) {
  return (
    <div className="portfolio--subsection">
      <h3>{title}</h3>
      <ul>{children}</ul>
    </div>
  )
}

type PortfolioCardProps = {
  name: string
  image: string
  techStack: Array<string>
}

function PortfolioCard({ name, image, techStack }: PortfolioCardProps) {
  return (
    <li className="portfolio--card">
      <span>{name}</span>
      <img src={image} alt="" width={200} />
      <ul>
        {techStack.map((tech) => {
          return <li key={tech}>{tech}</li>
        })}
      </ul>
    </li>
  )
}
