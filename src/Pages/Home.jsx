import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import Banner from '../Components/Banner'
import Card from '../Components/Card'
import MainLayout from '../Layouts/MainLayout'
import useDebounce from '../Utils/useDebounce'

export default function Home() {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')

  const debounceSearch = useDebounce(query, query ? 500 : 0)

  const filteredItems = useMemo(() => {
    return movies.filter((item) => {
      return item.title.toLowerCase().includes(debounceSearch.toLowerCase())
    })
  }, [debounceSearch, movies])

  const onSearchChange = (e) => {
    e.preventDefault()
    const { value } = e.target
    setQuery(value)
  }

  const getDataMovie = async () => {
    try {
      const results = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      setMovies(results.data.results)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getDataMovie()
  }, [])

  return (
    <MainLayout onSearchChange={onSearchChange}>
      <Banner movie={movies[3]} />
      <div className="container py-5">
        <h1 className='text-light mb-3'>Popular Movies</h1>
        <div className={`row ${filteredItems.length >= 5 ? 'justify-content-center' : "justify-content-start"} g-3`}>
          {filteredItems.map((movie) => (
            <Card key={movie.id} {...movie}/>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
