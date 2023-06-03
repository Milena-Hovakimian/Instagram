import React from 'react'
import './Profile.css'
import { IoAppsSharp } from 'react-icons/io5'


const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile-container'>
        <div className='profile-header'>
          <img src='https://i.pinimg.com/564x/20/84/1a/20841abb1b6e9d4ef5e6d220cb434595.jpg' alt='img' className='prof-img' />
          <div className='prof-info'>
            <div className='prof-nickname'>
           Maria
            </div>
            <div className='prof-followers'>
              <span><b>1</b> Posts</span>
              <span><b>342</b> Followers</span>
              <span><b>78</b> Following</span>
            </div>
            <div className='prof-name'>
              <span><b>𝓜</b></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className='public'>
          <div className='public-header'>
            <div>
              <IoAppsSharp className='app-icon' />Posts
            </div>
          </div>
          <div className='public-gallery'>
              <a href='#'><img src='https://i.pinimg.com/736x/93/16/4e/93164eaddbcef1abc56533a1b10c3e01.jpg' alt='img' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile