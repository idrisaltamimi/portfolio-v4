import { FaNodeJs, FaReact, FaTwitter } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
import {
  SiTypescript,
  SiTailwindcss,
  SiOpenai,
  SiCss3,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiTrpc,
  SiSass,
  SiFramer
} from "react-icons/si"

import { Section } from "../../components"
import { PortfolioSubSection, PortfolioCard } from "./"
import {
  gptOmni,
  kanban,
  gptOmniIcon,
  kanbanIcon,
  twitterIcon,
  logoIcon,
  openAiIcon,
  portfolio,
  dalle,
  twitter
} from "../../assets"
import "./Portfolio.scss"

export default function Portfolio() {
  return (
    <Section className="portfolio" id="portfolio">
      <div className="section--wrapper">
        <h2>My Projects</h2>
        <span className="portfolio--subtitle">
          Here a selection of projects I've worked on.
        </span>

        <PortfolioSubSection title="Personal Websites">
          <PortfolioCard
            name="GPT-OMNI"
            image={gptOmni}
            logo={gptOmniIcon}
            center
            techStack={[
              <FaReact />,
              <SiTypescript />,
              <SiTailwindcss />,
              <FaNodeJs />,
              <SiOpenai />
            ]}
          />
          <PortfolioCard
            name="Kanban"
            image={kanban}
            logo={kanbanIcon}
            techStack={[
              <FaReact />,
              <SiTypescript />,
              <SiCss3 />,
              <FaNodeJs />,
              <SiExpress />,
              <SiMongodb />
            ]}
          />
          <PortfolioCard
            name="Personal Website"
            image={portfolio}
            logo={logoIcon}
            smallLogo
            center
            techStack={[
              <FaReact />,
              <SiTypescript />,
              <SiSass />,
              <SiFramer />
            ]}
          />
        </PortfolioSubSection>

        <PortfolioSubSection title="Cloned Websites">
          <PortfolioCard
            name="Twitter Clone"
            image={twitter}
            logo={twitterIcon}
            smallLogo
            techStack={[
              <TbBrandNextjs />,
              <SiTypescript />,
              <SiTailwindcss />,
              <SiPrisma />,
              <SiTrpc />
            ]}
          />
          <PortfolioCard
            name="DALL-E Clone"
            image={dalle}
            logo={openAiIcon}
            smallLogo
            techStack={[
              <FaReact />,
              <SiTypescript />,
              <SiTailwindcss />,
              <FaNodeJs />,
              <SiExpress />,
              <SiMongodb />
            ]}
          />
        </PortfolioSubSection>
      </div>

      <div className="portfolio--overlay-text overlay-text">Projects</div>
      {pattern1Svg}
    </Section>
  )
}

const pattern1Svg = ""
