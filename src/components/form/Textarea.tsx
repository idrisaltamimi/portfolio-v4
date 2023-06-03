import { useState } from "react"
import "./Textfield.scss"

type TextareaProps = {
  label: string
  className?: string
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

export default function Textarea({
  label,
  className = "",
  ...props
}: TextareaProps) {
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
      <textarea onBlur={handleBlur} required {...props} />
      <span className="input-bar" />
    </label>
  )
}
