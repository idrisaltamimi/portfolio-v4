import { FaNodeJs, FaReact } from "react-icons/fa"
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
            description="The application utilizes openAI API to provide a chatbot, a regex code generator, a random data generator and API mocking tool, and a recipe generator."
            githubUrl="https://github.com/idrisaltamimi/gpt-omni.git"
            webUrl="https://gpt-omni.netlify.app/"
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
            description="Task management web application created using MERN stack"
            githubUrl="https://github.com/idrisaltamimi/task-manager.git"
            webUrl="https://dreamy-dasik-96dfe4.netlify.app"
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
            description="My personal portfolio website"
            githubUrl="https://github.com/idrisaltamimi/portfolio-v4.git"
            webUrl="https://idrisaltamimi.com/"
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
            description="A twitter clone created using the T3 stack"
            githubUrl="https://github.com/idrisaltamimi/twitter-clone.git"
            webUrl="https://twitter-clone-theta-opal.vercel.app/"
          />
          <PortfolioCard
            name="DALL-E Clone"
            image={dalle}
            logo={openAiIcon}
            techStack={[
              <FaReact />,
              <SiTypescript />,
              <SiTailwindcss />,
              <FaNodeJs />,
              <SiExpress />,
              <SiMongodb />
            ]}
            description="A DALL-E Clone created using MERN stack"
            githubUrl="https://github.com/idrisaltamimi/dall-e-ai.git"
            webUrl="https://dall-e-ai.netlify.app/"
          />
        </PortfolioSubSection>
      </div>

      <div className="portfolio--overlay-text overlay-text">Projects</div>
    </Section>
  )
}
