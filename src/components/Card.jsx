import React from 'react'
// import avatar from '../images/avatar.png'

const Card = (props) => {
  const { title, link, snippet,url } = props;
  return (
    <div className='card-body'>
        <div className='top'>
            <h4>{title}</h4><p>{url}</p>
        </div>
        <div className='bottom'>
            <h3><a href={link}>{snippet.slice(0,50)}</a></h3>
            <p>{snippet}</p>
        </div>
    </div>
  )
}

export default Card