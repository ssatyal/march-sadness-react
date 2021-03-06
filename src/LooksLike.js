import React from 'react'

const LooksLike = (props) => {
  const { name, looks_like, photo_url } = props
  return (
    <div>
      <img src={photo_url}>
      <h3>{name}</h3>
      <p>{looks_like}</p>
    </div>
  )
}
