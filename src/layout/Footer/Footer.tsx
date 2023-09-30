import { FaExternalLinkAlt } from "react-icons/fa"
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md"

import logo from "../../assets/logo.svg"
import "./Footer.scss"

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a href="#home" aria-label="navigate to home section">
              <img
                src={logo}
                alt="website logo my initials IA"
                width={60}
                height={60}
              />
            </a>
          </li>
          <li>
            <a href="#home" className="footer--return">
              <span>Return to top</span>
              <MdOutlineKeyboardDoubleArrowUp />
            </a>
          </li>
        </ul>
      </nav>

      <div className="footer--foot">
        <div className="footer--copyright">
          Designed & developed by Idris AlTamimi &copy; 2023
        </div>

        <div className="footer--hero-img-link">
          <span>hero image was created by </span>
          <a
            href="https://www.freepik.com/free-vector/flat-creativity-concept-illustration_14620625.htm#query=illustrations&position=10&from_view=keyword&track=sph#position=10&query=illustrations"
            target="_blank"
            rel="noreferrer"
            aria-label="Hero Image Link reference for pikisuperstar copyrights"
          >
            pikisuperstar <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </footer>
  )
}
