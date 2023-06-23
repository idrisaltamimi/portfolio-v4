import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

import { ErrorBoundary } from "./components"
import { Main } from "./pages"
const Resume = lazy(() => import("./pages/Resume"))
import "./_customClasses.scss"

function App() {
  return (
    <ErrorBoundary fallback="">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App
