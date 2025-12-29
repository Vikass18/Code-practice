import React from 'react'
import './card.css'

const Card = (props) => {
    console.log(props)
  return (
    <div className='card'>
      <div className='coverImage'>
        <img src= {`${props.profile.coverImage}`} alt="" />
      </div>
      <div className='profileImage'>
          <img src= {`${props.profile.profileImage}`} alt="" />
      </div>
      <div className='details'>
         <h1>{props.profile.name}</h1>
         <p>{props.profile.role}</p>
         <h4>{props.profile.bio}</h4>
      </div>

      <div className='status'>
        <div className='like'>
            <h1>{props.profile.stats.likes}</h1>
            <p>likes</p>
        </div>
        <div className='post'>
            <h1>{props.profile.stats.posts}</h1>
            <p>post</p>
        </div>
        <div className='views'>
            <h1>{props.profile.stats.views}</h1>
            <p>views</p>
        </div>
      </div>
    </div>
  )
}

export default Card

