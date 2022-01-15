import { useState, useEffect } from 'react'
import './ScrollBar.css'

export default function ScrollBar() {
  
  //creating state to keep progress percentage
  const [scroll, setScroll] = useState(0)
  
  //creating progress handler
  const progressBarHandler = () => {

    const totalScroll = document.documentElement.scrollTop
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrollValue = (totalScroll / windowHeight) * 100

    //setting actual scroll percentage
    setScroll(scrollValue)
  }
  
  // using useEffect to mount and unmount
  useEffect(() => {
    window.addEventListener("scroll", progressBarHandler)

    return () => window.removeEventListener("scroll", progressBarHandler)
  }, [])


  return (
      <div className="progress-bar-container">
        <div className="progress-bar" style={{width: `${scroll}%`}}></div>
      </div>
  )
}
