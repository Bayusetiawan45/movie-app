import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'

const MovieContext = createContext({})

export function useMovie() {
  return useContext(MovieContext)
}

export default function MovieProvider({children}) {
  const [movies, setMovies] = useState([])
  const [detail, setDetail] = useState([])

  const getDataMovie = async () => {
    try {
      const results = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      setMovies(results.data.results)
    } catch (error) {
      console.log(error.message)
    }
  }

  const getMovieDetail = async (id) => {
    try {
      const results = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      setDetail(results.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <MovieContext.Provider value={{movies, getDataMovie, detail, getMovieDetail}}>
      {children}
    </MovieContext.Provider>
  )
}