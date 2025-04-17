import React from 'react';
import Button from '../../ui/Button'; // adjust the path based on your folder structure

function Header() {
  return (
    <div className='p- shadow-sm flex justify-between items-center px-5'>   
    <img src='/logo.svg' />
    <div>
       <button>Sign In</button>
    </div>

    </div>
  
  )
}

export default Header;