import {useState, useEffect } from 'react'

export const useFetch = (url) => {

  const [isPending, setIsPending] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)
      
      try {
        const res = await fetch(url)
        if(!res.ok){
          throw new Error(res.statusText)
        }
        const json = await res.json()

        setIsPending(false)
        setError(null)
        setData(json)
      } catch (err) {
        setIsPending(false)
        setError('Could not fetch data')
        console.log(err.message);
      }
      
    }
    fetchData()
  }, [url])


  return { data, isPending, error}

}