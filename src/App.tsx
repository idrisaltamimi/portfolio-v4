import { About, Contact, Home, Portfolio } from "./layout"
import "./_customClasses.scss"

function App() {
  return (
    <>
      <main>
        <Home />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </>
  )
}

export default App
