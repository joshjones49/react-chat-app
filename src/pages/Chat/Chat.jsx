import Chatbox from '../../components/Chatbox/Chatbox'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import './Chat.css'

const Chat = () => {
  return (
    <div className='chat pages' >

        <div className="chat-ctn">
            <LeftSidebar/>
            <Chatbox/>
            <RightSidebar/>
        </div>
      
    </div>
  )
}

export default Chat
