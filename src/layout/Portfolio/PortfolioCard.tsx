import { type ReactNode } from "react"
import "./PortfolioCard.scss"

type PortfolioCardProps = {
  name: string
  image: string
  logo: string
  techStack: ReactNode[]
  smallLogo?: boolean
  center?: boolean
}

export default function PortfolioCard({
  name,
  image,
  logo,
  techStack,
  smallLogo = false,
  center = false
}: PortfolioCardProps) {
  return (
    <>
      <li className="portfolio--card">
        <button>
          <div className="portfolio--card-img-wrapper">
            <img
              src={logo}
              className="card-logo"
              alt=""
              width={200}
              loading="lazy"
              data-smalllogo={smallLogo}
            />
            <img
              className="card-img"
              src={image}
              alt=""
              width={400}
              height={400}
              loading="lazy"
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
      </li>
    </>
  )
}
