import React from 'react'
import './SearchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideosRow from './VideosRow';
function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage_filter'>
      
        <TuneIcon/>
        <h2>Filter</h2>
        
      </div>
      <hr/>
       <ChannelRow
        image=""
        channel="Bros Sup"
        verified
        subs="0"
        noOfVideos="12"
        description="YOU CAN BE HERE"
        />
        <hr/>
        <VideosRow
        views="1.4M"
        subs="0"
        description="YOU CAN BE HERE"
        timestamp="12 seconds ago"
        channel="Bros Sup"
        title="Let's Build"
        image="image.jpg"
        />
        <VideosRow
        views="1.4M"
        subs="0"
        description="YOU CAN BE HERE"
        timestamp="12 seconds ago"
        channel="Bros Sup"
        title="Let's Build"
        image="image.jpg"
        />
        <VideosRow
        views="1.4M"
        subs="0"
        description="YOU CAN BE HERE"
        timestamp="12 seconds ago"
        channel="Bros Sup"
        title="Let's Build"
        image="image.jpg"
        />
        <VideosRow
        views="1.4M"
        subs="0"
        description="YOU CAN BE HERE"
        timestamp="12 seconds ago"
        channel="Bros Sup"
        title="Let's Build"
        image="image.jpg"
        />
        <VideosRow
        views="1.4M"
        subs="0"
        description="YOU CAN BE HERE"
        timestamp="12 seconds ago"
        channel="Bros Sup"
        title="Let's Build"
        image="image.jpg"
        />
    </div>
  )
}

export default SearchPage
