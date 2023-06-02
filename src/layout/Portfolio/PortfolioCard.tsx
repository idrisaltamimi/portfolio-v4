import "./PortfolioCard.scss"

type PortfolioCardProps = {
  name: string
  image: string
  logo: string
  techStack: Array<string>
}

export default function PortfolioCard({
  name,
  image,
  logo,
  techStack
}: PortfolioCardProps) {
  return (
    <>
      <li className="portfolio--card">
        <button>
          <div className="portfolio--card-img-wrapper">
            <img src={image} alt="" width={200} loading="lazy" />
          </div>
          <span>{name}</span>
        </button>
        {/* <ul>
          {techStack.map((tech) => {
            return <li key={tech}>{tech}</li>
          })}
        </ul> */}
      </li>
    </>
  )
}
