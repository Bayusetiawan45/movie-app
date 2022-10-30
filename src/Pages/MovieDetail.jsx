/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'
import { useMovie } from '../Context/useMovieContext'

export default function MovieDetail() {
  const { id } = useParams()
  const { detail, getMovieDetail, loading } = useMovie()

  const posterUrl = `${process.env.REACT_APP_BASE_IMG_URL}${detail?.poster_path}`
  const backdropUrl = `${process.env.REACT_APP_BASE_IMG_URL}${detail?.backdrop_path}`

  useEffect(() => {
    getMovieDetail(id)
  }, [])

  return (
    <MainLayout>
      {loading ? (
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className='position-relative' style={{
          backgroundImage: `url(${backdropUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          borderBottomLeftRadius: "3rem",
          borderBottomRightRadius: "3rem",
          boxShadow: "0 10px 10px rgba(14, 255, 46, 0.3)"
        }}>
          <div className='container justify-content-center row p-5 mt-5'>
            <div className='col'>
              <img src={posterUrl} alt='banner' className='' style={{
                height: "600px",
                width: "100%",
                minWidth: "200px",
                objectFit: "contain",
                objectPosition: "left"
              }} />
            </div>
            <div className='col d-flex flex-column justify-content-center text-light'>
              <h1 style={{
                fontSize: "4rem"
              }}>{detail?.title}</h1>
              <div className='d-flex text-warning'>
                <p>{detail?.release_date} ( {detail?.production_countries?.[0]?.iso_3166_1
                } ) | </p>
                {detail?.genres?.map((genre) => (
                  <p className='mx-1' key={genre?.name}>{genre?.name}</p>
                ))}
              </div>
              <p><em>{detail?.tagline}</em></p>
              <h3 className='text-warning'>Overview</h3>
              <p>{detail?.overview}</p>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  )
}
