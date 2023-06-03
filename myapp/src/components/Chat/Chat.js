import { useState,useRef } from 'react'
import React from 'react'
import './Chat.css'
import m from '../../img/g.jpg'

function Chat() {
    const [data, setData] = useState([])
    const formRef = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault()
        let chatBot = ''

        switch (formRef.current[0].value) {
            case 'barev':
                chatBot = 'barev'
                break;
            case 'vonc es?':
                chatBot = 'lav, du?'
                break;
                case 'inch ka chka?':
                    chatBot = 'ban che du asa'
                    break;
            default:
                chatBot = 'es dzez chem haskanum'
                break;
        }
        setData([
            ...data,
            {
                id:new Date().getTime().toString(),
                txt:formRef.current[0].value,
                user:'me'
            },
            {
                id:new Date().getTime().toString() + 'you',
                txt: chatBot,
                user: 'you'
            }
            
        ])
        formRef.current[0].value = ''
    }
    const delItem = (id) => {
        setData([
            ...data.map(el => {
                if (el.id === id) {
                    return {
                        ...el,
                        txt: 'Deleted Message',
                        deletaed: true
                    }
                }
                return el
            })
        ])
    } 
    
    
  return (
    <>
        <div className="chat">
        <div className="contact_bar">
            <div className="pic_stark" />
            <div className="name">
                <div className='pics'>
                    <img src={m} alt="" />
                  <p>meri_gevorgyan</p> 
                </div>
             
             <p className='activv'> Active Now</p>
            </div>
        </div>
        <div className="messages" id="chat">
            {
                data.map(el => (<div key={el.id} class={'message ' + el.user} >
                                    {el.txt} 
                                    
                                    {!el.deletaed && (<><span 
                                    onClick={() => delItem(el.id)}
                                    style={{
                                        color: 'red',
                                        cursor: 'pointer'
                                    }}> X </span>
                                  </>)}
                                </div>))  
            }
        </div>
        </div>
        <div className="input">
            <form ref={formRef} onSubmit={submitHandler}>    
                <input placeholder="Type your message here!" type="text" /><i className="fas fa-microphone" />
                <button></button>    
            </form>
        </div>
    </>
  )
}

export default Chat