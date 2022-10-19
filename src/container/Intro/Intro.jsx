import React from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import {meal} from '../../constants'

import './Intro.css';

const Intro = () => {
  const vidRef = React.useRef();
  
  return (
  <div className='app__vide'>
    <video
      src={meal}
      ref={vidRef}
      type='video/mp4'
      loop
      controls={false}
      muted
    />
    Intro
  </div>
)};

export default Intro;
