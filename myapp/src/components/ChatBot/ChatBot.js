import React, {useRef, useState} from "react";
import './ChatBot.css'
import lus from '../../img/lus.jpg'
import telee from '../../img/telee.png'
import video from '../../img/video.png'
import harc from '../../img/harc.png'
import a from '../../img/a.jpg'
import m from '../../img/m.jpg'

function ChatBot() {
    const [data,setData] = useState([])
    const formRef = useRef(null)

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
    
    // const edtItem = (txt, id) => {
    //     setEditInfo({
    //         txt, id
    //     })
    //     formRef.current[0].value = txt
    //     formRef.current[0].focus()
    // }
    const submitHandler = (e) =>{
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
        formRef.current.value = ''
    }
        return(
            <div className="box">
                <form className="chatForm" ref={formRef} onSubmit={submitHandler}>
                <div className="name">
                    <div className="text">
                        <p>maria_aznavuryan</p>
                    </div>
                    <div className="anun">
                    <p>lus_787</p>
                    <p>Active Now</p>
                    </div>
                    <div className="icon">
                        <img src={telee} alt="" />
                        <img src={video} alt="" />
                        <img src={harc} alt="" />
                    </div>
                </div>
                <div className="people">
                    <div className="item">
                        <img src={lus} alt="img" />
                        <p>lus_787</p>
                    </div>
                    <div className="item">
                        <img src={a} alt="img" />
                        <p>ann_14</p>
                    </div>
                    <div className="item">
                        <img src={m} alt="img" />
                        <p>_999m_</p>
                    </div>
                    <div className="item">
                        <img src={lus} alt="img" />
                        <p>lus_787</p>
                    </div>
                    <div className="item">
                        <img src={lus} alt="img" />
                        <p>lus_787</p>
                    </div>
                    <div className="item">
                        <img src={lus} alt="img" />
                        <p>lus_787</p>
                    </div>
                    <div className="item">
                        <img src={lus} alt="img" />
                        <p>lus_787</p>
                    </div>
                    <div className="item">
                        <img src={lus} alt="img" />
                        <p>lus_787</p>
                    </div>
                    <div className="item">
                        <img src={lus} alt="img" />
                        <p>lus_787</p>
                    </div>
                    <div className="item">
                        <img src={lus} alt="img" />
                        <p>lus_787</p>
                    </div>
                </div>
                <div className="send">
                <input className="chatinp" type="text" />
                <button className="chtBtn">Send</button>
                </div>
                </form>
                <div>
                    {
                         data.map(el => (<div key={el.id } class={'message ' + el.user} 
                         style={{}}
                         
                         >
                         {el.txt} 
                         
                         {!el.deletaed && (<><span 
                         onClick={() => delItem(el.id)}
                         style={{
                             color: 'red',
                             cursor: 'pointer',
                            //  position: 'absolute',
                            //  left: '20%'
                         }}> X </span>
                        </>)}
                     </div>))  
                    }
                </div>
            </div>
        )
}
export default ChatBot