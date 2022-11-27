import React from 'react';
import { SubHeading } from '../../components';

import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour'/>
      <h1 className='app__header-h1'>The key to fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem'}}>One of New York City’s most vibrant event venues, Gericht Restaurant New York City, can host semi-private events in unique, design-driven spaces all capturing the distinctive energy and vibe of the world-famous Gericht Restaruant.</p>
      <button className='custom__button' href="#menu">Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='Salmon food'/>
    </div>

  </div>
);

export default Header;
