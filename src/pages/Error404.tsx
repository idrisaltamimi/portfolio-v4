import React from "react"
import { Link } from "react-router-dom"
import { BsRobot } from "react-icons/bs"
import "./Error404.scss"
import { useHelmet } from "../hooks"

export default function Error404() {
  useHelmet("Idris AlTamimi | 404 Error")

  return (
    <div className="error404">
      <div>
        <h1>
          Something Went Wrong!! <BsRobot />{" "}
        </h1>
        <p>
          Return back to{" "}
          <Link to={"/"} className="button" aria-label="navigate to homepage">
            Homepage
          </Link>
        </p>
      </div>
    </div>
  )
}
