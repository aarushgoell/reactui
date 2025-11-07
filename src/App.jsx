import { useState } from 'react'
import Navbar from './Navbar'
import MidSec from './MidSec'
import DealSec from './DealSec'


function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div className='w-100 vh-100 ble'>
      <MidSec></MidSec>
      <DealSec></DealSec>
      </div>
    </div>
  )
}

export default App
