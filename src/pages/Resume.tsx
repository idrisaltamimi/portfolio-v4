import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { FaFileDownload, FaGithubAlt } from "react-icons/fa"
import { FiLinkedin } from "react-icons/fi"
import { SiGmail } from "react-icons/si"

import { Header } from "../layout"
import "./Resume.scss"

export default function Resume() {
  return (
    <>
      <Header resume />
      <main className="resume--section">
        <Helmet>
          <title>Idris AlTamimi | Resume</title>
        </Helmet>
        <section className="resume--section-wrapper">
          <aside>
            <Link to="/" aria-label="Download a PDF copy of this resume">
              <FaFileDownload /> <span>Download</span>
            </Link>
          </aside>

          <div className="resume-row1">
            <Links />
            <h3>Core Technologies</h3>
            <Skills />
          </div>

          <div className="resume-row2">
            <h1>Idris {"\n"} AlTamimi</h1>
            <h2>Frontend Developer and UX Designer</h2>
            <p>
              Web Developer valued for creating engaging, high-performance, and
              accessible web experiences.
            </p>
            <hr />
            <Experience />
          </div>
        </section>
      </main>
    </>
  )
}

function Links() {
  return (
    <ul className="resume--links">
      <li>
        <a
          href="https://idrisaltamimi.com/"
          aria-label="Check out Idris' Portfolio"
          target="_blank"
          rel="noreferrer"
        >
          {logo} idrisaltamimi.com
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/idrisalt"
          aria-label="Connect with Idris on LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin color="#0a021e" /> linkedin.com/in/idrisalt
        </a>
      </li>
      <li>
        <a
          href="https://github.com/idrisaltamimi"
          aria-label="Check out Idris' GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubAlt color="#0a021e" /> github.com/idrisaltamimi
        </a>
      </li>
      <li>
        <a
          href="mailto:idris.al.tamimi.1@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <SiGmail color="#0a021e" />
          idris.al.tamimi.1@gmail.com
        </a>
      </li>
    </ul>
  )
}

function Skills() {
  return (
    <ul className="resume--skills">
      <li>JavaScript</li>
      <li>Typescript</li>
      <li>React</li>
      <li>NextJS</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>SASS</li>
      <li>TailwindCSS</li>
      <li>Node</li>
      <li>Express</li>
      <li>Prisma</li>
    </ul>
  )
}

function Experience() {
  return (
    <div className="resume--experience">
      <div className="resume--experience-header">
        <h3>Experience</h3>
        <p>
          Throughout my coding journey, I have worked on several web projects,
          working independently or collaborating with a team.
        </p>
      </div>

      <article>
        <div>
          <h3>
            Web Developer <span>— Freelance</span>
          </h3>
          <span>Aug 2022 - Present</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nihil
          fugiat. Illo explicabo numquam consequuntur cupiditate!
        </p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            dolorum.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            dolorum.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            dolorum.
          </li>
        </ul>
      </article>

      <article>
        <div>
          <h3>
            Frontend Developer <span>— Brainnest</span>
          </h3>
          <span>Sept - Oct 2022</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nihil
          fugiat. Illo explicabo numquam consequuntur cupiditate!
        </p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            dolorum.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            dolorum.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            dolorum.
          </li>
        </ul>
      </article>
    </div>
  )
}

const logo = (
  <svg
    version="1.1"
    id="Layer_2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 747.29 688.57"
    color="#0a021e"
  >
    <path
      d="M505.78,466.67c0,0-36.53,4.19-36.53-41.31c0-45.51,0-331.14,0-331.14s-37.52,15.01-78.2,41.11
        c-26.67,17.12-54.25,40.39-75.09,62.48C264,252.85,268,312.18,268,312.18h-72.95V151.62c0-10.83,1.92-21.6,5.96-31.64
        c3.41-8.47,8.45-16.94,15.56-19.98c-8-8.76-13.52-14.1-13.52-14.1s-54.29,28.76-63.71,83.05c-2.67,56.38-0.77,314.38-0.77,314.38
        s-1.23,50.95-21.81,62.38c8,7.24,12.58,13.33,12.58,13.33s16.19-6.66,39.52-30.66c10.19-10.49,18.7-26.99,23.68-48.95
        c1.84-8.08,2.74-16.35,2.87-24.64c1.24-76.69-0.04-129.97-0.04-129.97l35.11,32.07h36.95v167.87c0,0-1.14,26.18-31.62,46.48
        c4.95,4.19,17.15,13.71,17.15,13.71s36.12-20.51,58.06-53.59c0,0,7.36-9.55,12.41-46.79c0.76-38.48-0.28-127.62-0.28-127.62
        l90.95-0.38l0.17,90.9c0.02,10.17,1.67,20.29,5.19,29.82c2.03,5.51,4.64,10.92,7.78,14.14c8.38,8.57,25.14,25.14,48.57,25.14
        s60.19,0,60.19,0s14.57,0.19,37.91-18.86c25.79-21.05,33.66-31.04,33.66-31.04H505.78z
        M413.91,312h-90.67
        c0,0-6.67-57.53,25.33-104.19c29.62-41.24,65.34-44.38,65.34-44.38V312z"
    />
  </svg>
)
