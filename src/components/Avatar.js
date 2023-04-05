import React from 'react';
import avatarStyle from '../assets/styles/Avatar.module.css';

const Avatar = ({src, height = 45, text}) => {
  return (
  <span>
    <img 
        className={avatarStyle.Avatar} 
        src={src}
        height={height}
        width={height}
        alt='Avatar' />
        {text}
  </span>
  )
}

export default Avatar