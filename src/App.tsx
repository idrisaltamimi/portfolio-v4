// import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { Main } from "./pages"
// const Resume = lazy(() => import("./pages/Resume"))
import "./_customClasses.scss"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/resume" element={<Resume />} /> */}
    </Routes>
  )
}

export default App
