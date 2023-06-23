import { useState } from "react"
import { type IconType } from "react-icons"
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa"
import {
  SiCss3,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPrisma,
  SiSass,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { Section } from "../../components"
import "./About.scss"

export default function About() {
  const [selectedWork, setSelectedWork] = useState("freelance")

  return (
    <Section id="about" className="about--section">
      <div className="section--wrapper about--wrapper">
        <h2>About Me,</h2>
        <div className="about--container">
          <div className="about--me">
            <h3>Who I'm,</h3>
            <p className="about--info">
              I am a Frontend Developer with two years of experience. During
              this time, I've helped startups launch, grow, and improve their
              websites by assisting them in creating new web applications,
              testing, fixing, and elevating web applications' functionality,
              UI, and UX. While my primary focus lies in client-side
              development, I also worked on the server side.
            </p>
            <Skills />
          </div>

          <div className="about--work">
            <h3>Experience</h3>

            <div
              className="about--work-panel"
              data-selected={selectedWork === "freelance"}
            >
              <button onClick={() => setSelectedWork("freelance")}>
                <div>
                  Freelancer
                  <span>Web Developer</span>
                </div>
                <span>2022 - present</span>
              </button>
              <p className="about--work-content">
                A versatile full-stack developer offering comprehensive web
                development services, ranging from creating new websites to
                testing and resolving issues in existing ones.
              </p>
            </div>

            <div
              className="about--work-panel"
              data-selected={selectedWork === "brainnest"}
            >
              <button onClick={() => setSelectedWork("brainnest")}>
                <div>
                  Brainnest
                  <span>Frontend Developer</span>
                </div>
                <span>2022</span>
              </button>
              <p className="about--work-content">
                Designing and developing user-facing interfaces for web
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay-text about--overlay-text">About</div>
      {svgPattern1}
    </Section>
  )
}

function Skills() {
  return (
    <ul className="about--skills">
      <SKillItem SkillIcon={FaReact} skill="React" />
      <SKillItem SkillIcon={SiJavascript} skill="Javascript" />
      <SKillItem SkillIcon={SiTypescript} skill="Typescript" />
      <SKillItem SkillIcon={TbBrandNextjs} skill="NextJS" />
      <SKillItem SkillIcon={FaHtml5} skill="HTML" />
      <SKillItem SkillIcon={SiCss3} skill="CSS" />
      <SKillItem SkillIcon={SiSass} skill="SASS" />
      <SKillItem SkillIcon={SiTailwindcss} skill="TailwindCSS" />
      <SKillItem SkillIcon={FaNodeJs} skill="Node" />
      <SKillItem SkillIcon={SiExpress} skill="Express" />
      <SKillItem SkillIcon={SiMongodb} skill="MongoDB" />
      <SKillItem SkillIcon={SiPrisma} skill="Prisma" />
    </ul>
  )
}

type SKillItemType = {
  SkillIcon: IconType
  skill: string
}

function SKillItem({ SkillIcon, skill }: SKillItemType) {
  return (
    <li>
      <div>
        <SkillIcon />
      </div>
      <span>{skill}</span>
    </li>
  )
}

const svgPattern1 = (
  <svg
    width="55"
    height="45"
    viewBox="0 0 55 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="about--pattern1"
  >
    <path
      opacity="1"
      d="M47.55 25L42 34.61H53.1L47.55 25Z"
      stroke="white"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="1"
      d="M1.92673 5.47208L10.4751 12.5488L12.3285 1.60469L1.92673 5.47208Z"
      stroke="white"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="1"
      d="M24.16 39.08C24.16 41.33 22.33 43.16 20.08 43.16C17.83 43.16 16 41.33 16 39.08C16 36.83 17.83 35 20.08 35C22.33 35 24.16 36.83 24.16 39.08Z"
      stroke="white"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="1"
      d="M42 18.9999C42 26.169 36.1691 32 29 32C21.8309 32 16 26.169 16 18.9999C16 11.8308 21.8309 6 29 6C36.1691 6 42 11.8308 42 18.9999Z"
      stroke="white"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
