import './Chatbox.css'

import assets from '../../assets/assets'

const Chatbox = () => {
  return (

    <div className='chatbox' >
        {/*TOP SECTION ===============*/}
        <div className="chat-user">
            <img src={assets.profile_img} alt="" />
            <p>Rich Sanford <img className='dot' src={assets.green_dot} alt="" /></p>
            <img src={assets.help_icon} className='help' alt="" />
        </div>

        {/* MESSAGE SECTION =============== */}
        <div className="chat-msg">

            <div className="s-msg sr-msg">
                <p className="msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt saepe et harum rem provident minima odio perspiciatis, repellendus aut recusandae non nihil commodi ab corrupti, voluptatum labore delectus alias nesciunt!</p>

                <div>
                    <img src={assets.profile_img} alt="" />
                    <p>2:30pm</p>
                </div>
            </div>

            <div className="s-msg">
                <img className='msg-img' src={assets.pic1} alt="" />

                <div>
                    <img src={assets.profile_img} alt="" />
                    <p>2:30pm</p>
                </div>
            </div>

            <div className="r-msg">
                <p className="msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt saepe et harum rem provident minima odio perspiciatis, repellendus aut recusandae non nihil commodi ab corrupti, voluptatum labore delectus alias nesciunt!</p>
                
                <div>
                    <img src={assets.profile_img} alt="" />
                    <p>2:30pm</p>
                </div>
            </div>

        </div>

        {/* BOTTOM SECTION ============= */}
        <div className="chat-input">
            <input type="text" placeholder='message' />
            <input type="file" id='image' accept='image/png, image/jpeg' hidden/>
            <label htmlFor="image">
                <img src={assets.gallery_icon} alt="" />
            </label>
            <img src={assets.send_button} alt="" />
        </div>
    </div>
  )
}

export default Chatbox
