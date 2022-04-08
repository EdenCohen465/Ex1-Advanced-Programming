import './Chat.css';
import UploadOptions from './UploadOptions';
import Message from './Message';
import { useState, useEffect } from 'react';


function Chat({ friend }) {

    const [UploadOptionsPopup, setUploadOptionsPopup] = useState(false);
    const [messagesList, setList] = useState(friend.messagesHistory);
    // console.log(friend.messagesHistory)
    console.log(messagesList)
    const [new_message, set_message] = useState({ time: "", m: "" });

    const HandleAddMessage = function (e) {
        e.preventDefault();
        if (new_message.m != "") {
            friend.messagesHistory = [...friend.messagesHistory, new_message];
            setList([...messagesList, new_message]);
            // for deleting the input after sending the message.
            set_message({ time: "", m: "" });
        }
    }

    const HandleMicrophone = e => {
        e.preventDefault();

    }
    
    const HandleChangeMessage= e => {
        const today = new Date();
        const time = today.getHours() + ':' + today.getMinutes();
        set_message({ time: time, m: e.target.value });
    }
    
    const HandleSendMessage = (e) => {
        if (e.key === "Enter") {
            HandleAddMessage(e);
        }
    }
    
    return (
        <div className="chat">
            <div className="header">
                <span><img src={friend.photo} alt="photo" className="border border-1 rounded-circle images"></img></span>
                <h3>chat with {friend.nickname}</h3>
            </div>
            <div className="chatBody"><Message messagesList={messagesList} /></div>
            <div className="toolBar">
                <button className="bi bi-link-45deg" onClick={()=>setUploadOptionsPopup(true)}></button>
                <div><UploadOptions trigger={UploadOptionsPopup} setUploadOptionsPopup={setUploadOptionsPopup}></UploadOptions></div>
                <form>
                    <input id="newM" placeholder='Write your message' type="text" onChange={HandleChangeMessage}
                         value={new_message.m} onKeyPress={HandleSendMessage} />
                    <button className="button_option bi bi-mic" onClick={HandleMicrophone}></button>
                    <button className="button_option" onClick={HandleAddMessage} type="submit">Send <i className="bi bi-envelope"></i></button>
                </form>
            </div>
        </div>
    );
}

export default Chat;
