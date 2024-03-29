import React from 'react'
import '../SeeMoreBTN/SeeMoreBTN.css'
import { useNavigate } from 'react-router-dom';


export const SeeMoreBTN = () => {
    const navigate = useNavigate();

  
    const handleSeeMoreClick = () => {
      navigate('/articles');
      
    };



  return (
    <div onClick={() => {}} className='seemoreBTN'>
        <div></div>
        <div onClick={handleSeeMoreClick} className='seemorediv'>
          <p>See more</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_6_142)">
            <path d="M9.99999 1.66663C14.6 1.66663 18.3333 5.39996 18.3333 9.99996C18.3333 14.6 14.6 18.3333 9.99999 18.3333C5.39999 18.3333 1.66666 14.6 1.66666 9.99996C1.66666 5.39996 5.39999 1.66663 9.99999 1.66663ZM10.8333 9.99996V6.66663H9.16666V9.99996H6.66666L9.99999 13.3333L13.3333 9.99996H10.8333Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_6_142">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </div>
    </div>
  )
}
