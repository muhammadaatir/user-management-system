import React, { useState } from 'react'
import './style.css'
import logo from '../assets/images.png';
import customerIcon from '../assets/customers-icon.png'
import left from '../assets/left.png'

const LeftPanel = () => {
  const [panel, setPanel] = useState(true)
  const handleClick = () => {
    if (panel) {
        setPanel(false)
    } else {
        setPanel(true)
    }
  }
  return (
    <>
      <div className={`left_panel p-4 ${!panel ? 'close_panel' : ''}`}>
        <span onClick={handleClick} className='left_bar_handle'>
          <img src={left} className='left-icon' width={20} height={20} alt="" />
        </span>
        <img src={logo} alt="" />
        <div className='customers_button mt-5 p-2 d-flex align-items-center w-75 mx-auto'>
          <img src={customerIcon} width={20} height={20} alt="" />
          <span className='ms-4'>
            CUSTOMERS
          </span>
        </div>
      </div>
    </>
  )
}

export default LeftPanel