import { Helmet } from "react-helmet"

import { About, Contact, Footer, Header, Home, Portfolio } from "../layout"

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <Helmet>
          <title>Idris AlTamimi | Frontend Developer</title>
        </Helmet>
        <Home />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
