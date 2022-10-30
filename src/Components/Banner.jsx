import React from 'react'

export default function Banner(props) {
  const { movie } = props
  const posterUrl = `https://www.themoviedb.org/t/p/w440_and_h660_face${movie?.poster_path}`
  const backdropUrl = `https://www.themoviedb.org/t/p/w440_and_h660_face${movie?.backdrop_path}`
  return (
    <div className='position-relative' style={{
      backgroundImage: `url(${backdropUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      borderBottomLeftRadius: "3rem",
      borderBottomRightRadius: "3rem",
      boxShadow: "0 10px 10px rgba(14, 255, 46, 0.3)"
    }}>
      <div className='container row p-5 mt-5'>
        <div className='col'>
          <img src={posterUrl} alt='banner' className='w-100' style={{
            height: "600px",
            objectFit: "contain",
            objectPosition: "left"
          }} />
        </div>
        <div className='col d-flex flex-column justify-content-center text-light'>
          <h1 style={{
            fontSize: "4rem"
          }}>{movie?.title}</h1>
          <p> Release Date {movie?.release_date}</p>
          <h3 className='text-warning'>Overview</h3>
          <p >{movie?.overview}</p>
        </div>
      </div>
    </div>
  )
}
