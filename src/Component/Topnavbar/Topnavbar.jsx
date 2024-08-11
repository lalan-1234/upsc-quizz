import React from 'react'
import './Topnavbar.css'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Myquizz from '../Myquizz/Myquizz'
import Login from '../Login/Login'
import Createquizz from '../CreateQuizz/Createquizz'
import { Routes, Route } from 'react-router-dom'

const Topnavbar = () => {
  return (
    <div className='topnavbar'>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/myquizz' element ={<Myquizz/>} />
        <Route path='/login' element ={<Login/>} />
        <Route path='/createquizz' element ={<Createquizz/>} />
      </Routes>
    </div>
  )
}

export default Topnavbar
