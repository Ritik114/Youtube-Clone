import React from 'react'
import Avatar from '@mui/material/Avatar'
import './VideoCard.css'

function VideoCard({image,title,channel,views,timestamp,channelImage}) {
  return (
    <div className='videoCard'>
      <img  className='videoCard_thumbnail' src={image} />
      <div className='videoCard_info'>
        <Avatar className='videoCard_avatar'
        src={channelImage}
        />
<div className='video_text'>
    <h4>{title}</h4>
    <p>{channel}</p>
    <p>{views}.{timestamp}</p>
</div>
      </div>
    </div>
  )
}

export default VideoCard
