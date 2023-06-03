
import React, { useState } from 'react'
import './AddImg.css'
import {GrGallery} from 'react-icons/gr'
import { Navigate, useNavigate } from "react-router-dom";


const AddImg = () => {
  const navigate = useNavigate();

  return (
    <div className='add-img' >
      <h1>Создание публикации</h1>
      <GrGallery size='60px' className='gall-icon' />
      <form className='add'>
      <input className='inp1' type="text" placeholder='link' />
      <input className='inp2' type="text" placeholder='description' />
      <button onClick={navigate('/profile')}>Add a file</button>
    
      </form>
    </div>
    
  )
}

export default AddImg

