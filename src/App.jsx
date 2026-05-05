import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * Components
 */

import Header from './components/header.jsx'
import Hero from './components/hero.jsx'
import About from './components/about.jsx'
import Education from './components/education.jsx'
import Skill from './components/skill.jsx'
import Work from './components/work.jsx'
import Contact from './components/contact.jsx'

const App = () => {
  return(
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App;