import { type ReactNode } from "react"

import "./Section.scss"

type SectionProps = {
  className?: string
  children: ReactNode
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export default function Section({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={`section ${className}`} {...props}>
      {children}
    </section>
  )
}
