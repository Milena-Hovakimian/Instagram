import React from 'react'
import { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { RiHome2Line } from 'react-icons/ri'
import { TbBrandMessenger } from 'react-icons/tb'
import { BiMessageSquareAdd, BiSearch } from 'react-icons/bi'
import { Search } from '../../Search/Search'

const Header = () => {
  const [user,setUser]=useState("")
  const handleChange = (e)=>{
    setUser(e.target.value);
  }
  const handleSubmit =(searchTerm)=>{
    setUser(searchTerm)
   console.log('search',searchTerm);
  }

//   (function serch(){
//     const list = document.querySelector('.header .header-search .list');
//     const input = document.querySelector('.header .header-search input');
//     if (input.value == '') {
//       list.style.opacity=0;
//     }else{
//       list.style.opacity=1;
//     }
// }) ()

  return (
    <div className='header'>
      <NavLink to='/'>
      <div className='header-logo'>
        <img alt='logo' src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' />
      </div>
      </NavLink>
      <div className='header-search'>
        <BiSearch color='grey' size='25px' className='search-icon' onClick={()=>handleSubmit(user)}/>
        <input type='text' placeholder='Search' value={user} onChange={handleChange}  />
      </div>
      <div className='list'>
        
      {Search.filter(item =>{
        const searchTerm=user.toLowerCase();
        const instname=item.inst_name.toLowerCase();
        return  searchTerm && instname.includes(searchTerm) && instname!==searchTerm
      })
      .slice(0,10)
      .map((item)=> <div className='listt' onClick={()=>handleSubmit(item.inst_name)}>{item.inst_name}
    
      </div>)}
      </div>

      <div className='header-links'>
        <NavLink to='/'><RiHome2Line size='25px' /></NavLink>
        <NavLink to='/messenges'><TbBrandMessenger size='25px' /></NavLink>
        <NavLink to='/add-img'><BiMessageSquareAdd size='25px' /></NavLink>
        <NavLink to='/log'></NavLink>
        <NavLink to='/profile'>
          <img className='profile-img' alt='profile-img' src='https://i.pinimg.com/564x/20/84/1a/20841abb1b6e9d4ef5e6d220cb434595.jpg' />
        </NavLink>
      </div>
    </div>
  )
}

export default Header