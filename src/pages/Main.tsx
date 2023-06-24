import { useHelmet } from "../hooks"
import { About, Contact, Footer, Header, Home, Portfolio } from "../layout"

export default function Main() {
  useHelmet("Idris AlTamimi | Frontend Developer")
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
