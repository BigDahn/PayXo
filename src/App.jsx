import React, { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Concept from './Concept'
import MoreInfo from './MoreInfo'
import Article from './Article'
import SubContent from './SubContent'
import Reviews from './Reviews'
import Footer from './Footer'
import Sidebar from './Sidebar'

const App = () => {
   const [sidebar, setSidebar] = useState(false)
  
  return (
    <main className="overflow-hidden ">
      <div className="bg-gradient-to-r from-[#d4d6ed] from-20%  to-[#f6f6f6]">
        <Navbar sidebar={sidebar} setSidebar={setSidebar} />
        <Hero />
      </div>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <Concept />
      <MoreInfo />
      <Article />
      <SubContent />

      <div className="bg-[#FBF4FF]">
        <Reviews />
      </div>

      <Footer />
    </main>
  )
}

export default App
