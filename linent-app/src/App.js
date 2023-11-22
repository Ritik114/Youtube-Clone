import Header from './Header';
import Sidebar from './Sidebar';
import './App.css'
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import SearchPage from './SearchPage';

function App(){
  return(
<div className='app'>

<Router>
<Header/>
  <Routes >
  
    <Route path='/' element={<div>
    <div className='app_page'> 
    <Sidebar/>
    <RecommendedVideos/>
      </div> </div>
  }>

    </Route>
    <Route path='/search/:searchTerm'element={<div>  <div className='app_page'> 
    <Sidebar/>
    <SearchPage/>
      </div> </div>} >
    

    </Route>

  </Routes >
  </Router>

</div>
  )
}
export default App;
 