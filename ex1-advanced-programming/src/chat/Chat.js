import './Chat.css';
import UploadFile from './UploadFile';
import Body from './Body';
import { useState } from 'react';
import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';

function Chat({ friend }) {
    const [uploadFile, setUploadFile] = useState(false);
    const [chatsList, setList] = useState(friend.messagesHistory);
    const [new_message, set_message] = useState({ time: "", m: "" })
    const HandleAddMessage = function (e) {
        e.preventDefault();
        setList([...chatsList, new_message]);
        // for deleting the input after sending the message.
        set_message({ time: "", m: "" });
    }

    const getTime = e => {
        const today = new Date();
        return ( today.getHours() + ':' + today.getMinutes())
    }

    const HandleMicrophone = e => {
        e.preventDefault();

    }

    return (
        <div className="chat">
            <div className="header">
                <h3>chat with {friend.nickname}</h3>
            </div>
            <div className="chatBody"><Body chat={chatsList} />
            </div>
            <div className="toolBar">
                {/*
                CAMERA= <i class="bi bi-camera"></i>
                <i class="bi bi-envelope"></i>
                file = <i class="bi bi-file-earmark-text"></i>
                <i class="bi bi-image"></i>
                microphone= <i class="bi bi-mic"></i>
                
                */}
                <button onClick={()=>setUploadFile(true)}><i className="bi bi-link-45deg"></i></button>
                <div><UploadFile trigger={uploadFile} setUploadFile={setUploadFile}><h3>POPUP</h3></UploadFile>
                </div>
                <form>
                    <input id="newM" placeholder='Write your message' type="text" onChange={e => set_message({ time: getTime(), m: e.target.value })} value={new_message.m}/>
                    <button className="bi bi-mic" onClick={HandleMicrophone}></button>
                    <button onClick={HandleAddMessage} type="submit">Send <i className="bi bi-envelope"></i></button>
                </form>


            </div>
        </div>
    );
}

export default Chat;