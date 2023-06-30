import React from "react"
import "./PagesSuspense.scss"

export default function PagesSuspense({ name }: { name: string }) {
  return (
    <div className="pages-suspense-container">
      <div>
        {/* <h1 aria-hidden="true">
          Idris AlTamimi <span>| {name}</span>
        </h1> */}
        <h1>
          Idris AlTamimi <span>| {name}</span>
        </h1>
      </div>
      <div>
        <div className="pages-suspense-loading">
          Loading {name} <span />
        </div>
      </div>
    </div>
  )
}
