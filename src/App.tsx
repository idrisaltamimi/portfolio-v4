import { About, Contact, Footer, Home, Portfolio, Header } from "./layout"
import "./_customClasses.scss"

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
