import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter'/>
    </div>

    <div className='app__aboutus-content flex__center'>
    
      <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About us</h1>
          <img src={images.spoon} alt='about spoon'/>
          <p className='p__opensans'>Since its creation in 2008, Gericht has been a precursor of a true concept of the Art of Living, with converging influences from the Pacific Rim movement.</p>
          <button type='button' className='custom__button'>Know more</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='knife'/>
      </div>

      <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our history</h1>
          <img src={images.spoon} alt='about spoon'/>
          <p className='p__opensans'>Born from the visionary imagination of its founder Francisco Vergara, then owner in Chile of the famous LeJotua and in perpetual search for novelties through his numerous trips, notably to California, this restaurant-bar-lounge in the very chic Faubourg St Honoré, quickly became a “Must” of Santiago nights.

</p>
          <button type='button' className='custom__button'>Know more</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
