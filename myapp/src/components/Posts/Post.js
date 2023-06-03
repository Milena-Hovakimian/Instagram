import React, { useRef } from 'react'
import './Post.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import a from '../../img/a.jpg'
import d from '../../img/d.jpg'
import b from '../../img/b.jpg'
import h from '../../img/h.jpg'
import e from '../../img/e.jpg'
import c from '../../img/c.jpg'
import f from '../../img/f.jpg'
import lus from '../../img/lus.jpg'
import hertt from '../../img/hertt.jpg'
import heart from '../../img/heart.jpg'
import { useState} from 'react'





const Post = ({comments,id,username,img,disc}) => {
    const [comment, setComment] = useState('');
    const formRef =useRef(null)
    const handleSubmit = (e) => {
      e.preventDefault();
     console.log(formRef.current[0].value);
  
    setComment([
        ...comment,
        {
            id:new Date().getTime().toString(),
            txt:comment.txt,
            title:'$maria'+comment.txt,
        }
    ])
    formRef.current[0].value = ''
    }
   

    return (
        <div className='post'>
            <div className='post-header'>
                <NavLink to='/profile'>
                    <img alt='post-author' src = "https://i.pinimg.com/564x/20/84/1a/20841abb1b6e9d4ef5e6d220cb434595.jpg" />
                    <span>maria_gevorgyan</span>
                </NavLink>
            </div>   
            <img alt='post-img' src= "https://i.pinimg.com/736x/93/16/4e/93164eaddbcef1abc56533a1b10c3e01.jpg" />
            <div className='post-btns'>
                {/* <AiOutlineHeart size='30px'  className='heart-icon'/> */}
                <div className='img'></div>
                <FaRegComment size='28px' className='comment-icon' />
            </div>
            <div className='post-footer'>
                <div className='like-count'>
                    <b>250 likes</b>
                </div>
                <div className='description'>
                    <b>{username}</b> 
                </div>
                <div className='later'>
                    1 day ago
                </div>

                <form className='post-input'   ref={formRef} onSubmit={handleSubmit} onClick={comment.txt} >
                    <input type='text' placeholder='Add comment...'  />
                    <button >Post</button>
                </form>
                </div>
            <div className='post-header'>
                <NavLink to='/'>
                    <img alt='post-author' src='https://i.pinimg.com/564x/77/c1/f7/77c1f7bfeeb24acb84cf3309fefb04dd.jpg' />
                    <span>meri_gevorgyan</span>
                </NavLink>
            </div>   
            <img alt='post-img' src={b} />
            <div className='post-btns'>
                {/* <AiOutlineHeart size='30px'  className='heart-icon'/> */}
                <div className='img'></div>
                <FaRegComment size='28px' className='comment-icon' />
            </div>
            <div className='post-footer'>
                <div className='like-count'>
                    <b>20 likes</b>
                </div>
                <div className='description'>
                    <b>{username}</b> 
                </div>
                <div className='later'>
                    2 days ago
                </div>
               

                <div className='post-input'>
                    <input type='text' placeholder='Add comment...' />
                    <button onSubmit={comment.txt}>Post</button>
                </div>
            </div>
            <div className='post-header'>
                <NavLink to='/'>
                    <img alt='post-author' src='https://i.pinimg.com/564x/8e/11/2d/8e112dbaf9484e1ae12016da1432e81d.jpg' />
                    <span>nonn_25</span>
                </NavLink>
            </div>   
            <img alt='post-img' src={h} />
            <div className='post-btns'>
                {/* <AiOutlineHeart size='30px'  className='heart-icon'/> */}
                <div className='img'></div>
                <FaRegComment size='28px' className='comment-icon' />
            </div>
            <div className='post-footer'>
                <div className='like-count'>
                    <b>87 likes</b>
                </div>
                <div className='description'>
                    <b>{username}</b> 
                </div>
                <div className='later'>
                    4 days ago
                </div>
               

                <div className='post-input'>
                    <input type='text' placeholder='Add comment...' />
                    <button>Post</button>
                </div>
            </div>
            <div className='post-header'>
                <NavLink to='/'>
                    <img alt='post-author' src='https://i.pinimg.com/564x/d8/25/4e/d8254e4ab7a56071dbe1d2186df5e527.jpg' />
                    <span>armin_stepanyann</span>
                </NavLink>
            </div>   
            <img alt='post-img' src={e} />
            <div className='post-btns'>
                {/* <AiOutlineHeart size='30px'  className='heart-icon'/> */}
                <div className='img'></div>
                <FaRegComment size='28px' className='comment-icon' />
            </div>
            <div className='post-footer'>
                <div className='like-count'>
                    <b>65 likes</b>
                </div>
                <div className='description'>
                    <b>{username}</b> 
                </div>
                <div className='later'>
                    5 days ago
                </div>
               

                <div className='post-input'>
                    <input type='text' placeholder='Add comment...' />
                    <button>Post</button>
                </div>
            </div>
            <div className='post-header'>
                <NavLink to='/'>
                    <img alt='post-author' src='https://i.pinimg.com/564x/2c/64/d2/2c64d2ba6b5fee5ffbab1b93f1169fd3.jpg' />
                    <span>_999m_</span>
                </NavLink>
            </div>   
            <img alt='post-img' src={d} />
            <div className='post-btns'>
                {/* <AiOutlineHeart size='30px'  className='heart-icon'/>\ */}
                <div className='img'></div>
                <FaRegComment size='28px' className='comment-icon' />
            </div>
            <div className='post-footer'>
                <div className='like-count'>
                    <b>157 likes</b>
                </div>
                <div className='description'>
                    <b>{username}</b> 
                </div>
                <div className='later'>
                    7 days ago
                </div>
               

                <div className='post-input'>
                    <input type='text' placeholder='Add comment...' />
                    <button>Post</button>
                </div>
            </div>
            <div className='post-header'>
                <NavLink to='/'>
                    <img alt='post-author' src='https://i.pinimg.com/564x/d4/a7/d1/d4a7d165352abd18ea1f492df620e005.jpg' />
                    <span>lus_787</span>
                </NavLink>
            </div>   
            <img alt='post-img' src={lus} />
            <div className='post-btns'>
                {/* <AiOutlineHeart size='30px'  className='heart-icon'/> */}
                 <div className='img'></div>
                <FaRegComment size='28px' className='comment-icon' />
            </div>
            <div className='post-footer'>
                <div className='like-count'>
                    <b>50 likes</b>
                </div>
                <div className='description'>
                    <b>{username}</b> 
                </div>
                <div className='later'>
                    8 days ago
                </div>
               

                <div className='post-input'>
                    <input type='text' placeholder='Add comment...' />
                    <button>Post</button>
                </div>
            </div>
        </div>
    )
}

export default Post