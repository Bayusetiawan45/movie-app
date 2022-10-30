import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Card(props) {
  const navigate = useNavigate()
  const {title, release_date, poster_path, id} = props
  const imageUrl = `${process.env.REACT_APP_BASE_IMG_URL}${poster_path}`
  
  return (
    <div className='col col-auto text-center'>
      <div className='bg-transparent shadow-sm text-bg-dark mx-2 p-0 border-0 rounded-3' style={{
        maxWidth: "200px",
        height: "100%"
      }} 
      onClick={() => navigate(`/detail/${id}`)}
      >
        <img src={imageUrl} className='card-img w-100 rounded-3' alt='card img' style={{
          width: "100%",
          height: "350px",
          objectFit: "cover"
        }} />
        <p className='mt-2 m-0 h5'>{title}</p>
        <p className='text-warning'>{release_date}</p>
      </div>
    </div>
  )
}
