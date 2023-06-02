import { type ReactNode } from "react"

import "./PortfolioSubSection.scss"

type PortfolioSubSectionProps = {
  title: string
  children: ReactNode
}

export default function PortfolioSubSection({
  title,
  children
}: PortfolioSubSectionProps) {
  return (
    <div className="portfolio--subsection">
      <h3>{title}</h3>
      <ul>{children}</ul>
    </div>
  )
}
