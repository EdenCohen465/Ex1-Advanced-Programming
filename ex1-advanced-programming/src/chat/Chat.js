import './Chat.css';
import UploadOptions from './uploadOptions/UploadOptions';
import Message from './Message';
import { useState} from 'react';
import FriendDetails from './FriendDetails';
import usersList from '../UsersList';
import Record from './record/Record';
import Helpers from './Helpers';
var friend_messages_history = null;

function InitialChat({setList, friend, connected_user}){
     if(FriendDetails.updated==false&& friend.username!="" && FriendDetails.thisFriend!='' && FriendDetails.lastFriend != FriendDetails.thisFriend){
        setList(usersList.get(connected_user.username).friendsMessagesHistory.get(friend.username));
        friend_messages_history = friend.friendsMessagesHistory.get(connected_user.username);
        FriendDetails.updated = true;
    }
}

function Chat({ friend, handleExit, connected_user }) {
    const [UploadOptionsPopup, setUploadOptionsPopup] = useState(false);
    const [messagesList, setList] = useState([]);
    const [new_message, set_message] = useState({ date: "", time: "", message: "", displayMessage:"", type: "", iSent: "" });
    const [useMicrophone, setUseMicrophone] = useState(false);

    const HandleAddMessage = function (e) {
        e.preventDefault();
        setUseMicrophone(false);
        setUploadOptionsPopup(false);
        if (new_message.message != "") {
            const newList = [...messagesList, new_message];
            setList(newList);
            usersList.get(connected_user.username).friendsMessagesHistory.set(friend.username, newList);
            var new_message_friend = {...new_message, iSent: false};
            friend_messages_history = [...friend_messages_history, new_message_friend];
            usersList.get(friend.username).friendsMessagesHistory.set(connected_user.username, friend_messages_history);
            set_message({ date: Helpers.getDate(), time: "", message: "", displayMessage: "", type: "", iSent: "" });
            
        }
    }

  
    const HandleChangeMessage= e => {
        const today = new Date();
        const time = today.getHours() + ':' + Helpers.setMin(today.getMinutes());
        set_message({ date: Helpers.getDate(), time: time, message: e.target.value, displayMessage: e.target.value, type: "text", iSent: true });
    }
    
    const HandleSendMessage = (e) => {
        if (e.key === "Enter") {
            HandleAddMessage(e);
        }
    }
    
    // handle upload inmage and videos functions #################################################################
    const inputs = [
        { id: "selectPhoto", val: "Upload an image", type: "image", clearVal: "imageUpload"},
        { id: "selectVideo", val: "Upload a video", type: "video", clearVal: "videoUpload" },
        { id: "selectAudio", val: "Upload an audio", type: "audio", clearVal: "audioUpload" }
    ];

    var photo = null;
    const photoHandler = (e) => {
        photo = e.target.files[0];
    }

    var video = null;
    const videoHandler = (e) => {
        video = e.target.files[0];
        console.log(video);
    }
    var audio = null;
    const audioHandler = (e) => {
        audio = e.target.files[0];
        console.log(audio);
    }

    const HandleUpload = (e, input) => {
        e.preventDefault();
        const today = new Date();
        const time = today.getHours() + ':' + Helpers.setMin(today.getMinutes());
        if (input.id == "selectPhoto") {
            set_message({ date: Helpers.getDate(), time: time, message: photo, displayMessage: "photo", type: "photo", public: false, iSent: true });
            HandleAddMessage(e);
        } else if(input.id =="selectVideo") {
            set_message({ date: Helpers.getDate(), time: time, message: video, displayMessage: "video", type: "video", public: false, iSent: true });
            HandleAddMessage(e);
        }
        else {
            set_message({ date: Helpers.getDate(), time: time, message: audio, displayMessage: "audio", type: "audio", public: false, iSent: true });
            HandleAddMessage(e);
        }
        
        handleExit(input.id, input.clearVal);
    }

    const HandleSubmitImageOrVideo= (e, input) => {
        HandleUpload(e, input);
        setUploadOptionsPopup(false);
    }

    const HandleOptions = (input, key)=> {
        if (input.type == "image"){
            return(<input className="form-control form-control-sm" id="imageUpload formFileSm" type="file" accept="image/*" onChange={photoHandler} required></input>);
        }
        else if (input.type == "video") {
            return(<input className="form-control form-control-sm" id="videoUpload formFileSm" type="file" accept="video/*" onChange={videoHandler} required></input>);
        }
        else if (input.type == "audio") {
            return(<input className="form-control form-control-sm" id="audioUpload formFileSm" type="file" accept="audio/*" onChange={audioHandler} required></input>);
        }
    }
    const imageOrVideoTags = inputs.map((input, key) => {
        return (
            <div key={key} id={input.id} className="container UploadImageOrVideo">
                <div className="row">
                    <div className="col-10 padding">{input.val}</div>
                    <div id="x-button" className='col-2'>
                        <button className="button bi bi-x-circle btn btn-outline-secondary" onClick={() => { handleExit(input.id, input.clearVal) }}> </button>
                    </div>
                </div>
                <form className="form-floating mb3" onSubmit={(e) => HandleSubmitImageOrVideo(e, input)}>
                    <div className="form-floating mb-3 row "> 
                    {/* {(input.type == "image") ? (
                        <input className="form-control form-control-sm" id="imageUpload formFileSm" type="file" accept="image/*" onChange={photoHandler} required></input>
                    ) : (
                            <input className="form-control form-control-sm" id="videoUpload formFileSm" type="file" accept="video/*" onChange={videoHandler} required></input>
                    )} */}
                    {HandleOptions(input, key)}
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
            <div id="chat">
                <div className="header">
                    <span><img src={friend.public_photo} alt="photo" className="border border-1 rounded-circle images"></img></span>
                    <h3>chat with {friend.nickname}</h3>
                </div>
                <InitialChat connected_user={connected_user} friend={friend} setList={setList}/>
                <div className="chatBody"><Message messagesList={messagesList} /></div>
                <div className="toolBar">
                    <button className="bi bi-link-45deg" onClick={()=>setUploadOptionsPopup(true)}></button>
                    <div><UploadOptions trigger={UploadOptionsPopup} setUploadOptionsPopup={setUploadOptionsPopup}></UploadOptions></div>
                    <form>
                        <input id="newM" placeholder='Write your message' type="text" onChange={HandleChangeMessage}
                            value={new_message.displayMessage} onKeyPress={HandleSendMessage} onClick={()=>{setUploadOptionsPopup(false); setUseMicrophone(false)}}/>
                        <button className="button_option bi bi-mic" onClick={(e)=>{e.preventDefault(); setUseMicrophone(!useMicrophone)}}></button>
                        <div className='microphone'><Record trigger={useMicrophone} setUseMicrophone={setUseMicrophone} set_message={set_message} HandleAddMessage={HandleAddMessage}/></div>
                        <button className="button_option bi bi-envelope" onClick={HandleAddMessage} type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div>
                {imageOrVideoTags}
            </div>
        </div>
    );
}

export default Chat;
