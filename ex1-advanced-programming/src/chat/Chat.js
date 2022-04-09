import './Chat.css';
import UploadOptions from './UploadOptions';
import Message from './Message';
import { useState} from 'react';
import FriendDetails from './FriendDetails';

function InitialChat({setList, friend, messagesList}){
    console.log('last: '+FriendDetails.lastFriend.nickname);
    console.log('current: '+FriendDetails.thisFriend.nickname);
     if(FriendDetails.updated==false&& friend.nickname!="" && FriendDetails.thisFriend.nickname!='' && FriendDetails.lastFriend.nickname != FriendDetails.thisFriend.nickname){
        console.log('message history of this frieng:');
        console.log(friend.messagesHistory);
        setList(friend.messagesHistory);
        console.log(messagesList);
        FriendDetails.updated = true;

    }}

function Chat({ friend, handleExit }) {
    const [UploadOptionsPopup, setUploadOptionsPopup] = useState(false);
    const [messagesList, setList] = useState([]);
    

    const [new_message, set_message] = useState({ time: "", m: "", type: "" });
    const HandleAddMessage = function (e) {
        e.preventDefault();
        if (new_message.m != "") {
            friend.messagesHistory = [...friend.messagesHistory, new_message];
            setList([...messagesList, new_message]);
            // for deleting the input after sending the message.
            set_message({ time: "", m: "", type: "" });
        }
    }

    const HandleMicrophone = e => {
        e.preventDefault();

    }
    
    const HandleChangeMessage= e => {
        const today = new Date();
        const time = today.getHours() + ':' + today.getMinutes();
        set_message({ time: time, m: e.target.value, type: "text" });
    }
    
    const HandleSendMessage = (e) => {
        if (e.key === "Enter") {
            HandleAddMessage(e);
        }
    }
    
    // handle upload inmage and videos functions #################################################################
    const inputs = [
        { id: "selectPhoto", val: "Upload an image", type: "image" },
        { id: "selectVideo", val: "Upload a video", type: "video" }
    ];

    var photo = null;
    const photoHandler = (e) => {
        photo = e.target.files[0];
    }

    const video = null;
    const videoHandler = (e) => {
        video = e.target.files[0];
    }

    const HandleUpload = (e, id) => {
        e.preventDefault();
        const today = new Date();
        const time = today.getHours() + ':' + today.getMinutes();
        if (id == "selectPhoto") {
            set_message({ time: time, m: photo, type: "photo" });
            HandleAddMessage(e);
        } else {
            set_message({ time: time, m: video, type: "video" });
            HandleAddMessage(e);
        }
        handleExit(id, '');
    }

    const imageOrVideoTags = inputs.map((input, key) => {
        return (
            <div key={key} id={input.id} className="container UploadImageOrVideo">
                <div className="row">
                    <div className="col-10 padding">{input.val}</div>
                    <div id="x-button" className='col-2'>
                        <button className="button bi bi-x-circle btn btn-outline-secondary" onClick={() => { handleExit(input.id, '') }}> </button>
                    </div>
                </div>
                <form className="form-floating mb3" onSubmit={(e) => HandleUpload(e, input.id)}>
                    <div className="form-floating mb-3 row"> {(input.type == "image") ? (
                        <input type="file" accept="image/*" onChange={photoHandler} required></input>
                    ) : (
                        <input type="file" accept="video/*" onChange={videoHandler} required></input>
                    )}
                    </div>
                    <div className="row">
                        <button className="btn btn-outline-secondary" id="addContact" type="submit">Add</button>
                    </div>
                </form>
            </div>
        );
    });
    //#############################################################################################################
    
    return (
        <div>
            <div className="chat">
                <div className="header">
                    <span><img src={friend.photo} alt="photo" className="border border-1 rounded-circle images"></img></span>
                    <h3>chat with {friend.nickname}</h3>
                </div>
                <InitialChat friend={friend} setList={setList} messagesList={messagesList}/>
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
            <div>
                      {imageOrVideoTags}
            </div>
        </div>
        </div>
    );
}

export default Chat;
