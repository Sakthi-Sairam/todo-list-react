import React from 'react'

export const Footer = () => {
  const style = {
    width: "100%",
    position: "relative",
    top: "70vh"
  }
  return (
    <footer className='bg-dark text-light py-3' style={style}>
    <p className='text-center'>Copyrights Mytodo.com</p>
  </footer>
  )
}
