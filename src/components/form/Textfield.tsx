import { useState } from "react"
import "./Textfield.scss"

type TextfieldProps = {
  id: string
  label: string
  className?: string
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export default function Textfield({
  id,
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
      <input
        id={id}
        name={id}
        type="text"
        onBlur={handleBlur}
        required
        {...props}
      />
      <span className="input-bar" />
    </label>
  )
}
