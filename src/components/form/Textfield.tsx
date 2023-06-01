import "./Textfield.scss"

type TextfieldProps = {
  textarea?: boolean
  label: string
  className?: string
}

export default function Textfield({
  textarea = false,
  label,
  className = "",
  ...props
}: TextfieldProps) {
  return (
    <label className={`${className}`}>
      <span>{label}</span>
      {textarea ? (
        <textarea name="" id="" {...props} />
      ) : (
        <input type="text" {...props} />
      )}
    </label>
  )
}
