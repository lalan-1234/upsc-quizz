import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './Component/Sidebar/Sidebar';
import Topnavbar from './Component/Topnavbar/Topnavbar';


const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Topnavbar/>
      <Sidebar/>
      </BrowserRouter>
  
 

    </div>
  );
};

export default App;