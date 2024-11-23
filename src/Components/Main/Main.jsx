import React from 'react'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'
import { assets } from '../../assets/assets'

function Main() {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p> <span>  Hello,Dev</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque neque sint magni perspiciatis adipisci doloremque repellendus qui voluptate expedita sed, aliquam animi praesentium quidem velit quos, ullam veritatis voluptatem officia.</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque neque sint magni perspiciatis adipisci doloremque repellendus qui voluptate expedita sed, aliquam animi praesentium quidem velit quos, ullam veritatis voluptatem officia.</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque neque sint magni perspiciatis adipisci doloremque repellendus qui voluptate expedita sed, aliquam animi praesentium quidem velit quos, ullam veritatis voluptatem officia.</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque neque sint magni perspiciatis adipisci doloremque repellendus qui voluptate expedita sed, aliquam animi praesentium quidem velit quos, ullam veritatis voluptatem officia.</p>
                    <img src={assets.code} alt="" />
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Main
