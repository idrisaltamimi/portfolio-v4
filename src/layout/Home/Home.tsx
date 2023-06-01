import { Section } from "../../components"
import hero from "../../assets/hero.svg"
import { VscArrowRight } from "react-icons/vsc"
import "./Home.scss"

export default function Home() {
  return (
    <>
      <Section className="home">
        <div className="home--desc">
          <span className="home--overline">Hi I'm Idris,</span>
          <h1 className="home--title colorful">Frontend Developer,</h1>
          <h2>
            Bringing digital experiences to life,
            <br /> one line of code at a time
          </h2>

          <a
            href="#portfolio"
            aria-label="navigate to Portfolio"
            className="button hero--action-btn"
          >
            My projects <VscArrowRight />
          </a>
        </div>

        <div className="hero--img-wrapper">
          <img src={hero} width={800} height={800} alt="" />
        </div>
      </Section>
      <div className="home--overlay-text">
        Frontend <br /> Developer
      </div>
      {pattern1Svg}
    </>
  )
}

// Image by <a href="https://www.freepik.com/free-vector/flat-design-illustration-customer-support_12982910.htm#query=illustrations&position=32&from_view=keyword&track=sph">Freepik</a>
{
  /* <a href="https://www.freepik.com/free-vector/flat-creativity-concept-illustration_14620625.htm#query=illustrations&position=10&from_view=keyword&track=sph#position=10&query=illustrations">Image by pikisuperstar</a> on Freepik */
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
