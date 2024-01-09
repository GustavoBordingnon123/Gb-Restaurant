import React from 'react'
import './Button.css'

const Button = ({text, style }) => {
  return (
    <a className='custom__button' href='https://portifolio-gb.vercel.app' target='blank'>
        {text}
    </a>
  )
}

export default Button
