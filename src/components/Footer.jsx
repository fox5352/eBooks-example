import React from 'react'

export const Footer = () => {
  return (
    <footer className='flex justify-between w-3/4 mx-auto mb-6 px-2 py-4 rounded-lg shadow-lg'>
      <p>{new Date().getFullYear() } CodeBooks. All Rights Reserved</p>
      <div className='space-x-2'>
        {/* TODO: add icons and links to github likedIn */}
        <a href='/'>git</a>
        <a href='/'>linkedIn</a>
      </div>
    </footer>
  )
}
