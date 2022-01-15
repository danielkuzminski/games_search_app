import { useState } from 'react';
import './Search.css';
import { useFetch } from '../hooks/useFetch'

export default function Search() {
  
  const [url, setUrl] = useState('http://localhost:3000/games')

  const { data, isPending, error} = useFetch(url)

  const [search, setSearch] = useState('')


  return (
    <div className='search-wrapper'>
      <div className='header'>
        <div className='shadow'></div>
        <h2>Search for games</h2>
        <input type='text' className='search' placeholder='look up for games' onChange={(e) => {
          setSearch(e.target.value)
        }}/>
      </div>
      <div className='games-list'>
        <h1>Lista dostępnych gier</h1>
        {isPending && <p>Pending data...</p>}
        {error && <p>{error}</p>}
        { data && data.map((game) => (
          <div className='list' key={game.id}>
            <p>{game.title}</p>
          </div>
        ))}
        <div className='btn-container'>
          <button className='btn-change' onClick={() => {setUrl('http://localhost:3000/games?genre=action')}}>Action</button>
          <button className='btn-change' onClick={() => {setUrl('http://localhost:3000/games?genre=fps')}}>FPS</button>
          <button className='btn-change' onClick={() => {setUrl('http://localhost:3000/games?genre=rpg')}}>RPG</button>
          <button className='btn-change' onClick={() => {setUrl('http://localhost:3000/games')}}>All Games</button>
        </div>
      </div>
    </div>
  );
}
