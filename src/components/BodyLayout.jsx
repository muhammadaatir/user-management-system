import React, { useEffect, useState } from 'react'
import './style.css'
import UserDetails from './UserDetails'
import LeftPanel from './LeftPanel'
import axios from 'axios'

const BodyLayout = () => {
  const [users, setUsers] = useState('')
  const api = async () => {
    try {
        const response = await axios.get("https://reqres.in/api/users?page=1");
        setUsers(response.data.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}
useEffect(() => {
  api();
  console.log(users);
},[])
  return (
    <>
      <div className='main_body d-flex'>
        <div className='header_main d-flex align-items-center'>
          <h2 className='customers_heading'>CUSTOMERS</h2>
        </div>
        <LeftPanel />
        <div className='main_content w-100'>
          <div className='ms-3'>
            <button className='add_button p-2'>+ Add New Customer</button>
          </div>
          <div className='top_bar mt-2 p-2 mx-3'>
            <span></span>
            <span>Customer ID#</span>
            <span>Customer Name</span>
            <span>Email</span>
            <span></span>
          </div>
          <UserDetails id={'001'} name={'Joseph Arnold'} email={'user@gmail.com'}/>
          <UserDetails id={'001'} name={'Joseph Arnold'} email={'user@gmail.com'}/>
          <UserDetails id={'001'} name={'Joseph Arnold'} email={'user@gmail.com'}/>
          <UserDetails id={'001'} name={'Joseph Arnold'} email={'user@gmail.com'}/>
          <UserDetails id={'001'} name={'Joseph Arnold'} email={'user@gmail.com'}/>
          <UserDetails id={'001'} name={'Joseph Arnold'} email={'user@gmail.com'}/>
        </div>
      </div>
    </>
  )
}

export default BodyLayout