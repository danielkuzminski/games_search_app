import './Hamburger.css'

export default function Hamburger({handleShow}) {
  return (
    <div className='hamburger' onClick={handleShow}>
      <span></span>
      <span></span>
    </div>
  )
}
