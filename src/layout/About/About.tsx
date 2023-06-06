import React from "react"
import { Section } from "../../components"
import "./About.scss"

export default function About() {
  return (
    <Section id="about" className="about--section">
      <div className="section--wrapper about--wrapper">
        <h2>About Me,</h2>

        <div className="about--container">
          <p className="about--info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            est, suscipit alias quos odio modi accusantium necessitatibus
            eveniet, quisquam quibusdam ipsa, illo molestias quo eos. Nostrum
            repudiandae sequi temporibus labore?
          </p>
          <div className="about--skills">
            <div>
              <h3></h3>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="overlay-text about--overlay-text">About</div>
    </Section>
  )
}
