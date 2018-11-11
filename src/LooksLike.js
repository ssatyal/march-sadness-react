import React from 'react'

const LooksLike = ({match}) => {
  // console.log('props?',item)
  console.log('matchy',match)
  const { name, looks_like, photo_url } = match
  return (
    <h1>{match.itemId}</h1>
    // <div>
    //   <img src={photo_url}/>
    //   <h3>{name}</h3>
    //   <p>{looks_like}</p>
    // </div>
  )
}

export default LooksLike
