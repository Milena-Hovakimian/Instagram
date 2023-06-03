import React from 'react'
import Post from './Post'
import './Posts.css'


const Posts = () => {

  return (
    <div className='posts'>
      <div className='story-block'>
        <div className='story'>
          <img src='https://i.pinimg.com/564x/6e/05/1f/6e051f011a9bae3a0c345e6e2f3fb655.jpg' alt='story-img' />
          <span>_999m_</span>
        </div>
        <div className='story'>
          <img src='https://i.pinimg.com/564x/8c/d5/08/8cd50844185f0b452a1c08d1f7b57a4b.jpg' alt='story-img' />
          <span>lus_787</span>
        </div>
        <div className='story'>
          <img src='https://i.pinimg.com/564x/00/40/1e/00401ea81265e54273c10cf36ec43eae.jpg' alt='story-img' />
          <span>meri_gevorgyan</span>
        </div>
        <div className='story'>
          <img src='https://i.pinimg.com/564x/f7/ee/24/f7ee24655c4459aee786eb718881fe6e.jpg' alt='story-img' />
          <span>lil_asrian</span>
        </div>
        <div className='story'>
          <img src='https://i.pinimg.com/564x/ad/0f/da/ad0fdae00206ba3114f5b995b07a517f.jpg' alt='story-img' />
          <span>ann_14</span>
       </div>
      </div>
      <Post/>
    </div>
  )
}

export default Posts