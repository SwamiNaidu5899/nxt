import React from 'react'
import Feedback from 'react-bootstrap/esm/Feedback'

const OnlineSupport = () => {

    let data = [
        {
            title : 'Free Shpping',
            desc : 'When you spend $100+',
            cls : 'bi bi-cart3'
        },
        {
            title : 'Feedbacks',
            desc : '100% Customer',
            cls : 'bi bi-chat-right-dots'
        },
        {
            title : 'Free Return',
            desc : '30 Day Returns Policy',
            cls : 'bi bi-arrow-repeat'
        },
        {
            title : 'Secure System',
            desc : '100% Secure Gaurantee',
            cls : 'bi bi-currency-dollar'
        },
        {
            title : 'Online Supports',
            desc : '24/7 Dedicated Support.',
            cls : 'bi bi-headset'
        }
    ]

  return (
    <div className='online-support-main'>
        {
            data.map((eachItem) => {
                return(
                    <div className='each-one'>

                    <div className='support-img'>
                     <i className={eachItem.cls}></i>
                    </div>
                    <div className='support-data'>
                        <h3>{eachItem.title}</h3>

                        <p>{eachItem.desc}</p>
                    </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default OnlineSupport