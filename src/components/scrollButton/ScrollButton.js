// IMPORTS
import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

// SETS UP SCROLL TO TOP BUTTON COMPONENT
const ScrollButton = (props) =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {

    const scrolled = document.documentElement.scrollTop;
    
    scrolled <= 300 ? setVisible(false) : setVisible(true);
  };
  
  const scrollToTop = () =>{

    window.scrollTo({

      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behavior
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (

    <FaArrowCircleUp 
        onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}}
        className='scrollUp'
    />
  );
};
  
export default ScrollButton;
