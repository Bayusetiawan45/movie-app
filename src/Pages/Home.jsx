/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react'
import Banner from '../Components/Banner'
import Card from '../Components/Card'
import MainLayout from '../Layouts/MainLayout'
import useDebounce from '../Utils/useDebounce'
import { useMovie } from '../Context/useMovieContext'

export default function Home() {
  const [query, setQuery] = useState('')
  const { getDataMovie, movies, loading } = useMovie()
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

  useEffect(() => {
    getDataMovie()
  }, [])

  return (
    <MainLayout onSearchChange={onSearchChange}>
      <Banner movie={movies[3]} />
      <div className="container py-5">
        <h1 className='text-light mb-3'>Popular Movies</h1>
        <div className={`row ${filteredItems.length >= 5 ? 'justify-content-center' : "justify-content-start"} g-3`}>
          {loading ? (
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            filteredItems.length > 0 ? (
              filteredItems.map((movie) => (
                <Card key={movie.id} {...movie} />
              ))
            ) : (
              <p className='text-light'>Movie Not Found</p>
            )
          )}
        </div>
      </div>
    </MainLayout>
  )
}
