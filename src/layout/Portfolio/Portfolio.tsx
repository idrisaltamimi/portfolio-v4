import { FaAngular, FaNodeJs, FaNpm, FaReact } from "react-icons/fa"
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
  // openAiIcon,
  portfolio,
  // dalle,
  twitter,
  lazyImage,
  lazyImageIcon,
  gptOmniSmall,
  kanbanSmall,
  portfolioSmall,
  lazyImageSmall,
  twitterSmall,
  // dalleSmall
  gamingQZ,
  gamingQZSmall,
  gamingQZIcon
} from "../../assets"
import "./Portfolio.scss"

export default function Portfolio() {
  return (
    <Section className="portfolio" id="portfolio">
      <div className="section--wrapper">
        <h2>My Projects,</h2>
        <span className="portfolio--subtitle">
          Here are a selection of projects I've worked on,
        </span>

        <PortfolioSubSection>
          <PortfolioCard
            name="Kanban"
            image={kanban}
            placeholderImage={kanbanSmall}
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
            name="GamingQZ"
            image={gamingQZ}
            placeholderImage={gamingQZSmall}
            logo={gamingQZIcon}
            techStack={[
              <FaAngular />,
              <SiTypescript />,
              <SiSass />,
              <FaNodeJs />,
              <SiExpress />
            ]}
            description="Dashboard app for students that combines fun and learning"
            webUrl="https://gamingqz.com/#/home"
          />

          <PortfolioCard
            name="GPT-OMNI"
            image={gptOmni}
            placeholderImage={gptOmniSmall}
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
            name="Personal Website"
            image={portfolio}
            placeholderImage={portfolioSmall}
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

          <PortfolioCard
            name="Lazy Image Loader"
            image={lazyImage}
            placeholderImage={lazyImageSmall}
            logo={lazyImageIcon}
            techStack={[<FaReact />, <SiTypescript />, <SiCss3 />, <FaNpm />]}
            description="A versatile and customizable image npm loading component for React apps that provides an elegant way to handle image loading states while the image is being downloaded."
            githubUrl="https://github.com/idrisaltamimi/react-lazy-load-img-component.git"
            webUrl="https://www.npmjs.com/package/react-lazy-load-img-component"
          />

          <PortfolioCard
            name="Twitter Clone"
            image={twitter}
            placeholderImage={twitterSmall}
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
          {/* <PortfolioCard
            name="DALL-E Clone"
            image={dalle}
            placeholderImage={dalleSmall}
            logo={openAiIcon}
            techStack={[
              <FaReact />,
              <SiTypescript />,
              <SiTailwindcss />,
              <FaNodeJs />,
              <SiExpress />,
              <SiMongodb />,
              <SiOpenai />
            ]}
            description="A DALL-E Clone created using MERN stack"
            githubUrl="https://github.com/idrisaltamimi/dall-e-ai.git"
            webUrl="https://dall-e-ai.netlify.app/"
          /> */}
        </PortfolioSubSection>
      </div>
      <div className="portfolio--overlay-text overlay-text">Projects</div>
    </Section>
  )
}
