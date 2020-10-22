import React from 'react'

export default function Header(props) {
  return (
    <h1 className='airbnb--heading'>
      <img className='airbnb--logo' src={props.logo} alt='Logo' />
    </h1>
  )
}