import { Route, Routes } from "react-router-dom"

import { ErrorBoundary } from "./components"
import { Main, Resume } from "./pages"
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
