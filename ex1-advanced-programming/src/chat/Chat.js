import './Chat.css';
import UploadFile from './UploadFile';
import Body from './Body';
import { useState, useEffect } from 'react';

function Chat({ friend }) {
    const [uploadFile, setUploadFile] = useState(false);
    const [chatsList, setList] = useState(friend.messagesHistory);
    const [new_message, set_message] = useState({ time: "", m: "" })
    const HandleAddMessage = function (e) {
        e.preventDefault();
        if (new_message.m != "") {
            setList([...chatsList, new_message]);
            // for deleting the input after sending the message.
            set_message({ time: "", m: "" });
        }
    }

    const getTime = e => {
        const today = new Date();
        return (today.getHours() + ':' + today.getMinutes())
    }

    const HandleMicrophone = e => {
        e.preventDefault();

    }


    return (
        <div className="chat">
            <div className="header">
                <span><img src={friend.picture} alt="photo" className="border border-1 rounded-circle images"></img></span>
                <h3>chat with {friend.nickname}</h3>
            </div>
            <div className="chatBody"><Body chat={chatsList} />
            </div>
            <div className="toolBar">
            <button onClick={()=>setUploadFile(true)}><i className="bi bi-link-45deg"></i></button>
                <div><UploadFile trigger={uploadFile} setUploadFile={setUploadFile}><h3>POPUP</h3></UploadFile></div>
                <form>
                    <input id="newM" placeholder='Write your message' type="text" onClick={() => setUploadFile(false)} onChange={e => set_message({ time: getTime(), m: e.target.value })} value={new_message.m} onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            HandleAddMessage(e);
                        }
                    }} />
                    <button className="button_option bi bi-mic" onClick={HandleMicrophone}></button>
                    <button className="button_option" onClick={HandleAddMessage} type="submit">Send <i className="bi bi-envelope"></i></button>
                </form>


            </div>
        </div>
    );
}

export default Chat;
