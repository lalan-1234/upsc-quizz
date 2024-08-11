import React from 'react'
import './Sidebar.css'
import QuizzCategory from '../QuizzCategory/QuizzCategory'
import { Routes, Route } from 'react-router-dom'
import History from '../Page/History/History'
import Economic from '../Page/Economic/Economic'
import IndiaPolity from '../Page/IndianPolity/IndiaPolity'
import Enviornment from '../Page/Enviornment/Enviornment'
import Ethicks from '../Page/Ethicks/Ethicks'
import NationalNews from '../Page/InterNationalandNational/NationalNews'
import Geography from '../Page/Geography/Geography'
import Csat from '../Page/Csat/Csat'
import Artandculture from '../Page/Artandculture/Artandculture'
import Previousquestion from '../Page/Previousquestion/Previousquestion'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <QuizzCategory/>
       <Routes>
        <Route path='/history' element={<History/>}/>
        <Route path='/economic' element={<Economic/>}/>
        <Route path='/polity' element={<IndiaPolity/>}/>
        <Route path='/enviornment' element={<Enviornment/>}/>
        <Route path='/ethics' element={<Ethicks/>}/>
        <Route path='/national' element={<NationalNews/>}/>
        <Route path='/geography' element={<Geography/>}/>
        <Route path='/csat' element={<Csat/>}/>
        <Route path='/prevquestion' element={<Previousquestion/>}/>
        <Route path='/artandculture' element={<Artandculture/>}/>
       </Routes>
    </div>
  )
}

export default Sidebar
