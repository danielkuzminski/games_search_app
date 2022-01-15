import { useState, useEffect } from 'react'

export default function ScrollBar() {
  
  const [scroll, setScroll] = useState(0)
  
  const progressBarHandler = () => {

    const totalScroll = document.documentElement.scrollTop
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrollValue = (totalScroll / windowHeight) * 100

    setScroll(scrollValue)
  }
  
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
