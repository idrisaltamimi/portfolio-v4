import { type ReactNode } from "react"
import { BiPaperPlane } from "react-icons/bi"
import { FaCodepen, FaGithubAlt, FaTwitter } from "react-icons/fa"
import { FiLinkedin } from "react-icons/fi"
import { AiFillInstagram } from "react-icons/ai"

import { Button, Section, Textarea, Textfield } from "../../components"
import "./Contact.scss"

export default function Contact() {
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
            <ListItem href="https://github.com/idrisaltamimi">
              <FaGithubAlt />
            </ListItem>
            <ListItem href="https://www.linkedin.com/in/idris-altamimi-a147b3246/">
              <FiLinkedin />
            </ListItem>
            <ListItem href="https://twitter.com/idris_altamimi">
              <FaTwitter />
            </ListItem>
            <ListItem href="https://www.instagram.com/idris.altamimi/">
              <AiFillInstagram />
            </ListItem>
            <ListItem href="https://codepen.io/idrisaltaimimi">
              <FaCodepen />
            </ListItem>
          </ul>
          {arrowSvg}
        </div>
        <form>
          <div className="input-wrapper">
            <Textfield
              label="Name"
              id="name"
              type="text"
              pattern="^[a-zA-Z0-9]{1,50}$"
            />
          </div>
          <Textfield
            label="Email"
            id="email"
            type="email"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          />
          <Textarea label="Message" id="message" />

          <Button className="form--send">
            <BiPaperPlane /> <span>Send Message</span>
          </Button>
          {/* {pattern1Svg} */}
        </form>
      </div>
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

const pattern1Svg = (
  <svg
    width="626"
    height="437"
    viewBox="0 0 626 437"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="contact--pattern1"
  >
    <path
      d="M612.049 15L35.2539 188.849L197.31 238.36M612.049 15L197.31 238.36M612.049 15L541.567 367.438L342.307 293.493M612.049 15L305.908 279.985M197.31 238.36L234.233 415M305.908 279.985L234.233 415M305.908 279.985L342.307 293.493M234.233 415L342.307 293.493"
      stroke="black"
      strokeWidth="4"
    />
  </svg>
)

const handDownSvg = (
  <svg
    width="421"
    height="511"
    viewBox="0 0 421 511"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="contact--hand"
  >
    <path
      d="M229.456 272.225C229.456 272.225 216.675 359.124 188.749 425.573M288.297 285.95C283.386 343.576 272.054 380.186 258.425 402.529M340.747 106.777C342.51 118.044 344.424 132.979 346.088 150.186M165.129 63.6362C165.129 63.6362 145.293 79.4612 121.872 100.445M254.549 226.682C265.662 201.434 268.857 170.987 268.857 150.186M186.398 212.739C198.07 188.999 203.191 166.993 208.613 142.273M121.872 100.445C69.0582 147.765 -12.5398 232.207 15.8311 280.568C52.4656 343.014 141.476 256.056 141.476 256.056C141.476 256.056 22.3831 474.333 107.52 498.372C142.482 508.244 169.292 471.872 188.749 425.573M121.872 100.445C121.872 100.445 81.6099 71.4487 93.5889 36.8817C116.181 -28.3091 428.689 39.5194 409.118 120.537C399.895 158.718 346.088 150.186 346.088 150.186M346.088 150.186C356.145 254.182 355.195 440.318 258.425 402.529M258.425 402.529C235.011 440.91 204.818 437.189 188.749 425.573"
      stroke="black"
      strokeWidth="4"
    />
  </svg>
)
