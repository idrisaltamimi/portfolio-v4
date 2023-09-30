import { VscArrowRight } from "react-icons/vsc"

import { Section } from "../../components"
import HeroImage from "./HeroImage"
import "./Home.scss"

export default function Home() {
  return (
    <Section className="home" id="home">
      <div className="section--wrapper home--wrapper">
        <div className="home--desc">
          <span className="home--overline">Hi I'm Idris,</span>
          <div className="colorful hero--title-wrapper">
            <h1>Frontend Developer,</h1>
            {pattern2Svg}
          </div>
          <h2>
            Bringing digital experiences to life,
            <br /> one line of code at a time
          </h2>

          <a
            href="#portfolio"
            aria-label="navigate to My Projects and Portfolio section"
            className="button hero--action-btn"
          >
            My projects <VscArrowRight />
          </a>

          <div className="hero--about">
            <p>
              Passionate About Crafting Intuitive and Interactive Web Interfaces
            </p>
            <p>
              Creating visually stunning and performant web interfaces to
              elevate your brand
            </p>
            <a
              href="#portfolio"
              aria-label="navigate to the next section"
              className="scroll-btn"
            />
          </div>
        </div>

        <div className="hero--img-wrapper">
          <HeroImage />
        </div>
      </div>
      <div className="home--overlay-text">
        Frontend <br /> Developer
      </div>
      {pattern1Svg}
      {pattern3Svg}
    </Section>
  )
}

const pattern1Svg = (
  <svg
    width="533"
    height="421"
    viewBox="0 0 533 421"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="hero--pattern1"
  >
    <path
      d="M359.787 11.3047C319.474 5.20454 312.421 92.79 272.112 86.6646C247.384 82.9068 246.166 43.8819 221.414 47.476C197.803 50.9043 202.867 81.5652 183.384 95.3536C129.848 133.24 63.1505 -8.2042 21.2469 51.8224C-39.6103 139 167.997 144.185 132.725 211.619C113.471 248.428 37.0265 229.184 43.9891 270.148C54.4602 331.753 158.055 248.163 197.384 294.392C223.687 325.309 186.332 379.033 223.615 395.021C267.046 413.646 266.719 327.804 310.956 311.195C389.844 281.576 445.473 456.333 507.812 399.579C570.299 342.69 406.284 273.478 437.358 194.842C452.431 156.697 526.904 156.845 511.83 118.701C495.848 78.2603 430.14 138.62 393.563 115.169C357.208 91.8589 402.47 17.7637 359.787 11.3047Z"
      stroke="black"
      strokeWidth="1"
    />
  </svg>
)

const pattern2Svg = (
  <svg
    width="41"
    height="33"
    viewBox="0 0 41 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="hero--pattern2"
  >
    <path
      opacity="0.49"
      d="M1.77979 31.73C4.19979 29.31 8.43977 33.55 10.8598 31.13C13.2798 28.71 9.03978 24.47 11.4598 22.05C13.8798 19.63 18.1198 23.87 20.5398 21.45C22.9598 19.03 18.7198 14.79 21.1298 12.37C23.5498 9.95 27.7898 14.19 30.2098 11.77C32.6298 9.35003 28.3898 5.11 30.8098 2.68C33.2298 0.260001 37.4698 4.50003 39.8998 2.08003"
      stroke="white"
      strokeWidth="1"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const pattern3Svg = (
  <svg
    width="272"
    height="381"
    viewBox="0 0 272 381"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="hero--pattern3"
  >
    <path
      d="M265.711 74.345L1 339.056"
      stroke="#4D4D4D"
      strokeMiterlimit="10"
    />
    <path
      d="M202.686 1L124.76 78.9259"
      stroke="#4D4D4D"
      strokeMiterlimit="10"
    />
    <path
      d="M271.45 240.516L131.354 380.612"
      stroke="#4D4D4D"
      strokeMiterlimit="10"
    />
    <path
      d="M174.043 194.657L73.7666 294.933"
      stroke="#4D4D4D"
      strokeMiterlimit="10"
    />
    <path
      d="M268.661 36.6487L140 165.31"
      stroke="#4D4D4D"
      strokeMiterlimit="10"
    />
    <path
      d="M238.028 1L200.152 38.8752"
      stroke="#4D4D4D"
      strokeMiterlimit="10"
    />
    <path
      d="M271.45 117.415L203.358 185.507"
      stroke="#4D4D4D"
      strokeMiterlimit="10"
    />
    <path
      d="M224.106 95.1253L175.368 143.864"
      stroke="#4D4D4D"
      strokeMiterlimit="10"
    />
  </svg>
)
