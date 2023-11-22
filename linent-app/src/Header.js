import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import { useState } from 'react';


function Header() {
  const [inputSearch,setInputSearch]=useState("");
  return(
   <div className='header'>

    <div className='header_left'>
    <MenuIcon/>
      <Link to="/">
      <img className='header_logo'
    src="https://www.youtube.com/yts/img/yt_1200-vfl4C3T0K.png" alt="YouTube Logo" 
    />
      </Link>
   
    
    </div>
    
     <div className='header_input'>
<input type='text' placeholder='Search' value={inputSearch} onChange={(e)=>{setInputSearch(e.target.value)}}/>
<Link to={`/search/${inputSearch}`}>
<SearchIcon className='header_inputButton'/>
</Link>
   </div>


   <div className='header_icons'>
<VideoCallIcon className='header_icon'/>
<AppsIcon className='header_icon'/>
<NotificationsIcon className='header_icon'/>
<Avatar alt="Remy Sharp" src="https://www.youtube.com/yts/img/yt_1200-vfl4C3T0K.png" />
    </div>

   </div>
   
  )
}

export default Header;