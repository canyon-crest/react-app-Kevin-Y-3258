
import { useState } from "react"
import './App.css'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import APIs from './APIs.jsx'

function App() {
  const [page, setPage] = useState("Home");
  return (
    <>
      <Nav setPage={setPage} />
      {page === "Home" && <Home />}
      {page === "About" && <About title="About Us" description="We sell fresh exotic fruits located around the world." />}
      {page === "Contact" && <Contact />}
      {page === "APIs" && <APIs />}
      <Footer />
    </>
  )
}

export default App

