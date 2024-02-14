import React from 'react'
import '../Header/Header.css'
import headerpic from '../Assets/headerpic.png'
import cuppic from '../Assets/cuppic.png'

export const Header = () => {
  return (
    <div className='header'>
        <div className='header-heading'>
            <p className='header-first-text'>Make better <br />coffee <img className='cup' src={cuppic} alt="" /></p>
            <p className='header-second-text'>why learn how to blog?</p>
        </div>
        <img className='headerpic' src={headerpic} alt="" />
    </div>
  )
}
