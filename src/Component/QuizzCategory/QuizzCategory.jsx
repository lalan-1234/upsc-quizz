import React from 'react'
import './QuizzCategory.css';
import {Link} from 'react-router-dom';
import image_History from '../../assets/history.png';
import image_economic from '../../assets/economy.png';
import image_enviornment from '../../assets/enviornment.png';
import image_ethics from '../../assets/ethics.png';
import image_polity from '../../assets/polity.png';
import image_geography from '../../assets/geography.png';
import image_news from '../../assets/news.png';
import image_previousquestion from '../../assets/previousquestion.png';
import image_culture from '../../assets/culture.png';
import image_csat from '../../assets/csat.png'

const QuizzCategory = () => {
  return (
    <div className='quizz-category'>
      <Link to="/history" style={{textDecoration: 'none', color:'black'}}>
      <div className='category-item'>
        <img src={image_History} alt=''/>
        <p>Indian History</p>
      </div>
      </Link>
      <Link to="/polity" style={{textDecoration: 'none', color:'black'}}>
      <div className='category-item'>
        <img src={image_polity} alt=''/>
        <p>Indian Polity</p>
      </div>
      </Link>
      <Link to="/economic" style={{textDecoration: 'none', color:'black'}}>
      <div className='category-item'>
        <img src={image_economic} alt=''/>
        <p>Economic</p>
      </div>
      </Link>
      <Link to="/Geography" style={{textDecoration: 'none', color:'black'}}>
      <div className='category-item'>
        <img src={image_geography} alt=''/>
        <p>Geography</p>
      </div>
      </Link>
      <Link to="/artandculture" style={{textDecoration: 'none', color:'black'}}>
      <div className='category-item'>
        <img src={image_culture} alt=''/>
        <p>Indian Art and Culture</p>
      </div>
      </Link>
      <Link to="/enviornment" style={{textDecoration: 'none', color:'black'}}>
      <div className='category-item'>
        <img src={image_enviornment} alt=''/>
        <p>Enviornment</p>
      </div>
      </Link>
      <Link to="/ethics" style={{textDecoration: 'none', color:'black'}}>
      <div className='category-item'>
        <img src={image_ethics} alt=''/>
        <p>Ethics</p>
      </div>
      </Link>
      <Link to="/national" style={{textDecoration: 'none', color:'black'}}>
      <div className='category-item'>
        <img src={image_news} alt=''/>
        <p>Current Affair</p>
      </div>
      </Link>
      <Link to="/csat" style={{textDecoration: 'none', color:'black'}}>
      <div className='category-item'>
        <img src={image_csat} alt=''/>
        <p>Csat</p>
      </div>
      </Link>
      <Link to="/prevquestion" style={{textDecoration: 'none', color:'black'}}>
      <div className='category-item'>
        <img src={image_previousquestion} alt=''/>
        <p> Previous Years Question</p>
      </div>
      </Link>
   </div>
  )
}

export default QuizzCategory
