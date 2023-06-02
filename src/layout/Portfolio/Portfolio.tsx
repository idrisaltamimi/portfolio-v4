import { Section } from "../../components"
import { PortfolioSubSection, PortfolioCard } from "./"
import { gptOmni, kanban, gptOmniIcon, kanbanIcon } from "../../assets"
import "./Portfolio.scss"

export default function Portfolio() {
  return (
    <Section className="portfolio" id="portfolio">
      <div className="section--wrapper">
        <h2>My Projects</h2>
        <span className="portfolio--subtitle">
          Here a selection of projects I've worked on.
        </span>

        <PortfolioSubSection title="My Apps">
          <PortfolioCard
            name="GPT-OMNI"
            image={gptOmni}
            logo={gptOmniIcon}
            techStack={[
              "React",
              "Typescript",
              "TailwindCSS",
              "Nodejs",
              "OpenAi"
            ]}
          />
          <PortfolioCard
            name="Kanban"
            image={kanban}
            logo={kanbanIcon}
            techStack={[
              "React",
              "Typescript",
              "CSS",
              "Nodejs",
              "Express",
              "MongoDB"
            ]}
          />
        </PortfolioSubSection>
        <h3>My Packages</h3>
        <h3>Cloned Websites</h3>
      </div>

      <div className="portfolio--overlay-text overlay-text">Projects</div>
      {pattern1Svg}
    </Section>
  )
}

const pattern1Svg = ""
