import React from 'react'
import './style.css'
import dummy from '../assets/dummy.png'

const UserDetails = ({id, name, email, imageLink}) => {
  return (
    <>
        <div className='user_div mx-3 my-3 p-2'>
            <span className='image_span'><img src={dummy} alt="" /></span>
            <span>{id}</span>
            <span>{name}</span>
            <span>{email}</span>
            <span className='d-flex justify-content-around'>              
              <button className='delete_button'>Delete</button>
              <button className='edit_button'>Edit</button>
            </span>
        </div>
    </>
  )
}

export default UserDetails