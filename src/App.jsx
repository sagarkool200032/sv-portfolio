import { useState,useEffect } from 'react'
import Navbar from '@/scenes/navbar'
import Home from '@/scenes/home'
import Services from '@/scenes/services'
import Portfolio from '@/scenes/portfolio'
import ContactUs from './scenes/contactUs'


function App() {
  const [darkMode,setDarkMode] = useState(true)
  const [selectedPage, setSelectedPage] = useState('Home')
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const darkModeHandler = () => {
    setDarkMode(!darkMode)
  }

  

  
  return (
    <div className={darkMode ? 'dark': ''}>
      <div className="app bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen">
        <Navbar handler={darkModeHandler} isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
        <Home/>
        <Services/>
        <Portfolio/>
        <ContactUs/>
      </div>
    </div>
  )
}

export default App
