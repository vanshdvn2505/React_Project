import React from 'react'
import '/components/css/Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <span>Basic Form using React.js</span>
      </div>
      <div className="more">
        <span>Home</span>
        <span>Contact Us</span>
        <span>About</span>
      </div>
    </div>
  );
}
export default Header;