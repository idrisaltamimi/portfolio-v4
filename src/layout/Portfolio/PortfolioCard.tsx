import { useState, type ReactNode } from "react"
import { FaExternalLinkAlt } from "react-icons/fa"
import { FaGithubAlt } from "react-icons/fa"
import { GrClose } from "react-icons/gr"
import ImageComponent from "react-lazy-load-img-component"

import "./PortfolioCard.scss"

type PortfolioCardProps = {
  name: string
  image: string
  placeholderImage: string
  logo: string
  techStack: ReactNode[]
  smallLogo?: boolean
  hidden?: boolean
  center?: boolean
  description: string
  githubUrl: string
  webUrl: string
}

export default function PortfolioCard({
  name,
  image,
  placeholderImage,
  logo,
  techStack,
  smallLogo = false,
  hidden = false,
  center = false,
  description,
  githubUrl,
  webUrl
}: PortfolioCardProps) {
  const [flipCard, setFlipCard] = useState(false)

  return (
    <>
      <li className="portfolio--card" data-hidden={hidden}>
        <button onClick={() => setFlipCard(true)}>
          <div className="portfolio--card-img-wrapper">
            <img
              src={logo}
              className="card-logo"
              alt=""
              width={200}
              height={100}
              loading="lazy"
              data-smalllogo={smallLogo}
              data-flip-card={flipCard}
            />
            <ImageComponent
              className="card-img"
              src={image}
              placeholderSrc={placeholderImage}
              alt=""
              width={400}
              height={400}
              data-center={center}
            />
          </div>
          <div className="card-name">
            <span>{name}</span>
            <ul>
              {techStack.map((tech) => {
                return <li key={crypto.randomUUID()}>{tech}</li>
              })}
            </ul>
          </div>

          <span className="see-more">See {"\n"} more</span>
        </button>
        <div data-card-flip={flipCard} className="portfolio--card-flipped">
          <button
            onClick={() => setFlipCard(false)}
            className="flipped-close"
            aria-label="close portfolio card"
          >
            <GrClose />
          </button>
          <p>{description}</p>

          <div className="flipped-actions">
            <a
              href={webUrl}
              className="flipped-website button"
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} web app link`}
            >
              View Project <FaExternalLinkAlt />
            </a>
            <a
              href={githubUrl}
              className="flipped-github"
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} github link`}
            >
              GitHub <FaGithubAlt />
            </a>
          </div>
        </div>
      </li>
    </>
  )
}
