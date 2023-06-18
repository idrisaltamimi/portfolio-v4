import { type ReactNode } from "react"

import "./PortfolioSubSection.scss"

type PortfolioSubSectionProps = {
  children: ReactNode
}

export default function PortfolioSubSection({
  children
}: PortfolioSubSectionProps) {
  return (
    <div className="portfolio--subsection">
      <ul>{children}</ul>
    </div>
  )
}
