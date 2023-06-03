import { useState } from "react"
import "./Textfield.scss"

type TextfieldProps = {
  label: string
  className?: string
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export default function Textfield({
  label,
  className = "",
  ...props
}: TextfieldProps) {
  const [focus, setFocus] = useState(false)
  const [blur, setBlur] = useState(false)
  const handleBlur = () => setBlur(true)

  return (
    <label
      className={`textfield ${className}`}
      data-blur={blur}
      data-focus={focus}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <span className="label">{label}</span>
      <input type="text" onBlur={handleBlur} required {...props} />
      <span className="input-bar" />
    </label>
  )
}
