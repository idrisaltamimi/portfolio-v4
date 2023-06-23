import { type FormEvent, useRef, type ReactNode } from "react"
import { BiPaperPlane } from "react-icons/bi"
import { FaCodepen, FaGithubAlt, FaTwitter } from "react-icons/fa"
import { FiLinkedin } from "react-icons/fi"
import { AiFillInstagram } from "react-icons/ai"
import emailjs from "@emailjs/browser"

import { Button, Section, Textarea, Textfield } from "../../components"
import "./Contact.scss"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()

    const target = e.target as HTMLFormElement

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_gm27rxn",
          "idris_portfolio",
          formRef.current,
          "pk9fRrp1BnP5QG7kg"
        )
        .then(() => target.reset())
        .catch(() => alert("something went wrong"))
    }
  }

  return (
    <Section id="contact" className="contact--section">
      <div className="section--wrapper contact--wrapper">
        <div className="contact--header">
          <h2>Contact Me,</h2>
          <div className="contact--desc">
            <span>
              Got a question or proposal, or simply want to say hello? Feel free
              to reach out!
            </span>
            {handDownSvg}
          </div>
          <ul className="contact--social">
            <ListItem
              href="https://github.com/idrisaltamimi"
              aria-label="my github link"
            >
              <FaGithubAlt />
            </ListItem>
            <ListItem
              href="https://www.linkedin.com/in/idrisalt/"
              aria-label="my linkedin link"
            >
              <FiLinkedin />
            </ListItem>
            <ListItem
              href="https://twitter.com/idris_altamimi"
              aria-label="my twitter link"
            >
              <FaTwitter />
            </ListItem>
            <ListItem
              href="https://www.instagram.com/idris.altamimi/"
              aria-label="my instagram link"
            >
              <AiFillInstagram />
            </ListItem>
            <ListItem
              href="https://codepen.io/idrisaltaimimi"
              aria-label="my codepen link"
            >
              <FaCodepen />
            </ListItem>
          </ul>
          {arrowSvg}
        </div>

        <form ref={formRef} onSubmit={sendEmail}>
          <div className="input-wrapper">
            <Textfield
              label="Name"
              id="name"
              type="text"
              pattern="[a-zA-Z0-9\s]*$"
            />
          </div>
          <Textfield
            label="Email"
            id="email"
            type="email"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          />
          <Textarea label="Message" id="message" />

          <Button
            className="form--send"
            aria-label="send message"
            type="submit"
          >
            <BiPaperPlane /> <span>Send Message</span>
          </Button>
        </form>
      </div>

      <div className="contact--overlay-text overlay-text">Contact</div>
    </Section>
  )
}

type ListItemProps = {
  href: string
  children: ReactNode
} & React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

function ListItem({ href, children, ...props }: ListItemProps) {
  return (
    <li className="social-items">
      <a href={href} {...props} target="_blank" rel="noreferrer">
        {children}
      </a>
    </li>
  )
}

const arrowSvg = (
  <svg
    width="591"
    height="412"
    viewBox="0 0 591 412"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="contact--arrow"
  >
    <path
      d="M537.637 155.236C355.133 513.784 37.1697 420.607 13.1217 257.473C-9.42079 104.553 152.896 22.5182 252.015 32.7799C346.312 42.5424 350.023 140.51 264.266 140.51C159.904 140.51 101.701 63.1963 91.1791 2M537.637 155.236L405.234 198.263M537.637 155.236L580.509 288.119"
      stroke="black"
      strokeWidth="4"
    />
  </svg>
)

const handDownSvg = (
  <svg
    width="626"
    height="437"
    viewBox="0 0 626 437"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="contact--hand"
  >
    <path
      d="M612.049 15L35.2539 188.849L197.31 238.36M612.049 15L197.31 238.36M612.049 15L541.567 367.438L342.307 293.493M612.049 15L305.908 279.985M197.31 238.36L234.233 415M305.908 279.985L234.233 415M305.908 279.985L342.307 293.493M234.233 415L342.307 293.493"
      stroke="black"
      strokeWidth="20"
    />
  </svg>
)
