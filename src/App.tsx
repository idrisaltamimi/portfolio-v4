import { lazy, Suspense, useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"

import { ErrorBoundary, PagesSuspense } from "./components"
import { Error404 } from "./pages"
const Resume = lazy(() => import("./pages/Resume"))
const Main = lazy(() => import("./pages/Main"))
import "./_customClasses.scss"

function App() {
  return (
    <ErrorBoundary fallback="">
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<PagesSuspense name="portfolio" />}>
                <Main />
              </Suspense>
            }
          />
          <Route
            path="/resume"
            element={
              <Suspense fallback={<PagesSuspense name="resume" />}>
                <Resume />
              </Suspense>
            }
          />
          <Route path="/404" element={<Error404 />} />
          <Route path="/*" element={<Redirect />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App

function Redirect() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/404")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
