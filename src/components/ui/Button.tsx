import { type ReactNode } from "react"

import "./Button.scss"

type ButtonProps = {
  className?: string
  children: ReactNode
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export default function Button({
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  )
}
