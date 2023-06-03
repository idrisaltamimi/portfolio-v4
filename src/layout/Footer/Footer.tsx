import logo from "../../assets/logo.svg"
import "./Footer.scss"

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a href="#home">
              <img src={logo} alt="" width={60} height={60} />
            </a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
