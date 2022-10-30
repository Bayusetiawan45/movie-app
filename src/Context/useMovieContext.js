import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'

const MovieService = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  timeout: 1000
})

const MovieContext = createContext({})

export function useMovie() {
  return useContext(MovieContext)
}

export default function MovieProvider({children}) {
  const [movies, setMovies] = useState([])
  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(false)

  const getDataMovie = async () => {
    try {
      setLoading(true)
      const results = await MovieService.get(`popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      setMovies(results.data.results)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
      setLoading(false)
    }
  }

  const getMovieDetail = async (id) => {
    try {
      setLoading(true)
      const results = await MovieService.get(`${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      setDetail(results.data)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
      setLoading(false)
    }
  }

  return (
    <MovieContext.Provider value={{movies, getDataMovie, detail, getMovieDetail, loading}}>
      {children}
    </MovieContext.Provider>
  )
}