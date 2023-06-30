import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

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
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
