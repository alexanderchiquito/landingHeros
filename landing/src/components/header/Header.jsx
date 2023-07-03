import React from 'react';

import './header.scss';

import { logo } from '../../assets/images'

function Header() {
  return (
    <div className='header' >
        <div className="header__inner container">
            <div className="header__logo">
                <img src={logo} alt='' ></img>
            </div>
            <ul className="header__nav">
                <li><a href='https://www.leagueoflegends.com/es-es/' target='_blank' >overview</a></li>
                <li><a href='https://lolesports.com/es' target='_blank' >news</a></li>
                <li><a href='https://www.leagueoflegends.com/es-es/champions/' target='_blank' >champions</a></li>
                <li><a href='https://www.leagueoflegends.com/es-es/how-to-play/' target='_blank' >supports</a></li>
            </ul>
        </div>   
    </div>
  )
}

export default Header;