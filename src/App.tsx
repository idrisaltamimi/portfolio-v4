import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { ErrorBoundary } from "./components"
const Resume = lazy(() => import("./pages/Resume"))
const Main = lazy(() => import("./pages/Main"))
import "./_customClasses.scss"

function App() {
  return (
    <ErrorBoundary fallback="">
      <Suspense>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
