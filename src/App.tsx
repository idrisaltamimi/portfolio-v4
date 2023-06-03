import { About, Contact, Footer, Home, Portfolio } from "./layout"
import "./_customClasses.scss"

function App() {
  return (
    <>
      <main>
        <Home />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
