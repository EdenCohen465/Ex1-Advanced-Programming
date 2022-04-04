import './Body.css';
import { useState } from 'react';

function Body({ friend }) {
    const [chatsList, setList] = useState(friend.messagesHistory);
    const chatHistory =
        chatsList.map(message => {
            return (<div className="message" key={message} > <span className="time">{message.time}</span>
                <p><span className="text">{message.m}</span></p></div>
            );
        }
        );
    const HandleAddMessage = function (e) {
      //  e.preventDefault();
        const message = document.getElementById('newMessage');
        const t ="10:00";
        const newM = {time:t, m:message}
        setList([newM, ...chatsList]);
            
    }
    return (
        <div>
            <div>
                <div className="chat">
                    <div>{chatHistory}</div></div>
                <div className="newMessage">
                    <input type="text" placeholder="write your messege" aria-label="Recipient's username" id="newMessage"/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={HandleAddMessage}>Button</button>
                </div>
            </div>

        </div>
    );
}

export default Body;