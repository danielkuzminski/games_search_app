import { useState } from 'react'
import './NewGameForm.css'

export default function NewGameForm({handleShow, handleUrl}) {

  const [title, setTitle] = useState('')

  const [genre, setGenre] = useState('')

  

  const resetForm = () => {
    setTitle('')
    setGenre('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const game = {
      title,
      genre
    }

    fetch('http://localhost:3000/games', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(game)
          })

    resetForm()
    handleShow()
    handleUrl()
  }

  return (
    <div className='form-wrapper'>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input type="text" placeholder='put title' onChange={(e) => {
            setTitle(e.target.value)
          }} value={title}/>
        </label>
        <label>
          <span>Genre:</span>
          <input type="text" placeholder='pass genre' onChange={(e) => {
            setGenre(e.target.value)
          }} value={genre}/>
        </label>
        <button>submit</button>
      </form>
    </div>
  )
}
