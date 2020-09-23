import React from 'react';
import './App.css';
import Navbar from './profile/Navbar'
import ProfilPhoto from './profile/ProfilPhoto'
import Fullname from './profile/FullName'
import Adress from './profile/Address'

function Main() {
  return (
    <div className="Main">
     <Navbar title = 'My profile App'/>
     <div className='content'>
     <ProfilPhoto/>
     <Fullname/>
     <Adress/>
     </div>
    </div>
  );
}

export default Main;
